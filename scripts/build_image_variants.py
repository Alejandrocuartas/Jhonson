import json, os, sys
from PIL import Image
X=sys.argv[1]; OUT=sys.argv[2]; MAN=sys.argv[3]
W=[320,640,960,1280,1920,2560]
A={
 'zanjon':[('render-acceso','p04_x741'),('render-aereo','p07_x117'),('render-plazoleta','p07_x118'),('render-sendero','p07_x119'),('render-canal','p07_x120'),
   ('planta-urbana','p06_x105'),('axo-urbano-01','p06_x108'),('axo-urbano-02','p06_x109'),('axo-urbano-03','p06_x110'),
   ('implantacion-vivienda','p08_x123'),('axo-vivienda-01','p08_x126'),('axo-vivienda-02','p08_x127'),('axo-vivienda-03','p08_x128'),
   ('plantas-tipologia','p09_x135'),('cortes-fachadas','p09_x136'),('axo-tipologia-01','p09_x137'),('axo-tipologia-02','p09_x883'),('axo-tipologia-03','p09_x139')],
 'mirador':[('render-fachada','p11_x917'),('render-esquina','p04_x744'),('render-frontal','p11_x920'),('planta-render-01','p11_x153'),('planta-render-02','p11_x152'),('planos-tecnicos','p10_x144')],
 'arbolito':[('render-fachada','p12_x159'),('render-acceso','p04_x735'),('render-bbq','p13_x167'),('render-patio','p13_x168'),('render-jardin','p13_x169'),('render-cocina','p13_x170'),
   ('planta-arquitectonica','p13_x171'),('fachada','p14_x176'),('render-garaje-01','p14_x177'),('render-garaje-02','p14_x178'),('render-garaje-03','p14_x179'),('render-fachada-02','p14_x180'),('render-fachada-03','p14_x181')],
 'horizonte':[('render-fachada','p15_x969'),('render-frontal','p15_x963'),('render-nocturno','p04_x732'),('plantas','p16_x194')],
 'san-jeronimo':[('plantas','p17_x198'),('fachada-cortes','p18_x207'),('planta-cubierta','p18_x208')],
 'esencia':[('plantas','p19_x213'),('fachada-cortes','p20_x223'),('planta-cubierta','p20_x224')],
 'dais':[('plantas','p21_x231'),('planta-render-01','p21_x233'),('planta-render-02','p21_x232')],
 'perfil':[('retrato','p02_x669')],
}
ROT={'p21_x232':270,'p21_x233':270}
man={}
for proj,items in A.items():
  os.makedirs(f'{OUT}/{proj}',exist_ok=True)
  for name,src in items:
    im=Image.open(f'{X}/{src}.png').convert('RGBA')
    bg=Image.new('RGBA',im.size,(255,255,255,255)); bg.alpha_composite(im); im=bg.convert('RGB')
    if src in ROT: im=im.rotate(ROT[src],expand=True)
    w,h=im.size
    for tw in W:
      t=im if tw>=w else im.resize((tw,round(h*tw/w)),Image.LANCZOS)
      t.save(f'{OUT}/{proj}/{name}-{tw}.webp','WEBP',quality=80 if not name.startswith(('plan','fach','cort')) else 85,method=5)
    man[f'{proj}/{name}']={'src':f'/images/{proj}/{name}','width':w,'height':h}
json.dump(man,open(MAN,'w'),indent=1)
print(len(man))
