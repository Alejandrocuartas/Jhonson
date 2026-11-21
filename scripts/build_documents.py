import pymupdf as fitz, sys
from PIL import Image, ImageOps
src=sys.argv[1]; P=sys.argv[2]; X=sys.argv[3]
doc=fitz.open(src)
def raster(pages,out,dpi):
    new=fitz.open()
    for i in pages:
        pg=doc[i]; pix=pg.get_pixmap(dpi=dpi)
        np_=new.new_page(width=pg.rect.width,height=pg.rect.height)
        np_.insert_image(np_.rect,stream=pix.tobytes('jpeg',jpg_quality=78))
    new.set_metadata({'title':'Jhonson Vargas Castro — '+('CV' if len(pages)<5 else 'Portafolio'),'author':'Jhonson Vargas Castro'})
    new.save(out,deflate=True,garbage=4)
raster([1,2],f'{P}/public/docs/jhonson-vargas-cv.pdf',150)
raster(range(len(doc)),f'{P}/public/docs/jhonson-vargas-portafolio.pdf',100)
# logo mark: crop top part of logo (p22_x238 RGBA)
lg=Image.open(f'{X}/p22_x238.png').convert('RGBA'); bb=lg.getbbox(); lg=lg.crop(bb)
w,h=lg.size
# find gap row between mark and wordmark
a=lg.split()[3]
rows=[max(a.crop((0,y,w,y+1)).getdata()) for y in range(h)]
y=int(h*0.3)
while rows[y]>10: y+=1
mark=lg.crop((0,0,w,y)); mark=mark.crop(mark.getbbox())
mark.save(f'{P}/public/brand/mark-color.png')
# dark monochrome version
alpha=mark.split()[3]
mono=Image.new('RGBA',mark.size,(28,28,26,255)); mono.putalpha(alpha); mono.save(f'{P}/public/brand/mark.png')
lg.save(f'{P}/public/brand/logo-color.png')
# icon 512 on stone bg
ic=Image.new('RGBA',(512,512),(246,245,241,255)); m=mono.copy(); m.thumbnail((340,340)); ic.alpha_composite(m,((512-m.width)//2,(512-m.height)//2)); ic.convert('RGB').save(f'{P}/src/app/icon.png')
ap=ic.convert('RGB').resize((180,180),Image.LANCZOS); ap.save(f'{P}/src/app/apple-icon.png')
print(mark.size)
