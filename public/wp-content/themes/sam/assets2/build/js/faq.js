'use strict';

jQuery(function ($) {
  $('.faq__title').click(function (e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.next().hasClass('faq__content--show')) {
      $this.next().removeClass('faq__content--show');
      $this.removeClass('faq__title--show');
      $this.next().slideUp(350);
    } else {
      $this.parent().parent().find('faq__content').removeClass('faq__content--show');
      $this.parent().parent().find('faq__title').removeClass('faq__title--show');
      $this.parent().parent().find('faq__content').slideUp(350);
      $this.next().addClass('faq__content--show');
      $this.addClass('faq__title--show');
      $this.next().slideToggle(350);
    }
  });
});