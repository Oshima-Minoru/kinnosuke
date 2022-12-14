"use strict";


$(function () {
    // フェードイン
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});

var scrollHeight = window.innerHeight / 2;

window.onscroll = function() {scrollFunction()};
var mainMenu = document.getElementsByClassName("main-menu");
var headerMenu = document.getElementsByClassName("header-menu");

function scrollFunction() {
  var header = document.getElementsByClassName("header");
  if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
    header[0].classList.add("header-scroll");
    // mainMenu.classList.add("sticky");
  } 
  else {
    if(header[0].classList.contains("header-scroll")){
        header[0].classList.remove("header-scroll");
        // mainMenu.classList.remove("sticky");
    }
  }
}

function menuClick(x) {
    x.classList.toggle('menu-open');
    var menu = document.getElementsByClassName('menu')
    var submenu = menu[0].firstElementChild.lastElementChild;
    if (x.classList.contains('menu-open')) {
        menu[0].classList.add('menu-main-open');
    } else {
        menu[0].classList.remove('menu-main-open')
        submenu.style.height = null;
    }
}
function menuClose() {
    var menuBtn = document.getElementsByClassName('menu-btn');
    var menu = document.getElementsByClassName('menu')
    var submenu = menu[0].firstElementChild.lastElementChild;
    if (menuBtn[0].classList.contains('menu-open')) {
        menuBtn[0].classList.remove('menu-open')
        menu[0].classList.remove('menu-main-open');
        submenu.style.height = null;
    }
}

$( ".faq-q" ).click(function() {
    $(this).parents().eq(0).find(".faq-a").slideToggle();

    if($(this).parents().eq(0).hasClass("faq-show"))
        $(this).parents().eq(0).removeClass("faq-show");
    else
        $(this).parents().eq(0).addClass("faq-show");
});