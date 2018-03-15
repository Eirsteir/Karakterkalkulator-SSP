var App = {}

App.fag = {}

App.poeng = {}
App.alderspoeng = 0;
App.tilleggspoeng = 0;

App.grade = function() {
  this.toggleClass('grade-active');
  this.siblings().removeClass('grade-active');
  let gradeString = this.val();
  let parent = this.parentsUntil('tr').prev();

  let currentFag = parent[0].innerHTML;
  let fagPoeng = Number(parent[0].attributes.value.value);

  fag[currentFag] = gradeString;
  poeng[currentFag] = fagPoeng;

  App.vitnemal(fag)
}

App.vitnemal = function(fag) {
  let total = 0;
  let average = 0;
  for (let enkeltFag in fag) {
    total += fag[enkeltFag];
    average = ((total / Object.keys(fag).length));
  }

  let fgVitnemal = average*10;
  let totalPoeng = 0;

  for (let p in poeng) {
    fgVitnemal += poeng[p];
    totalPoeng += poeng[p];
  }

  if (tilleggspoeng > 2) {
    tilleggspoeng = 2;
  }

  let konkurransePoeng = fgVitnemal + alderspoeng + tilleggspoeng;

  $('div.gj-snitt-val').replaceWith('<div class="divTableCell gj-snitt-val big-num">' + (average*10).toFixed(1) + '</div>');
  $('div.SRPoeng-val').replaceWith('<div class="divTableCell SRPoeng-val" style="border:none;">' + totalPoeng + '</div>');
  $('div.fg-vitnemal-val').replaceWith('<div class="divTableCell fg-vitnemal-val big-num">' + fgVitnemal.toFixed(1) + '</div>');
  $('div.alderspoeng-val').replaceWith('<div class="divTableCell alderspoeng-val num">' + alderspoeng + '</div>');
  $('div.tilleggspoeng-val').replaceWith('<div class="divTableCell tilleggspoeng-val num">' + tilleggspoeng + '</div>');
  $('div.konkurransePoeng-val').replaceWith('<div class="divTableCell konkurransePoeng-val big-num">' + konkurransePoeng.toFixed(1) + '</div>');

  // For smaller devices
  if ($(window).innerWidth() < 850) {
    $('.mobile-fg-vitnemal').replaceWith('<p class="mobile-fg-vitnemal">' + fgVitnemal.toFixed(1) + '</p>');
    $('.mobile-konkurransePoeng').replaceWith('<p class="mobile-konkurransePoeng">' + konkurransePoeng.toFixed(1) + '</p>');
    }
};


App.eksamensGrade = function() {

  let eksamenString = this.val();
  let parent = this.parentsUntil('tr').prev().prev();
  let currentEksamensFag = parent[0].innerHTML;
  this.toggleClass('grade-active');
  this.siblings().removeClass('grade-active');

  fag[currentEksamensFag + '-eksamen'] = eksamenString;

  App.vitnemal(fag);
};

App.selectors = function() {
  // Adds new fag from selector -fellesfag
  let $nyttFag = this;
  let $selectValue = $nyttFag[0].attributes[1].value // sso/fellesfag/programfag
  let $nyttFagText = $('.fag-selection-' + $selectValue + '>option:selected').text();
  let $nyttFagType = $('.fag-selection-' + $selectValue + '>option:selected')[0].attributes[3].value;
  let $nyttFagId = $('.fag-selection-' + $selectValue + '>option:selected')[0].attributes[1].value;

  let htmlNyttFagRow = '<div class="divTableRow"> <div class="divTableCell active-fag" id="' + $nyttFagId + '" value="' + $nyttFag.val() + '" type="' + $nyttFagType + '">' + $nyttFagText + '</div><div class="divTableCell grade-col"> <ul class="grade"> <li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul> </div><div class="divTableCell eksamen-col"> <ul class="eksamen"> <li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul> </div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div>';

  $('.table-' + $selectValue).append(htmlNyttFagRow);
};

App.button = function() {
  // clicks both at the same time
  let $currentFag = this.parents('.divTableCell').siblings();
  let $currentFagID = $currentFag[0].attributes[1].value;

  this.addClass('fa-spin');
  $currentFag.parent().fadeOut(); //remove from DOM?

  if ($currentFag !== $('.fag-selection-' + $currentFagID).text()) {
    let $fagValue = $currentFag.siblings()[0].attributes[2].value; // fagvalue
    let $fagName = $currentFag.siblings()[0].innerHTML; // fagName
    let addNewFagHtml = '<option class="add-fag"' +  'id="' + $currentFagID + '" value="' + $fagValue + '" type="' + $currentFagID + '">' + $fagName + '</option>';

    $('.fag-selection-' + $currentFagID).append(addNewFagHtml);
  }
};

App.alderspoeng = function() {
  alderspoeng = Number(($('.alderspoeng-sel>option:selected').val()));
  App.vitnemal(fag);
};

App.tilleggsPoeng = function() {
  // adds points from tilleggspoeng checkbox
  tilleggspoeng += Number(this.val());

  if ($('.checkbox-tilleggspoeng input[type=checkbox]:checked').length > 1) {
    tilleggspoeng = 2;
  } else if ($('.checkbox-tilleggspoeng input[type=checkbox]:checked').length === 1) {
    tilleggspoeng = Number($('.checkbox-tilleggspoeng input[type=checkbox]:checked')[0].defaultValue); // get the value of the one currently ckecked
  } else {
    tilleggspoeng = 0;
  }

  App.vitnemal(fag);
};
