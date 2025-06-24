'use strict';

let valueL = 0;
let valueR = 0;
let num = 0;
let symbol;

$(document).ready(function() {

    //リセット
    $('#reset').on('click', function(){
        num = 0;
        valueL = 0;
        valueR = 0;
        symbol = 0;
        document.getElementById('answer').textContent = 0;
    })

    //複数桁のa+bの足し算
    //数を入力
    $('.num button').on('click', function(){
        if(num === 0) {
            num = $(this).text();
        } else {
            num += $(this).text();
        }
        document.getElementById('answer').textContent = num;
    });

    //記号をクリック
    $('.symbol button').on('click', function(){
        valueR = Number(num);
        if(valueL){
            keisan();
        } else {
            valueL = valueR;
        }
        valueR = 0;
        num = 0;
        symbol = $(this).attr('id');
        document.getElementById('answer').textContent = valueL;
    });

    //イコールをクリック
    $('#equal').on('click', function(){
        valueR = Number(num);
        if(symbol){
            keisan();
        } else {
            valueL = valueR
        }
        valueR = 0;
        num = 0;
        symbol = $(this).attr('id');
        document.getElementById('answer').textContent = valueL;
    })

    //計算内容
    function keisan(){
        if (symbol === 'add') {
            valueL += valueR;
        } else if (symbol === 'sub') {
            valueL -= valueR;
        } else if (symbol === 'mul') {
            valueL *= valueR;
        } else if (symbol === 'div') {
            valueL /= valueR;
        // } else if (symbol === 'equal') {
        //     valueL = valueR;
        }
    }
    
    //検証用
    $('button').on('click', function(){
        console.log('num = ' + num);
        console.log('valueL = ' + valueL);
        console.log('valueR = ' + valueR);
        console.log('symbol = ' + symbol);
        console.log('---------------------')
    })
});
