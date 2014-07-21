/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('#show-modal').on('click', function(){
    $('.overlay, .notice').show();
});

$('.overlay, .close').on('click',function(){
    $('.overlay, .notice').hide();
});