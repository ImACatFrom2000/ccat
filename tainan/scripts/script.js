'use strict';

// ハンバーガーメニュー
$(document).ready(function(){
    $('#openNav').on('click', function(){
        $('#nav').toggleClass('show');
        $('#openNav').addClass('opened');
    });
    $('#closeNav').on('click', function(){
    $('#nav').removeClass('show');
    $('#openNav').removeClass('opened');
    });
});

// ローディング画面
$(window).on("load", function () {
$(".jsLoader").delay(800).fadeOut(600); 
$(".jsLoaderBg").delay(1300).fadeOut(600); 
});

setTimeout("stoploading()", 5000);
function stoploading() {
$(".jsLoaderBg").fadeOut(600);
}

//モーダル
$(".modalOpen").on("click", function () {
    const targetId = $(this).data("target");
    $(`.modal[data-id="${targetId}"]`).addClass("open");
    $(`.overlay[data-id="${targetId}"]`).addClass("open");
});

$(".modalClose").on("click", function () {
    const modal = $(this).closest(".modal");
    const id = modal.data("id");
    modal.removeClass("open");
    $(`.overlay[data-id="${id}"]`).removeClass("open");
});

$(".overlay").on("click", function () {
    const id = $(this).data("id");
    $(this).removeClass("open");
    $(`.modal[data-id="${id}"]`).removeClass("open");
});
