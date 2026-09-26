from PIL import Image, ImageDraw
from pathlib import Path
files=sorted(Path('tmp/pdfs').glob('brochure-*.jpg'))
thumb_w, thumb_h, cols = 220, 270, 6
rows=(len(files)+cols-1)//cols
sheet=Image.new('RGB',(cols*thumb_w,rows*(thumb_h+24)),'white')
d=ImageDraw.Draw(sheet)
for j,p in enumerate(files):
    im=Image.open(p).convert('RGB')
    im.thumbnail((thumb_w,thumb_h))
    x=(j%cols)*thumb_w
    y=(j//cols)*(thumb_h+24)
    sheet.paste(im,(x,y))
    d.text((x+4,y+thumb_h+2),f'Page {j+1}',fill='black')
sheet.save('tmp/pdfs/windsor-contact-sheet.jpg',quality=85)
