import os
from PIL import Image, ImageOps

source_img = "/public/assets/aistudio/rhodon_dh_chosen_mason_f6d06090.jpeg"
if not os.path.exists(source_img):
    source_img = "public/assets/aistudio/rhodon_dh_chosen_mason_f6d06090.jpeg"

print(f"Loading source image from {source_img}...")
img = Image.open(source_img).convert("RGBA")

# Ensure public dir exists
os.makedirs("public", exist_ok=True)

# 1. 192x192
img_192 = img.resize((192, 192), Image.Resampling.LANCZOS)
img_192.save("public/pwa-192x192.png", "PNG")

# 2. 512x512
img_512 = img.resize((512, 512), Image.Resampling.LANCZOS)
img_512.save("public/pwa-512x512.png", "PNG")

# 3. 180x180 apple-touch-icon
img_apple = img.resize((180, 180), Image.Resampling.LANCZOS)
img_apple.save("public/apple-touch-icon.png", "PNG")

# 4. Favicon (48x48, 32x32, 16x16)
img.resize((48, 48), Image.Resampling.LANCZOS).save("public/favicon.ico", format="ICO")

# 5. Maskable 512x512 with safe-zone padding (80% diameter centered in dark background)
maskable = Image.new("RGBA", (512, 512), (10, 10, 11, 255))
scaled_w = int(512 * 0.76)
scaled_h = int(512 * 0.76)
scaled_img = img.resize((scaled_w, scaled_h), Image.Resampling.LANCZOS)
offset_x = (512 - scaled_w) // 2
offset_y = (512 - scaled_h) // 2
maskable.paste(scaled_img, (offset_x, offset_y), scaled_img)
maskable.save("public/pwa-maskable-512x512.png", "PNG")

# 6. Minimal icon.svg
svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <circle cx="256" cy="256" r="256" fill="#0a0a0b"/>
  <circle cx="256" cy="256" r="236" fill="none" stroke="#c5a059" stroke-width="8"/>
  <polygon points="256,70 416,360 96,360" fill="none" stroke="#c5a059" stroke-width="12"/>
  <circle cx="256" cy="245" r="45" fill="#c5a059"/>
  <circle cx="256" cy="245" r="22" fill="#0a0a0b"/>
</svg>'''
with open("public/icon.svg", "w") as f:
    f.write(svg_content)

print("All PWA and desktop icons successfully generated in public/ directory!")
