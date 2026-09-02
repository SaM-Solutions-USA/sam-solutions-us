'use strict';

jQuery(function ($) {

  $('.tabs__caption').on('click', '.caption-item:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

  $('.tabs1__caption').on('click', '.caption-item:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active').closest('div.tabs1').find('div.tabs1__content').removeClass('active').eq($(this).index()).addClass('active');
  });

  function popupRequestShowNew() {
    var $popup = $('.popup-in-migration-checklist');
    $popup.addClass('popup_show');
    $('body').addClass('overlayed');
    return false;
  }

  $('.page-template-Cloud-migration-services .services-page-section__link').on('click', function (e) {
    e.preventDefault();
    popupRequestShowNew();
  });

  var Accordion = function () {
    return {
      init: function init(element, resolution) {
        this.event(element, resolution);
      },

      event: function event(element, resolution) {
        $(element).on('click', function () {
          if ($(window).innerWidth() <= resolution) {
            $(this).parent().toggleClass('show');
          }
        });
      }
    };
  }();
  Accordion.init('.services-page .unit__title', 480);

  Accordion.init('.page-template-Flexible-template .unit__title', 480);

  $(".page-template-React-development-services .services-page-section__link").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке

    event.preventDefault();

    //забираем идентификатор бока с атрибута href

    var id = $(this).attr('href'),


    //узнаем высоту от начала страницы до блока на который ссылается якорь

    top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс

    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

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
jQuery(function ($) {
  $(function () {
    $('.checkbox__input').on('change', function () {
      if ($('.checkbox__input').prop('checked')) {} else {}
    });
  });
});