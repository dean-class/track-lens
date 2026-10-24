const img=document.getElementById('panel-preview');
for(const mode of ['dark','light']){
 const button=document.getElementById('preview-'+mode);
 button?.addEventListener('click',()=>{
   img.src='./assets/panel-'+mode+'.webp';
   img.alt='Track Lens sample panel in '+mode+' theme showing BPM, Camelot, energy and danceability';
   for(const value of ['dark','light']){
     const element=document.getElementById('preview-'+value);
     element.classList.toggle('active',value===mode);
     element.setAttribute('aria-pressed',String(value===mode));
   }
 });
}
