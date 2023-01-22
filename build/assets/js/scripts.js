'use strict';
//sidebar burger menu
const burgerBtn = document.querySelector('.burger-btn'),
       sideBarMenu = document.querySelector('.sidebar'),
       mainWindow = document.querySelector('.main-part');
       console.log(mainWindow);
burgerBtn.onclick = ()=> {
  sideBarMenu.classList.toggle('is-none');
  mainWindow.classList.toggle('is-active');
  sideBarMenu.querySelector('.sidebar-logo .first-logo').classList.toggle('is-none');
  sideBarMenu.querySelector('.sidebar-logo .second-logo').classList.toggle('is-active');
  sideBarMenu.querySelector('.sidebar-logo .second-logo').style.height = '40px';

};

document.querySelector('.burger-btn_responsive').addEventListener('click', ()=>addActiveClass('.responsive-menu .my-list_cover'))

// adding active class function
function addActiveClass(selector) {
  document.querySelector(selector).classList.toggle('is-active');
};


//sidebar active class
const navList = document.querySelector('.nav-list'),
       navListLi = navList.querySelectorAll('.nav-list li');

function navListActive() {
  navListLi.forEach(element => {
    console.log(element);
    element.onclick = (e)=>{

      if(e.target.classList.contains('is-active')) {
        e.target.classList.remove('is-active')
      } else {
        e.target.classList.add('is-active')
  
      }
    }
  });
};
navListActive()

// preloader

window.onload = function() {
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
};


//slick slider
$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    fadeSpeed: 1000
  });
});

// circle progress bar

// let progressValue = 0;
// let orangeProgress = setInterval(circleBarFunc,10,'.orange-circle','.orange-circle .inner-circle span','#FF8E26',66);
// let greenProgress = setInterval(circleBarFunc,10,'.green-circle','.green-circle .inner-circle span','#3EA834',31);
// let blueProgress = setInterval(circleBarFunc,10,'.blue-circle','.blue-circle .inner-circle span','#22AC93',85);


// function circleBarFunc(selector,selectorText,first){
//         progressValue++;
//         document.querySelector(selectorText).textContent = `${progressValue}%`;
//         document.querySelector(selector).style.background = `conic-gradient(
//           ${first} ${progressValue * 3.6}deg,
//           #f0f0f0 ${progressValue * 3.6}deg
//       )`;

//       function stopColorTimer(num, funcName) {
//         if(progressValue == num) {
//           clearInterval(funcName);
//         } 
//   };

//         stopColorTimer(66,orangeProgress);
//         stopColorTimer(31,greenProgress);
//         stopColorTimer(7,blueProgress);
// };

