document.addEventListener('DOMContentLoaded',()=>{
  const modal=document.getElementById('contactModal');
  const openBtns=document.querySelectorAll('#openContactModal,#openContactModalHero');
  const closeBtn=document.getElementById('closeContactModal');
  const hamburger=document.getElementById('hamburger');
  const nav=document.getElementById('nav-links');

  openBtns.forEach(b=>b&&b.addEventListener('click',()=>modal.style.display='block'));
  closeBtn.addEventListener('click',()=>modal.style.display='none');

  hamburger.addEventListener('click',()=>nav.classList.toggle('active'));

  const track=document.querySelector('.carousel-track');
  let i=0;
  setInterval(()=>{
    i=(i+1)%track.children.length;
    track.style.transform=`translateX(-${i*100}%)`;
  },4000);
});
