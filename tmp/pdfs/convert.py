from PIL import Image
from pathlib import Path
Path('public/projects').mkdir(parents=True, exist_ok=True)
assets=[('tmp/pdfs/windsor-villa.png','public/projects/casagrand-windsor-court-villa.webp'),('tmp/pdfs/windsor-masterplan.png','public/projects/casagrand-windsor-court-masterplan.webp')]
for src,dst in assets:
    im=Image.open(src).convert('RGB')
    im.save(dst,'WEBP',quality=88,method=6)
    print(dst, im.size, Path(dst).stat().st_size)
