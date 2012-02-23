$(document).ready(function() {
  $.fn.toggleInputText = function() { /* toggle input {{{ */
    var v = $(this).val(); 
    if($(this).val() == "")
      $(this).val(v).css({'color':'#ccc'});
    $(this).focus(function(){
      console.log(v);
      $(this).val('').select().css({'color':'#000'});
    }).blur(function(){
      console.log(v);
      if($(this).val()==""){
         $(this).val(v).css({'color':'#ccc'});
      }
    });
  };/* }}} */
  $("#minicart").hover(function(){ /* minicart show {{{ */
    if(!$("#minicartContent").is(":animated"))
      $("#minicartContent").slideDown();//.show();
  },function(){
      $("#minicartContent").slideUp();//.hide();
  });/* }}} */
  $('.switch-tabs > li').mouseover(function() {/* tab 切换 {{{ */
    $(this).addClass('current').siblings().removeClass('current');

    var idx = $('.switch-tabs > li').index(this);
    $('.switch-blocks > li:eq(' + idx + ')').addClass('current').siblings().removeClass('current');
    return false;
  });/* }}} */
  /* #nav hover {{{ */
  $(this).children('.widget-static-block').css('display','block');
  $('#nav li').hover(function(){
    $(this).children('.widget-static-block').show();
  },function(){
    $(this).children('.widget-static-block').hide();
  });/* }}} */
});
