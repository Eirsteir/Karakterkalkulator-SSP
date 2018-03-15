require(['jquery'], function($) {
  var App = {}

  App.fag = { }
  App.poeng = { }
  App.alderspoeng = 0;
  App.tilleggspoeng = 0;

  // functions/event handlers
  App.vitnemal = function() {
    let total = 0;
    let average = 0;
    for (let enkeltFag in App.fag) {
      total += App.fag[enkeltFag];
      average = ((total / Object.keys(App.fag).length));
    }

    let fgVitnemal = average*10;
    let totalPoeng = 0;

    for (let p in App.poeng) {
      fgVitnemal += App.poeng[p];
      totalPoeng += App.poeng[p];
    }

    if (App.tilleggspoeng > 2) {
      App.tilleggspoeng = 2;
    }

    let konkurransePoeng = fgVitnemal + App.alderspoeng + App.tilleggspoeng;

    $('div.gj-snitt-val').replaceWith('<div class="divTableCell gj-snitt-val big-num">' + (average*10).toFixed(1) + '</div>');
    $('div.SRPoeng-val').replaceWith('<div class="divTableCell SRPoeng-val" style="border:none;">' + totalPoeng + '</div>');
    $('div.fg-vitnemal-val').replaceWith('<div class="divTableCell fg-vitnemal-val big-num">' + fgVitnemal.toFixed(1) + '</div>');
    $('div.alderspoeng-val').replaceWith('<div class="divTableCell alderspoeng-val num">' + App.alderspoeng + '</div>');
    $('div.tilleggspoeng-val').replaceWith('<div class="divTableCell tilleggspoeng-val num">' + App.tilleggspoeng + '</div>');
    $('div.konkurransePoeng-val').replaceWith('<div class="divTableCell konkurransePoeng-val big-num">' + (konkurransePoeng) + '</div>');

    // For smaller devices
    if ($(window).innerWidth() < 850) {
      $('.mobile-fg-vitnemal').replaceWith('<p class="mobile-fg-vitnemal">' + fgVitnemal.toFixed(1) + '</p>');
      $('.mobile-konkurransePoeng').replaceWith('<p class="mobile-konkurransePoeng">' + konkurransePoeng + '</p>');
      }
  };

  App.grade = function() {
    $(this).toggleClass('grade-active');
    $(this).siblings().removeClass('grade-active');
    let gradeString = $(this).val();
    let parent = $(this).parentsUntil('tr').prev();

    let currentFag = parent[0].innerHTML;
    let fagPoeng = Number(parent[0].attributes.value.value);

    App.fag[currentFag] = gradeString;
    App.poeng[currentFag] = fagPoeng;

    App.vitnemal()
  }

  App.eksamensGrade = function() {

    let eksamenString = $(this).val();
    let parent = $(this).parentsUntil('tr').prev().prev();
    let currentEksamensFag = parent[0].innerHTML;
    $(this).toggleClass('grade-active');
    $(this).siblings().removeClass('grade-active');

    App.fag[currentEksamensFag + '-eksamen'] = eksamenString;

    App.vitnemal();
  };

  App.selectors = function() {
    // Adds new fag from selector -fellesfag
    let $nyttFag = $(this);
    let $selectValue = $nyttFag[0].attributes[1].value // sso/fellesfag/programfag
    let $nyttFagText = $('.fag-selection-' + $selectValue + '>option:selected').text();
    let $nyttFagType = $('.fag-selection-' + $selectValue + '>option:selected')[0].attributes[3].value;
    let $nyttFagId = $('.fag-selection-' + $selectValue + '>option:selected')[0].attributes[1].value;

    let htmlNyttFagRow = '<div class="divTableRow"> <div class="divTableCell active-fag" id="' + $nyttFagId + '" value="' + $nyttFag.val() + '" type="' + $nyttFagType + '">' + $nyttFagText + '</div><div class="divTableCell grade-col"> <ul class="grade"> <li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul> </div><div class="divTableCell eksamen-col"> <ul class="eksamen"> <li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul> </div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div>';

    $('.table-' + $selectValue).append(htmlNyttFagRow);

    $('.fag-selection-' + $selectvalue + '>option:selected').hide();
  };

  App.button = function() {
    // clicks both at the same time
    let $currentFag = $(this).parents('.divTableCell').siblings();
    let $currentFagID = $currentFag[0].attributes[1].value;

    $(this).addClass('fa-spin');
    $currentFag.parent().fadeOut(); //remove from DOM?

    if ($currentFag !== $('.fag-selection-' + $currentFagID).text()) {
      let $fagValue = $currentFag.siblings()[0].attributes[2].value; // fagvalue
      let $fagName = $currentFag.siblings()[0].innerHTML; // fagName
      let addNewFagHtml = '<option class="add-fag"' +  'id="' + $currentFagID + '" value="' + $fagValue + '" type="' + $currentFagID + '">' + $fagName + '</option>';

      $('.fag-selection-' + $currentFagID).append(addNewFagHtml);
    }
  };

  App.alderspoeng = function() {
    let $poeng = Number(($('.alderspoeng-sel>option:selected').val()))
    App.alderspoeng = $poeng;
    App.vitnemal();
  };

  App.tilleggspoeng = function() {
  // adds points from tilleggspoeng checkbox
  App.tilleggspoeng += Number($(this).val());

  if ($('.checkbox-tilleggspoeng input[type=checkbox]:checked').length > 1) {
    App.tilleggspoeng = 2;
  } else if ($('.checkbox-tilleggspoeng input[type=checkbox]:checked').length === 1) {
    App.tilleggspoeng = Number($('.checkbox-tilleggspoeng input[type=checkbox]:checked')[0].defaultValue); // get the value of the one currently ckecked
  } else {
    App.tilleggspoeng = 0;
  }

  App.vitnemal();
};

  // jQuery
  App.$grade = $('.grade').children();
  App.$eksamen = $('.eksamen').children();
  App.$removeBtn = $('.remove-btn').children();
  App.$select = $('select');
  App.$alderspoeng = $('.alderspoeng-sel');
  App.$tilleggspoeng = $('.checkbox-tilleggspoeng').children();

  App.$grade.on('click', App.grade)

  App.$eksamen.on('click', App.eksamensGrade)

  // can you make a single event handler that handles all of the clases/fag? DAmn right I can
  // Adds new fag from selector -fellesfag
  App.$select.on('change', App.selectors)



  // clicks both at the same time
  App.$removeBtn.on('click', /* '[data-fa-i2svg]'*/ App.button);

  // Adds alderspoeng
  App.$alderspoeng.on('change', App.alderspoeng)

  // adds points from tilleggspoeng checkbox
  App.$tilleggspoeng.on('change', App.tilleggspoeng)

})
