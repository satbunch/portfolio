$(function () {
    $('.ac-parent').on('click', function () {
    $(this).next().slideToggle();

  });

  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  $('.hamburger').on('click', function() {
    hamburger();
  });
  $('#navi a').on('click', function() {
    hamburger();
  });

});

/*=================================================
ハンバーガ―メニュー共通処理
===================================================*/
// ハンバーガーメニューをクリックした時とメニュー内のリンクをクリックした時の
// 処理が同じなので処理を共通化する
function hamburger() {
  // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる
  $('.hamburger').toggleClass('active');

  if ($('.hamburger').hasClass('active')) {
    $('#navi').addClass('active');
  } else {
    $('#navi').removeClass('active');
  }
}