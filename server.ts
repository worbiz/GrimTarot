import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Optional AI Deep Reflection Endpoint using Gemini API
  app.post('/api/tarot-ai-interpretation', async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        return res.json({
          interpretation:
            'Die Legung wurde lokal offline ausgewertet. Für tiefere KI-Inspirationen konfigurieren Sie bitte den GEMINI_API_KEY in den AI Studio Einstellungen.'
        });
      }

      const { spreadName, question, drawnCards } = req.body;

      const ai = new GoogleGenAI({ apiKey });

      const prompt = `Du bist ein tiefgründiger, empathischer Experte für das Aleister Crowley Thoth Tarot (Buch Thoth, Lady Frieda Harris).
Erstelle eine präzise, faszinierende Interpretation in deutscher Sprache für folgende Tarot-Legung:

Legung: ${spreadName}
Frage / Thema: ${question || 'Allgemeiner Lebensfokus'}

Gezogene Karten:
${JSON.stringify(drawnCards, null, 2)}

Achte besonders auf:
1. Das Zusammenspiel der Crowley Thoth Symbolik (Elemente, Atu, Astrologie, Hofkarten).
2. Konkrete, lebensnahe Ratschläge ohne Schwarzmalerei.
3. Wenn Karten 'isReversed: true' (auf dem Kopf stehend) sind: Beachte, dass dies signalisiert, dass die Energie blockiert, verzögert oder nach innen gerichtet ist. Es ist kein rein negatives Omen, sondern zeigt eine Herausforderung oder ungenutzte Chance an.
4. Halte die Zusammenfassung prägnant (ca. 150-250 Wörter), tiefgründig und inspirierend.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });

      const interpretationText = response.text || 'Keine Antwort generiert.';

      res.json({ interpretation: interpretationText });
    } catch (error) {
      console.error('Error generating AI tarot interpretation:', error);
      res.status(500).json({
        interpretation:
          'Es ist ein Fehler bei der Online-Interpretation aufgetreten. Ihre Legung bleibt lokal im Tagebuch vollständig ausgewertet.'
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', app: 'GrimTarot' });
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`GrimTarot server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
