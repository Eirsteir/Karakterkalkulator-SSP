var main = function() {

  const $grade = $('.grade').children();
  const $eksamen = $('.eksamen').children();
  const $fag = $('.active-fag');
  const $removeBtn = $('.remove-btn');
  let fag = { };
  let poeng = { };
  let alderspoeng = 0;
  let tilleggspoeng = 0;

  function vitnemal(fag) {
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
    };

    if (tilleggspoeng > 2) {
      tilleggspoeng = 2;
    };

    let konkurransePoeng = fgVitnemal + + alderspoeng + tilleggspoeng;

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
    };
  }

  $grade.on('click', event => {
    $(event.currentTarget).toggleClass('grade-active');
    $(event.currentTarget).siblings().removeClass('grade-active');

    let gradeString = $(event.currentTarget).val();
    let parent = $(event.currentTarget).parentsUntil('tr').prev();

    let currentFag = parent[0].innerHTML;
    let fagPoeng = Number(parent[0].attributes.value.value);

    fag[currentFag] = gradeString;
    poeng[currentFag] = fagPoeng;

    vitnemal(fag);
  })

  $eksamen.on('click', event => {
    $(event.currentTarget).toggleClass('grade-active');
    $(event.currentTarget).siblings().removeClass('grade-active');

    let eksamenString = $(event.currentTarget).val();
    let parent = $(event.currentTarget).parentsUntil('tr').prev().prev();

    let currentEksamensFag = parent[0].innerHTML;
    let fagPoeng = parent[0].attributes.value.value

    fag[currentEksamensFag + '-eksamen'] = eksamenString;

    vitnemal(fag);
  })

  // can you make a single event handler that handles all of the clases/fag?
  // Adds new fag from selector -fellesfag
  $('.fag-selection-fellesfag').on('change', event => {

    let $nyttFag = $(event.currentTarget);
    let $nyttFagText = $('.fag-selection-fellesfag>option:selected').text();
    let $nyttFagType = $('.fag-selection-fellesfag>option:selected')[0].attributes[3].value;
    let $nyttFagId = $('.fag-selection-fellesfag>option:selected')[0].attributes[1].value;

    let htmlNyttFagRow = '<div class="divTableRow"> <div class="divTableCell active-fag" id="' + $nyttFagId + '" value="' + $nyttFag.val() + '" type="' + $nyttFagType + '">' + $nyttFagText + '</div><div class="divTableCell grade-col"> <ul class="grade"> <li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul> </div><div class="divTableCell eksamen-col"> <ul class="eksamen"> <li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul> </div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div>';

    $('.table-fellesfag').append(htmlNyttFagRow);

    // Adds to object fag and poeng
    $grade.on('click', event => {
      $(event.currentTarget).toggleClass('grade-active');
      $(event.currentTarget).siblings().removeClass('grade-active');

      let gradeString = $(event.currentTarget).val();
      let parent = $(event.currentTarget).parentsUntil('tr').prev();

      let currentFag = parent[0].innerHTML;
      let fagPoeng = Number(parent[0].attributes.value.value);

      fag[currentFag] = gradeString;
      poeng[currentFag] = fagPoeng;

      vitnemal(fag);
    })

    // Adds to object fag and poeng
    $('.eksamen').children().on('click', event => {
      $(event.currentTarget).toggleClass('grade-active');
      $(event.currentTarget).siblings().removeClass('grade-active');

      let eksamenString = $(event.currentTarget).val();
      let parent = $(event.currentTarget).parentsUntil('tr').prev().prev();

      let currentEksamensFag = parent[0].innerHTML;
      let fagPoeng = parent[0].attributes.value.value

      fag[currentEksamensFag + '-eksamen'] = eksamenString;

      vitnemal(fag);
    })

    $('.fag-selection-fellesfag>option:selected').hide();

  });


  // Adds new fag from selector -realfag
  $('.fag-selection-realfag').on('change', event => {

    let $nyttFag = $(event.currentTarget);
    let $nyttFagText = $('.fag-selection-realfag>option:selected').text();
    let $nyttFagType = $('.fag-selection-realfag>option:selected')[0].attributes[3].value;
    let $nyttFagId = $('.fag-selection-realfag>option:selected')[0].attributes[1].value;
    let htmlNyttFagRow = '<div class="divTableRow"> <div class="divTableCell active-fag" id="' + $nyttFagId + '" value="' + $nyttFag.val() + '" type="' + $nyttFagType + '">' + $nyttFagText + '</div><div class="divTableCell grade-col"> <ul class="grade"> <li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul> </div><div class="divTableCell eksamen-col"> <ul class="eksamen"> <li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul> </div><div class="divTableCell remove-btn"> <i class="fas fa-times fa-2x x-btn"></i> </div></div>';

    $('.table-programfag').append(htmlNyttFagRow);
    $('#hidden-fag').remove();


    // Adds to object fag and poeng
    $grade.on('click', event => {
      $(event.currentTarget).toggleClass('grade-active');
      $(event.currentTarget).siblings().removeClass('grade-active');

      let gradeString = $(event.currentTarget).val();
      let parent = $(event.currentTarget).parentsUntil('tr').prev();

      let currentFag = parent[0].innerHTML;
      let fagPoeng = Number(parent[0].attributes.value.value);

      fag[currentFag] = gradeString;
      poeng[currentFag] = fagPoeng;

      vitnemal(fag);
    })

    // Adds to object fag and poeng
    $eksamen.on('click', event => {
      $(event.currentTarget).toggleClass('grade-active');
      $(event.currentTarget).siblings().removeClass('grade-active');

      let eksamenString = $(event.currentTarget).val();
      let parent = $(event.currentTarget).parentsUntil('tr').prev().prev();

      let currentEksamensFag = parent[0].innerHTML;
      let fagPoeng = parent[0].attributes.value.value

      fag[currentEksamensFag + '-eksamen'] = eksamenString;

      vitnemal(fag);
    })

    //remove from selector
    $('.fag-selection-realfag>option:selected').hide();

  })


  // Adds new fag from selector -sso
  $('.fag-selection-sso').on('change', event => {

    let $nyttFag = $(event.currentTarget);
    let $nyttFagText = $('.fag-selection-sso>option:selected').text();
    let $nyttFagType = $('.fag-selection-sso>option:selected')[0].attributes[3].value;
    let $nyttFagId = $('.fag-selection-sso>option:selected')[0].attributes[1].value;
    let htmlNyttFagRow = '<div class="divTableRow"> <div class="divTableCell active-fag" id="' + $nyttFagId + '" value="' + $nyttFag.val() + '" type="' + $nyttFagType + '">' + $nyttFagText + '</div><div class="divTableCell grade-col"> <ul class="grade"> <li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul> </div><div class="divTableCell eksamen-col"> <ul class="eksamen"> <li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul> </div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div>';

    $('.table-programfag').append(htmlNyttFagRow);

    $('#hidden-fag').remove();

      // Adds to object fag and poeng
    $grade.on('click', event => {
      $(event.currentTarget).toggleClass('grade-active');
      $(event.currentTarget).siblings().removeClass('grade-active');

      let gradeString = $(event.currentTarget).val();
      let parent = $(event.currentTarget).parentsUntil('tr').prev();

      let currentFag = parent[0].innerHTML;
      let fagPoeng = Number(parent[0].attributes.value.value);

      fag[currentFag] = gradeString;
      poeng[currentFag] = fagPoeng;

      vitnemal(fag);
    })

    // Adds to object fag and poeng
    $eksamen.on('click', event => {
      $(event.currentTarget).toggleClass('grade-active');
      $(event.currentTarget).siblings().removeClass('grade-active');

      let eksamenString = $(event.currentTarget).val();
      let parent = $(event.currentTarget).parentsUntil('tr').prev().prev();

      let currentEksamensFag = parent[0].innerHTML;
      let fagPoeng = parent[0].attributes.value.value

      fag[currentEksamensFag + '-eksamen'] = eksamenString;

      vitnemal(fag);
    })

    $('.fag-selection-sso>option:selected').hide();

    // add back if removed from table

  })

  // clicks both at the same time
  $(document.body).on('click', '[data-fa-i2svg]', event => {
    let $currentFag = $(event.currentTarget).parents('.divTableCell').siblings();
    let $currentFagID = $currentFag[0].attributes[1].value;

    $(event.currentTarget).addClass('fa-spin');
    $currentFag.parent().fadeOut(); //remove from DOM?

    if ($currentFag !== $('.fag-selection-' + $currentFagID).text()) {
      let $fagValue = $currentFag.siblings()[0].attributes[2].value; // fagvalue
      let $fagName = $currentFag.siblings()[0].innerHTML; // fagName

      let addNewFagHtml = '<option class=' + '"' + 'add-fag' + '"' + ' id=' + '"' + $currentFagID + '"' + ' value=' + '"' + $fagValue + '"' + 'type=' + '"' + $currentFagID + '"' + '>' + $fagName + '</option>';

      $('.fag-selection-' + $currentFagID).append(addNewFagHtml);
    }
  });


  // Adds alderspoeng
  $('.alderspoeng-sel').on('change', event => {
    // console.log($('.alderspoeng-sel>option:selected').text()) //make this the value of alderspoeng?
    alderspoeng = Number(($('.alderspoeng-sel>option:selected').val()));

    vitnemal(fag);
  })

  // adds points from tilleggspoeng checkbox
  $('.checkbox-tilleggspoeng').children().on('change', event => {
    tilleggspoeng += Number($(event.currentTarget).val());

    if ($('.checkbox-tilleggspoeng input[type=checkbox]:checked').length > 1) {
      tilleggspoeng = 2;
    } else if ($('.checkbox-tilleggspoeng input[type=checkbox]:checked').length === 1) {
      tilleggspoeng = Number($('.checkbox-tilleggspoeng input[type=checkbox]:checked')[0].defaultValue); // gett the value of the one currently ckecked
    } else {
      tilleggspoeng = 0;
    };

    vitnemal(fag);
  })
};

$(document).ready(main);
