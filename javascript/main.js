
 
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
      totalPoeng = 4;
    }// else if (totalPoeng + App.$Apoeng + App.Tpoeng > 8) { finn ut begrensinngen

    let konkurransePoeng = fgVitnemal + App.$Apoeng + App.$Tpoeng;

    $('div.gj-snitt-val').replaceWith('<div class="divTableCell gj-snitt-val big-num">' + (average*10).toFixed(1) + '</div>');
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

  App.grade = function() {
    let $currentGrade = $(this)
    let $currentFag = ($(this)).parent().parent().parent()[0].children[0];
    let $fagPoeng = Number($currentFag.attributes.value.value);
    $currentGrade.toggleClass('grade-active');
    $currentGrade.siblings().removeClass('grade-active');

    if ($(this).parent()[0].attributes[0].value === 'eksamen') {
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

    let htmlNyttFagRow = '<div class="divTableRow"> <div class="divTableCell active-fag" id="' + $nyttFagId + '" value="' + $nyttFag.val() + '" type="' + $nyttFagType + '">' + $nyttFagText + '</div><div class="divTableCell grade-col"> <ul class="grade"> <li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul> </div><div class="divTableCell eksamen-col"> <ul class="eksamen"> <li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul> </div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div>';

    $('.table-' + $nyttFagType).append(htmlNyttFagRow);

    $('#hidden-fag').hide();
    $('.fag-selection-' + $selectValue + '>option:selected').hide();
  };

  App.button = function() {
    let $currentFag = $(this).parents('.divTableCell').siblings();
    let $currentFagID = $currentFag[0].attributes[1].value;

    $(this).children().addClass('fa-spin');
    $currentFag.parent().fadeOut();

    if ($currentFag !== $('.fag-selection-' + $currentFagID).text()) {
      let $fagValue = $currentFag.siblings()[0].attributes[2].value; // fagvalue
      let $fagName = $currentFag.siblings()[0].innerHTML; // fagName
      let addNewFagHtml = '<option class="add-fag"' +  'id="' + $currentFagID + '" value="' + $fagValue + '" type="' + $currentFagID + '">' + $fagName + '</option>';

      $('.fag-selection-' + $currentFagID).append(addNewFagHtml);
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


var main = function() {
  // jQuery
  App.$tables = $('.divTable');
  App.$removeBtn = $('.remove-btn').children();
  App.$select = $('.select');
  App.$alderspoeng = $('.alderspoeng-sel');
  App.$tilleggspoeng = $('.checkbox-tilleggspoeng').children();


  // grade-buttons
  App.$tables.on('click', 'li', App.grade)
  // Adds new fag from selector -fellesfag
  App.$select.on('change', App.selectors)
  // removes fag
  App.$tables.on('click', 'i', App.button)
  // Adds alderspoeng
  App.$alderspoeng.on('change', App.alderspoeng)
  // adds points from tilleggspoeng checkbox
  App.$tilleggspoeng.on('change', App.tilleggspoeng)

}

$(document).ready(main);
