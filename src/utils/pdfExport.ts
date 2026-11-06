import jsPDF from 'jspdf';
import { DrawnCard, SpreadDef, TarotReading } from '../types/tarot';

export interface PDFExportData {
  spreadName: string;
  question?: string;
  timestamp?: number;
  drawnCards: DrawnCard[];
  summaryText: string;
  userNotes?: string;
  dominantElement?: string;
  harmonyScore?: number;
  aiAnalysis?: string | null;
}

export function exportTarotReadingToPDF(data: PDFExportData): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkAddPage = (requiredHeight: number) => {
    if (y + requiredHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
      drawHeaderFooter();
    }
  };

  const drawHeaderFooter = () => {
    // Top border line
    doc.setDrawColor(197, 160, 89); // Gold
    doc.setLineWidth(0.5);
    doc.line(margin, 10, pageWidth - margin, 10);

    // Footer
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(140, 140, 140);
    doc.text('GrimTarot - Aleister Crowley Thoth Orakel (100% Offline Export)', margin, pageHeight - 8);
    
    const pageStr = `Seite ${doc.getNumberOfPages()}`;
    doc.text(pageStr, pageWidth - margin - doc.getTextWidth(pageStr), pageHeight - 8);
  };

  // Header Background
  doc.setFillColor(18, 18, 20); // Dark #121214
  doc.rect(margin, y, contentWidth, 28, 'F');
  doc.setDrawColor(197, 160, 89);
  doc.setLineWidth(0.8);
  doc.rect(margin, y, contentWidth, 28, 'D');

  // Title inside box
  doc.setFont('serif', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(244, 244, 245);
  doc.text('GrimTarot', margin + 6, y + 11);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(197, 160, 89);
  doc.text('ALEISTER CROWLEY THOTH ORAKEL', margin + 6, y + 18);

  const dateStr = new Date(data.timestamp || Date.now()).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(180, 180, 180);
  doc.text(`Datum: ${dateStr}`, pageWidth - margin - 6 - doc.getTextWidth(`Datum: ${dateStr}`), y + 11);

  y += 34;

  // Reading Title & Question
  doc.setFont('serif', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(10, 10, 11);
  doc.text(`Legung: ${data.spreadName}`, margin, y);
  y += 6;

  if (data.question) {
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    const qLines = doc.splitTextToSize(`Frage: "${data.question}"`, contentWidth);
    doc.text(qLines, margin, y);
    y += qLines.length * 5 + 2;
  } else {
    y += 2;
  }

  // Divider
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;

  // Cards Table Header
  checkAddPage(20);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(197, 160, 89);
  doc.text('GEZOGENE KARTEN UND POSITIONEN', margin, y);
  y += 6;

  // Table Column Headers
  doc.setFillColor(240, 240, 242);
  doc.rect(margin, y, contentWidth, 7, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(60, 60, 60);
  doc.text('Pos.', margin + 3, y + 5);
  doc.text('Position & Bedeutung', margin + 15, y + 5);
  doc.text('Karte & Thoth-Titel', margin + 70, y + 5);
  doc.text('Element / Astrologie', margin + 130, y + 5);
  y += 8;

  // Table Rows
  data.drawnCards.forEach((drawn, index) => {
    checkAddPage(14);

    if (index % 2 === 1) {
      doc.setFillColor(248, 248, 250);
      doc.rect(margin, y - 1, contentWidth, 11, 'F');
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(197, 160, 89);
    doc.text(`#${drawn.positionIndex + 1}`, margin + 3, y + 4);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 30, 30);
    const posTitle = drawn.positionTitle.length > 28 ? drawn.positionTitle.slice(0, 26) + '...' : drawn.positionTitle;
    doc.text(posTitle, margin + 15, y + 4);

    // Card Name & Thoth Title
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(10, 10, 11);
    const revLabel = drawn.isReversed ? ' (Umgekehrt ↷)' : '';
    const cardNameText = `${drawn.card.nameGerman}${revLabel}`;
    doc.text(cardNameText, margin + 70, y + 4);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 100, 100);
    if (drawn.card.thothTitle) {
      doc.text(drawn.card.thothTitle, margin + 70, y + 8);
    }

    // Element & Astrology
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(50, 50, 50);
    const elemAstrology = `${drawn.card.element} | ${drawn.card.astrology}`;
    doc.text(elemAstrology, margin + 130, y + 4);

    y += 11;
  });

  y += 4;

  // Divider
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;

  // Synthesis Section
  checkAddPage(30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(197, 160, 89);
  doc.text('SYNTHESE & ORAKEL-DEUTUNG', margin, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);

  const summaryLines = doc.splitTextToSize(data.summaryText, contentWidth - 4);
  summaryLines.forEach((line: string) => {
    checkAddPage(6);
    doc.text(line, margin + 2, y);
    y += 5;
  });

  y += 4;

  // AI Reflection if present
  if (data.aiAnalysis) {
    checkAddPage(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(197, 160, 89);
    doc.text('KI-TIEFENREFLEXION', margin, y);
    y += 5;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(50, 50, 50);

    const aiLines = doc.splitTextToSize(data.aiAnalysis, contentWidth - 4);
    aiLines.forEach((line: string) => {
      checkAddPage(5);
      doc.text(line, margin + 2, y);
      y += 4.5;
    });

    y += 4;
  }

  // Personal Notes if present
  if (data.userNotes && data.userNotes.trim().length > 0) {
    checkAddPage(20);
    doc.setFillColor(245, 245, 248);
    
    const notesLines = doc.splitTextToSize(`Notizen:\n${data.userNotes}`, contentWidth - 8);
    const boxHeight = notesLines.length * 4.5 + 8;
    
    doc.rect(margin, y, contentWidth, boxHeight, 'F');
    doc.setDrawColor(197, 160, 89);
    doc.setLineWidth(0.4);
    doc.rect(margin, y, contentWidth, boxHeight, 'D');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 30, 30);
    
    let noteY = y + 5;
    notesLines.forEach((line: string) => {
      doc.text(line, margin + 4, noteY);
      noteY += 4.5;
    });

    y += boxHeight + 6;
  }

  // Draw header/footer on page 1
  drawHeaderFooter();

  // Save PDF file locally
  const sanitizedSpread = data.spreadName.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `GrimTarot_${sanitizedSpread}_${dateStr.replace(/[^0-9]/g, '')}.pdf`;
  doc.save(filename);
}
