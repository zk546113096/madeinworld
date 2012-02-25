$(document).ready(function() {

  $('.topmenu-num-text').toggleInputText();
  $('.search-key-text').toggleInputText();
  $('.footer-key-text').toggleInputText();
  $('.email-add-text').toggleInputText();

  $('.switch-tab-1').mouseover(function() {
    $('.r_tab_title').css('background', 'url(./sources/images/index/r-tab-title-01.png) no-repeat');
  });

  $('.switch-tab-2').mouseover(function() {
    $('.r_tab_title').css('background', 'url(./sources/images/index/r-tab-title-02.png) no-repeat');
  });

  var newsletterSubscriberFormDetail = new VarienForm('newsletter-validate-detail');

  decorateGeneric($$('ul.products-grid'), ['odd','even','first','last']);

/*
 * bgiframe 插件用来轻松解决 IE6 z-index 的问题，如果网页上有浮动区块和下拉选单重叠时，在IE6会看到下拉选框总是把浮动区块覆盖住，无论怎么调整 z-index 都是没用的，而用 bgiframe 就可以轻松解决这个问题。
 */
$('#minicartContent').bgiframe(); 

/*
   * 首页 slider box 轮换
   */
  $('#flashbox2').smallslider();


});
