
const btn = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
if (btn) {
  btn.addEventListener('click', ()=>{
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    menu.style.display = open ? 'none' : 'flex';
  });
}
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
