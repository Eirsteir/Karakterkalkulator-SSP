var second = function() {
  // revealing elements on scroll
  var header = {
    origin   : "top",
    distance : "24px",
    duration : 1500,
    scale    : 1.05,
  }
  var intro = {
    origin   : "bottom",
    distance : "64px",
    duration : 900,
    delay    : 1500,
    scale    : 1,
  }
  var select = {
    duration: 800,
    delay: 500
  };
  var mobileAverage = {
    origin : "bottom",
    distance : "900px",
    duration: 1000,
    delay : 300,
    scale: 1,
  }

  window.sr = ScrollReveal();
  sr.reveal('.header', header);
  sr.reveal('.title-jquery', header)
  sr.reveal('.intro', intro);
  sr.reveal('.div-programfag', select);
  sr.reveal('.more-fag', select);
  sr.reveal('.alderspoeng-div', select);
  sr.reveal('.checkbox-tilleggspoeng', select);


  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  // reveals mobile average box when
  $(window).on('resize scroll', function() {
    if ($('.div-fellesfag').isInViewport() && $(window).innerWidth() < 850){
      sr.reveal('.mobile-average', mobileAverage);
    }
  })

  var topOfPage = {
    scrollTop: $("#div-descriptions").offset().top - 20
  }

  $('.arrow').on('click', function() {
    $('html, body').animate(topOfPage, 1000);
  })

  $('.til-toppen').on('click', function() {
    $('html, body').animate(topOfPage, 1000);
  })
};

  var App = {}

  App.fag = { }
  App.poeng = { }
  App.$Apoeng = 0;
  App.$Tpoeng = 0;

  // functions/event handlers
  App.vitnemal = function() {
    let total = 0;
    let average = 0;
    let fgVitnemal = 0;
    let totalPoeng = 0;
    for (let enkeltFag in App.fag) {
      total += App.fag[enkeltFag];
      average = ((total / Object.keys(App.fag).length));
    }

    fgVitnemal += average*10;

    for (let p in App.poeng) {
      fgVitnemal += App.poeng[p];
      totalPoeng += App.poeng[p];
    }

    if (App.$Tpoeng > 2) {
      App.$Tpoeng = 2;
    } else if (totalPoeng > 4) {
      totalPoeng = 4; // is this correct?
    }// else if (totalPoeng + App.$Apoeng + App.Tpoeng > 8) { finn ut begrensinngen

    let konkurransePoeng = fgVitnemal + App.$Apoeng + App.$Tpoeng;

    $('.mobile-fg-vitnemal').replaceWith('<p class="mobile-fg-vitnemal">' + fgVitnemal.toFixed(1) + '</p>');
    $('.mobile-konkurransePoeng').replaceWith('<p class="mobile-konkurransePoeng">' + konkurransePoeng.toFixed(1) + '</p>');

  };

  App.grade = function() {
    let $currentGrade = $(this);
    let $currentFag = $currentGrade.parent().parent().parent()[0].children[0];
    let $fagPoeng = Number($currentFag.attributes.value.value);
    $currentGrade.toggleClass('grade-active');
    $currentGrade.siblings().removeClass('grade-active');

    if ($currentGrade.parent()[0].attributes[0].value === 'eksamen add-eksamen') {
      let $currentFag = $currentGrade.parentsUntil('.name').prev()[2].children["0"];
      App.fag[$currentFag.innerHTML + '-eksamen'] = $currentGrade.val();
    } else {
      App.fag[$currentFag.innerHTML] = $currentGrade.val();
      App.poeng[$currentFag.innerHTML] = $fagPoeng;
    }

    App.vitnemal()
  }

  App.selectors = function() {
    // Adds new fag from selector -fellesfag
    let $nyttFag = $(this);
    let $selectValue = $nyttFag[0].attributes[1].value // sso/fellesfag/programfag
    let $nyttFagText = $('.fag-selection-' + $selectValue + '>option:selected').text();
    let $nyttFagType = $('.fag-selection-' + $selectValue + '>option:selected')[0].attributes[3].value;
    let $nyttFagId = $('.fag-selection-' + $selectValue + '>option:selected')[0].attributes[1].value;

    let htmlNyttFagRow1 = '<div class="divTableRow"> <div class="divTableCell active-fag" id="' + $nyttFagId + '" value="' + $nyttFag.val() + '" type="' + $nyttFagType + '">' + $nyttFagText;
    let htmlNyttFagRow2 = '</div><div class="divTableCell grade-col"> <ul class="grade" > <li class="mobile-grade" value="1">1</li><li class="mobile-grade" value="2">2</li><li class="mobile-grade" value="3">3</li><li class="mobile-grade" value="4">4</li><li class="mobile-grade" value="5">5</li><li class="mobile-grade" value="6">6</li></ul> </div><div class="divTableCell remove-btn"> <i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"> <div class="divTableCell active-fag" id="fellesfag" value="0"></div><div class="divTableCell eksamen-col"> <p class="eksamen-question">Eksamen<i class="fas fa-angle-down" id="eksamen-arrow"></i></p><ul class="eksamen add-eksamen"> <li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul> </div><div class="divTableCell remove-btn" id="eksamen-btn"> <i class="fas fa-times fa-2x x-btn"></i> </div><div class="divTableCell"></div></div>';
    let htmlNyttFagRow = htmlNyttFagRow1 + htmlNyttFagRow2;
    $('.table-' + $nyttFagType).append(htmlNyttFagRow);

    $('.placeholder-row').hide();
    $('.fag-selection-' + $selectValue + '>option:selected').hide();
  };

  App.button = function() {
    $('.eksamen-arrow').off('click');
    let $buttonValue = $(this).parent().siblings()[1].children["0"].attributes["0"].value;
    $(this).children().addClass('fa-spin');
    if ($buttonValue === 'eksamen-question') {
      let $currentFag = $(this).parent().parent(); //entire row
      $currentFag.fadeOut();
      $('.eksamen-question').fadeIn()
    } else {
      let $currentFag = $(this).parent().parent();
      let $nextRow = $(this).parents('.divTableRow').next();
      $currentFag.fadeOut();
      $nextRow.fadeOut()
      let $currentFagID = $currentFag[0].children[0].id;
      if ($currentFag !== $('.fag-selection-' + $currentFagID).text()) {
        let $fagValue = $currentFag[0].children[0].attributes[2].value; // fagvalue aka points
        let $fagName = $currentFag["0"].children["0"].innerHTML; // fagName
        let addNewFagHtml = '<option class="add-fag"' +  'id="' + $currentFagID + '" value="' + $fagValue + '" type="' + $currentFagID + '">' + $fagName + '</option>';

        $('.fag-selection-' + $currentFagID).append(addNewFagHtml);
      }
    }

  };

  App.alderspoeng = function() {
    App.$Apoeng = Number(($('.alderspoeng-sel>option:selected').val()));

    App.vitnemal();

    return App.$Apoeng;
  };

  App.tilleggspoeng = function() {
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

  App.eksamenQuestion = function() {
    let $lst = $(this).siblings();
    $lst.fadeIn()
    $lst.parent().next().fadeIn()
    $(this).hide();
  }

    App.logg_inn_dp = function() {
    var clicks = $(this).data('clicks');
    if (clicks) {
      App.$logg_inn_dropdown.slideUp();
    } else {
      App.$logg_inn_dropdown.slideDown();
      App.$om_dropdown.hide()
    };
    $(this).data('clicks', !clicks);
  };
  App.om_dp = function() {
    var clicks = $(this).data('clicks');
    if (clicks) {
      App.$om_dropdown.slideUp()
    } else {
      App.$om_dropdown.slideDown()
      App.$logg_inn_dropdown.hide()
    };
    $(this).data('clicks', !clicks);
  };
  App.click_outside_dropdown_logg_inn = function(evt){
    if (!($(evt.target).closest('#logg_inn').length)) {
      App.$logg_inn_dropdown.slideUp()
    }
  };
  
  App.click_outside_dropdown_om = function(evt) {
    if (!($(evt.target).closest('#om').length)) {
      App.$om_dropdown.slideUp()
    }
  };
  
  App.$logg_inn = $('#logg_inn')
  App.$logg_inn_dropdown = $('#logg_inn_dropdown')
  App.$om = $('#om')
  App.$om_dropdown = $('#om_dropdown')
  App.$tables = $('.divTable');
  App.$removeBtn = $('.remove-btn').children();
  App.$select = $('.select');
  App.$alderspoeng = $('.alderspoeng-sel');
  App.$tilleggspoeng = $('.checkbox-tilleggspoeng').children();


var main = function() {

  App.$logg_inn.click(App.logg_inn_dp);
  App.$om.click(App.om_dp)
  $('body').click(App.click_outside_dropdown_logg_inn);
  $('body').click(App.click_outside_dropdown_om)
  // grade-buttons
  App.$tables.on('click', 'li', App.grade)
  // Adds new fag from selector -fellesfag
  App.$select.on('change', App.selectors)
  // removes fag
  App.$tables.on('click', 'i', App.button)
  // Adds eksamenbuttons
  App.$tables.on('click', '.eksamen-question', App.eksamenQuestion)
  // Adds alderspoeng
  App.$alderspoeng.on('change', App.alderspoeng)
  // adds points from tilleggspoeng checkbox
  App.$tilleggspoeng.on('change', App.tilleggspoeng)

}

$(document).ready(second);
$(document).ready(main);
