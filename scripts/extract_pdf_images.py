import pymupdf as fitz, sys, os
from PIL import Image
doc=fitz.open(sys.argv[1]); out=sys.argv[2]; seen={}
for pno,page in enumerate(doc,1):
    for info in page.get_image_info(xrefs=True):
        x=info['xref']
        if not x: continue
        b=fitz.Rect(info['bbox'])
        key=(x)
        name=f"p{pno:02d}_x{x}"
        if x in seen:
            print(name,'dup-of',seen[x],[round(v) for v in b]); continue
        seen[x]=name
        img=doc.extract_image(x); sm=img.get('smask',0)
        pix=fitz.Pixmap(doc,x)
        if sm:
            mask=fitz.Pixmap(doc,sm)
            try: pix=fitz.Pixmap(pix,mask)
            except Exception as e: print('maskfail',e)
        if pix.n-pix.alpha>3: pix=fitz.Pixmap(fitz.csRGB,pix)
        fn=f"{out}/{name}.png"; pix.save(fn)
        print(name,pix.width,pix.height,'alpha' if pix.alpha else '',[round(v) for v in b])
