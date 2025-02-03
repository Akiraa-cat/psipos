let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('active');
}

const header = document.querySelector('.header');

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 25) {
    header.classList.add('scrolled');

  } else {
    header.classList.remove('scrolled');

  }
});

const secret = document.querySelector('.header .navbar');

if (secret) {
  const secretLink = document.createElement('a');
  secretLink.className = 'easter-egg';
  secretLink.textContent = 'S3CR3T';
  secretLink.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUIcmlja3JvbGw%3D';

  secret.insertBefore(secretLink, secret.firstChild);
}

window.addEventListener('scroll', () => {
  const theSecret = document.querySelector('.header .navbar a.easter-egg');
  if (theSecret) {
    if (window.scrollY > 25) {
      theSecret.classList.add('hidden');
    } else {
      theSecret.classList.remove('hidden'); 
    }
  }
});

// JavaScript untuk navigasi tanpa hash di URL
document.querySelectorAll('a[data-scroll]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-scroll');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {

          targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            this.blur();
        }
    });
});

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.type .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 3;

   if(currentItem >= 12){
      loadMoreBtn.style.display = 'none';
   }
}
