'use strict';

var second = function second() {

  var tableHtml = '<div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Engelsk</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"> <i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Geografi</div><div';
  var tableHtml2 = ' class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"> <i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Mattematikk 1T</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell">';
  var tableHtml3 = '<i class="fas fa-times fa-2x x-btn"></i></div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Naturfag</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Samfunnsfag</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen">';
  var tableHtml4 = '<li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Historie</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Religion</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li>';
  var tableHtml5 = '<li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul>';
  var tableHtml6 = '</div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Kropps&oslash;ving</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell"> <i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Norsk hovedm&aring;l, skriftlig';
  var tableHtml7 = '</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Norsk hovedmål, muntlig</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div>';
  var tableHtml8 = '<div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i></div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Norsk sidemål</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell"> <i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Fremmedspråk nivå II</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul>';
  var tableHtml9 = '</div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"> <i class="fas fa-times fa-2x x-btn"></i> </div></div></div></div>';
  var fullTableHtml = tableHtml + tableHtml2 + tableHtml3 + tableHtml4 + tableHtml5 + tableHtml6 + tableHtml7 + tableHtml8 + tableHtml9;
  $('.table-fellesfag').append(fullTableHtml);

  // revealing elements on scroll
  var header = {
    origin: "top",
    distance: "24px",
    duration: 1500,
    scale: 1.05
  };
  var intro = {
    origin: "bottom",
    distance: "64px",
    duration: 900,
    delay: 1500,
    scale: 1
  };
  var select = {
    duration: 800
  };
  var mobileAverage = {
    origin: "bottom",
    distance: "900px",
    duration: 1000,
    delay: 300,
    scale: 1
  };

  window.sr = ScrollReveal();
  sr.reveal('.header', header);
  sr.reveal('.title-jquery', header);
  sr.reveal('.intro', intro);
  sr.reveal('.div-programfag', select);
  sr.reveal('.more-fag', select);
  sr.reveal('.alderspoeng-div', select);
  sr.reveal('.checkbox-tilleggspoeng', select);

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  // reveals mobile average box when
  $(window).on('resize scroll', function () {
    if ($('.div-fellesfag').isInViewport() && $(window).innerWidth() < 850) {
      sr.reveal('.mobile-average', mobileAverage);
    }
  });

  $(window).on('resize scroll', function () {
    if ($('h1.title-jquery').offset().top <= $(window).scrollTop()) {
      $('h1.title-jquery').removeClass('title');
      $('h1.title-jquery').addClass('title-sticky');

      console.log('title');
    }
  });

  var topOfPage = {
    scrollTop: $("#div-descriptions").offset().top - 20
  };

  $('.arrow').on('click', function () {
    $('html, body').animate(topOfPage, 1000);
  });

  $('.til-toppen').on('click', function () {
    $('html, body').animate(topOfPage, 1000);
  });
};

var App = {};

App.fag = {};
App.poeng = {};
App.$Apoeng = 0;
App.$Tpoeng = 0;

// functions/event handlers
App.vitnemal = function () {
  var total = 0;
  var average = 0;
  var fgVitnemal = 0;
  var totalPoeng = 0;
  for (var enkeltFag in App.fag) {
    total += App.fag[enkeltFag];
    average = total / Object.keys(App.fag).length;
  }

  fgVitnemal += average * 10;

  for (var p in App.poeng) {
    fgVitnemal += App.poeng[p];
    totalPoeng += App.poeng[p];
  }

  if (App.$Tpoeng > 2) {
    App.$Tpoeng = 2;
  } else if (totalPoeng > 4) {
    totalPoeng = 4; // is this correct?
  } // else if (totalPoeng + App.$Apoeng + App.Tpoeng > 8) { finn ut begrensinngen

  var konkurransePoeng = fgVitnemal + App.$Apoeng + App.$Tpoeng;

  $('div.gj-snitt-val').replaceWith('<div class="divTableCell gj-snitt-val big-num">' + (average * 10).toFixed(1) + '</div>');
  $('div.SRPoeng-val').replaceWith('<div class="divTableCell SRPoeng-val" style="border:none;">' + totalPoeng + '</div>');
  $('div.fg-vitnemal-val').replaceWith('<div class="divTableCell fg-vitnemal-val big-num">' + fgVitnemal.toFixed(1) + '</div>');
  $('div.alderspoeng-val').replaceWith('<div class="divTableCell alderspoeng-val num">' + App.$Apoeng + '</div>');
  $('div.tilleggspoeng-val').replaceWith('<div class="divTableCell tilleggspoeng-val num">' + App.$Tpoeng + '</div>');
  $('div.konkurransePoeng-val').replaceWith('<div class="divTableCell konkurransePoeng-val big-num">' + konkurransePoeng.toFixed(1) + '</div>');

  // For smaller devices
  if ($(window).innerWidth() < 850) {
    $('.mobile-fg-vitnemal').replaceWith('<p class="mobile-fg-vitnemal">' + fgVitnemal.toFixed(1) + '</p>');
    $('.mobile-konkurransePoeng').replaceWith('<p class="mobile-konkurransePoeng">' + konkurransePoeng.toFixed(1) + '</p>');
  }
};

App.grade = function () {
  var $currentGrade = $(this);
  var $currentFag = $(this).parent().parent().parent()[0].children[0];
  var $fagPoeng = Number($currentFag.attributes.value.value);
  $currentGrade.toggleClass('grade-active');
  $currentGrade.siblings().removeClass('grade-active');

  if ($(this).parent()[0].attributes[0].value === 'eksamen') {
    App.fag[$currentFag.innerHTML + '-eksamen'] = $currentGrade.val();
  } else {
    App.fag[$currentFag.innerHTML] = $currentGrade.val();
    App.poeng[$currentFag.innerHTML] = $fagPoeng;
  }

  App.vitnemal();
};

App.selectors = function () {
  // Adds new fag from selector -fellesfag
  var $nyttFag = $(this);
  var $selectValue = $nyttFag[0].attributes[1].value; // sso/fellesfag/programfag
  var $nyttFagText = $('.fag-selection-' + $selectValue + '>option:selected').text();
  var $nyttFagType = $('.fag-selection-' + $selectValue + '>option:selected')[0].attributes[3].value;
  var $nyttFagId = $('.fag-selection-' + $selectValue + '>option:selected')[0].attributes[1].value;

  var htmlNyttFagRow = '<div class="divTableRow"> <div class="divTableCell active-fag" id="' + $nyttFagId + '" value="' + $nyttFag.val() + '" type="' + $nyttFagType + '">' + $nyttFagText + '</div><div class="divTableCell grade-col"> <ul class="grade"> <li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul> </div><div class="divTableCell eksamen-col"> <ul class="eksamen"> <li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul> </div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div>';

  $('.table-' + $nyttFagType).append(htmlNyttFagRow);

  $('#hidden-fag').hide();
  $('.fag-selection-' + $selectValue + '>option:selected').hide();
};

App.button = function () {
  var $currentFag = $(this).parents('.divTableCell').siblings();
  var $currentFagID = $currentFag[0].attributes[1].value;

  $(this).children().addClass('fa-spin');
  $currentFag.parent().fadeOut();

  if ($currentFag !== $('.fag-selection-' + $currentFagID).text()) {
    var $fagValue = $currentFag.siblings()[0].attributes[2].value; // fagvalue
    var $fagName = $currentFag.siblings()[0].innerHTML; // fagName
    var addNewFagHtml = '<option class="add-fag"' + 'id="' + $currentFagID + '" value="' + $fagValue + '" type="' + $currentFagID + '">' + $fagName + '</option>';

    $('.fag-selection-' + $currentFagID).append(addNewFagHtml);
  }
};

App.alderspoeng = function () {
  App.$Apoeng = Number($('.alderspoeng-sel>option:selected').val());

  App.vitnemal();

  return App.$Apoeng;
};

App.tilleggspoeng = function () {
  // adds points from tilleggspoeng checkbox
  App.$Tpoeng += Number($(this).val());

  if ($('.checkbox-tilleggspoeng input[type=checkbox]:checked').length > 1) {
    App.$Tpoeng = 2;
  } else if ($('.checkbox-tilleggspoeng input[type=checkbox]:checked').length === 1) {
    App.$Tpoeng = Number($('.checkbox-tilleggspoeng input[type=checkbox]:checked')[0].defaultValue); // get the value of the one currently ckecked
  } else {
    App.$Tpoeng = 0;
  }

  App.vitnemal();
};

App.$tables = $('.divTable');
App.$removeBtn = $('.remove-btn').children();
App.$select = $('.select');
App.$alderspoeng = $('.alderspoeng-sel');
App.$tilleggspoeng = $('.checkbox-tilleggspoeng').children();

var main = function main() {

  App.$tables.on('click', 'p.eksamen-question', function () {
    $(this).children().addClass('.eksamen-active');
    $(this).hide();
  });

  // grade-buttons
  App.$tables.on('click', 'li', App.grade);
  // Adds new fag from selector -fellesfag
  App.$select.on('change', App.selectors);
  // removes fag
  App.$tables.on('click', 'i', App.button);
  // Adds alderspoeng
  App.$alderspoeng.on('change', App.alderspoeng);
  // adds points from tilleggspoeng checkbox
  App.$tilleggspoeng.on('change', App.tilleggspoeng);
};

$(document).ready(second);
$(document).ready(main);