'use strict';

//ハンバーガーメニュー
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

//ローディング画面
$(window).on("load", function () {
    $(".jsLoader").delay(800).fadeOut(600); 
    $(".jsLoaderBg").delay(1300).fadeOut(600); 
});
setTimeout("stoploading()", 5000);

function stoploading() {
    $(".jsLoaderBg").fadeOut(600);
}

// スライダー
$(document).ready(function(){
    $('#arrowR').on('click', function(){
        sliderDeleteL();
    });
    $('#arrowL').on('click', function(){
        sliderDeleteR();
    });

    // インジケータ―変更
    function circleChange(){
        const center = $('#slider li:nth-child(4) img').attr('class');
        $('.circles span').removeClass('selected');
        let n;
        for(n=1; n<6; n++) {
            if (center === `slider${n}`) {
                $(`.circles span:nth-child(${n})`).addClass('selected');
            }
        }
    }
    //3秒ごとに遷移
    setInterval(sliderDeleteL, 3000);

    //右ボタンクリック
    function sliderDeleteL() {
        document.querySelector('#slider img').remove();
        $('#slider').addClass('slideL');
        setTimeout(slideL, 500);
    }
    function slideL(){
        $('#slider').removeClass('slideL')
        document.querySelector('#slider li').remove();
        sliderAddR();
    }
    function sliderAddR(){
        const last = document.querySelector('#slider img:last-child').getAttribute('class')
        let slideAdd;
        let n;
        for(n=1; n<6; n++) {
            if (last === `slider${n}`) {
                slideAdd = `slider${n+1}`;
                if (slideAdd === "slider6") {
                    slideAdd = "slider1";
                }
            }
        }
        document.getElementById('slider').insertAdjacentHTML('beforeend', `<li><img src="images/${slideAdd}.png" class="${slideAdd}"></li>`)
        circleChange();
    }

    // 左ボタンクリック
    function sliderDeleteR() {
        document.querySelector('#slider li:last-child').remove();
        $('#slider').addClass('slideR');
        setTimeout(slideR, 500)
    }
    function slideR() {
        $('#slider').removeClass('slideR');
        document.getElementById('slider').insertAdjacentHTML('afterbegin', '<li><img></li>');
        sliderAddL();
    }
    function sliderAddL() {
        const first = document.querySelector('#slider li:nth-child(2) img').getAttribute('class');
        let slideAdd;
        let n;
        for(n=1; n<6; n++) {
            if (first === `slider${n}`) {
                slideAdd = `slider${n-1}`;
                if (slideAdd === "slider0") {
                    slideAdd = "slider5";
                }
            }
        }
        document.querySelector('#slider img').setAttribute('src', `images/${slideAdd}.png`);
        document.querySelector('#slider img').setAttribute('class', slideAdd);
        circleChange();
    }
});
