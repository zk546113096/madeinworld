$(document).ready(function() {

  $('.topmenu-num-text').toggleInputText();
  $('.search-key-text').toggleInputText();

  /*
   * bgiframe 插件用来轻松解决 IE6 z-index 的问题，如果网页上有浮动区块和下拉选单重叠时，在IE6会看到下拉选框总是把浮动区块覆盖住，无论怎么调整 z-index 都是没用的，而用 bgiframe 就可以轻松解决这个问题。
   */
  $('#minicartContent').bgiframe(); 


});
