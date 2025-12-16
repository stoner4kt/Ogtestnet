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
// Botpress Chatbot Init
window.addEventListener("load", () => {
  if (!window.botpress) return;

  window.botpress.on("webchat:ready", () => {
    window.botpress.open();
  });

  window.botpress.init({
    botId: "ba59db63-b661-4333-b508-79d0c1be1d69",
    clientId: "ec456122-3795-4c41-a3a6-3c9c336dcf4d",
    selector: "#webchat",
    configuration: {
      website: {},
      email: {},
      phone: {},
      termsOfService: {},
      privacyPolicy: {}
    }
  });
});
