$(document).ready(function(){
    $('.sidenav').sidenav();
    $('#img-cook').mouseenter(function (){
        $(this).removeClass('work-img');
    });
    $(' #img-cook').mouseleave(function (){
        $(this).addClass('work-img');
    });
    $('#img-tetris').mouseenter(function (){
        $(this).removeClass('work-img');
    });
    $(' #img-tetris').mouseleave(function (){
        $(this).addClass('work-img');
    });
    $('#img-gym').mouseenter(function (){
        $(this).removeClass('work-img');
    });
    $(' #img-gym').mouseleave(function (){
        $(this).addClass('work-img');
    });
  });