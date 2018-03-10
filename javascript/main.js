$(document).ready(() => {

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
    }

    if (tilleggspoeng > 2) {
      tilleggspoeng = 2;
    }
    let konkurransePoeng = fgVitnemal + + alderspoeng + tilleggspoeng;

    let htmlGjSnitt =  ('<td class=' + '"' + 'gj-snitt-val num big-num ' + '"' + '>' + (average*10).toFixed(1) + '</td>');
    let htmlSRPoeng = ('<td class=' + '"' + 'SRPoeng-val num' + '"' + '>' + totalPoeng + '</td>');
    let htmlFGVitnemal = ('<td class=' + '"' + 'fg-vitnemal-val num big-num ' + '"' + '>' + fgVitnemal.toFixed(1) + '</td>');
    let htmlAlderspoeng = ('<td class=' + '"' + 'alderspoeng-val num' + '"' + '>' + alderspoeng + '</td>');
    let htmlTilleggsPoeng = ('<td class=' + '"' + 'tilleggspoeng-val num' + '"' + '>' + tilleggspoeng + '</td>');
    let htmlKonkurransePoeng = ('<td class=' + '"' + 'konkurransePoeng-val num big-num ' + '"' + '>' + konkurransePoeng.toFixed(1) + '</td>');

    $('.gj-snitt').append(htmlGjSnitt);
    $('.SRPoeng').append(htmlSRPoeng);
    $('.fg-vitnemal').append(htmlFGVitnemal);
    $('.alderspoeng').append(htmlAlderspoeng);
    $('.tilleggspoeng').append(htmlTilleggsPoeng);
    $('.konkurransePoeng').append(htmlKonkurransePoeng);

    // checks if the average-view is empty
    if(!$.trim($(".average-view").html())=='') {
      $('.gj-snitt-val').remove();
      $('.SRPoeng-val').remove();
      $('.fg-vitnemal-val').remove();
      $('.alderspoeng-val').remove();
      $('.tilleggspoeng-val').remove();
      $('.konkurransePoeng-val').remove();

      $('.gj-snitt').append(htmlGjSnitt);
      $('.SRPoeng').append(htmlSRPoeng);
      $('.fg-vitnemal').append(htmlFGVitnemal);
      $('.alderspoeng').append(htmlAlderspoeng);
      $('.tilleggspoeng').append(htmlTilleggsPoeng);
      $('.konkurransePoeng').append(htmlKonkurransePoeng);
    }
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

    console.log(fag);
    console.log(poeng);


    // if the new key:value is equal to old key:value, then remove
    // if a keys value has changed to the previous value, then remove
    // $grade.on('click', () => {
    //   // console.log(fag[currentFag])
    //   for (key in fag)
    //   { if (fag.hasOwnProperty(key) && fag[key] === gradeString) {
    //     console.log('FUCK ' + currentFag);
    //     let value = fag.key;
    //     if (value === gradeString) {
    //     delete fag[key]; // removes the fag previously clicked
    //     console.log(Object.values(fag));}
    //
    //   }



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
    console.log(fag);

    vitnemal(fag);
  })




  // Adds new fag from selector -fellesfag
  $('.fag-selection-fellesfag').on('change', event => {

    let $nyttFag = $(event.currentTarget);
    let $nyttFagText = $('.fag-selection-fellesfag>option:selected').text();
    let $nyttFagType = $('.fag-selection-fellesfag>option:selected')[0].attributes[3].value;
    let $nyttFagId = $('.fag-selection-fellesfag>option:selected')[0].attributes[1].value;

    console.log($('.fag-selection-fellesfag>option:selected'));
    console.log($nyttFag.val());
    console.log($nyttFagText);
    console.log($nyttFagType);
    console.log($nyttFagId);

    // make the value equal to poeng of the fag:) need to find out which option user clicked
    let htmlNyttFag = '<tr class=' + 'row' + '><td class='+ '"'+ 'active-fag' + '"' + 'id=' + '"' + $nyttFagId + '"' +' value=' + '"' + $nyttFag.val() + '" ' + 'type=' + '"' + $nyttFagType + '"' + '>' + $nyttFagText + '</td><td class=' + '"' + 'grade-col';
    let htmlNyttFag2 =  '"' + '><ul class=' + '"' + 'grade' + '"' + '><li value=' + '"' + '1' + '"' + '>1</li><li value=' + '2' + '>2</li><li value=' + '3';
    let htmlNyttFag3 = '>3</li><li value=' + '4' + '>4</li><li value=' + '5' + '>5</li><li value=' + '6' + '>6</li></ul></td><td class=' + '"' + 'eksamen-col' + '"' + '><ul class=' + '"' + 'eksamen' + '"' + '><li value=' + '1';
    let htmlNyttFag4 = '>1</li><li value=' + '2' + '>2</li><li value=' + '3' + '>3</li><li value=' + '4' + '>4</li><li value=' + '5' + '>5</li><li value=' + '6' +'>6</li></ul></td>';
    let htmlNyttFag5 = '<td class=' + '"' + 'remove-btn' + '"' + '><i class=' + '"' + 'fas fa-times fa-2x x-btn' + '"' + '></i></td></tr>';

    let htmlNyttFagRow = htmlNyttFag + htmlNyttFag2 + htmlNyttFag3 + htmlNyttFag4 + htmlNyttFag5;

    $('.table-fellesfag').append(htmlNyttFagRow);


    // Adds to object fag and poeng
    $('.grade').children().on('click', event => {
      $(event.currentTarget).toggleClass('grade-active');
      $(event.currentTarget).siblings().removeClass('grade-active');

      let gradeString = $(event.currentTarget).val();
      let parent = $(event.currentTarget).parentsUntil('tr').prev();

      let currentFag = parent[0].innerHTML;
      let fagPoeng = Number(parent[0].attributes.value.value);

      fag[currentFag] = gradeString;
      poeng[currentFag] = fagPoeng;

      console.log(fag);
      console.log(poeng)

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
      console.log(fag);
      console.log(poeng);

      vitnemal(fag);
    })

    $('.fag-selection-fellesfag>option:selected').hide();
    // add back if removed from table

    $('.remove-btn').on('click', event => {
      let $currentFag = $(event.currentTarget);
      $currentFag.children().addClass('fa-spin');
      $currentFag.parent().fadeOut();

      if ($currentFag !== $('.fag-selection-fellesfag').text() && $currentFag.siblings()[0].attributes[1].value === 'fellesfag-fag') {
        let $fagValue = $currentFag.siblings()[0].attributes[2].value; // fagvalue
        let $fagName = $currentFag.siblings()[0].innerHTML; // fagName
        let $fagType = $currentFag.siblings()[0].attributes[3].value; // fagtype
        let $fagId = $currentFag.siblings()[0].attributes[1].value;
        console.log($currentFag.siblings());
        let addNewFagHtml = '<option class=' + '"' + 'add-fag' + '"' + ' id=' + '"' + $fagId + '"' + ' value=' + '"' + $fagValue + '"' + 'type=' + '"' + $fagType + '"' + '>' + $fagName + '</option>';
        $('.fag-selection-fellesfag').append(addNewFagHtml);
        console.log(addNewFagHtml);
      }
    })
  })





  // Adds new fag from selector -realfag
  $('.fag-selection-realfag').on('change', event => {

    let $nyttFag = $(event.currentTarget);
    let $nyttFagText = $('.fag-selection-realfag>option:selected').text();
    let $nyttFagType = $('.fag-selection-realfag>option:selected')[0].attributes[3].value;
    let $nyttFagId = $('.fag-selection-realfag>option:selected')[0].attributes[1].value;

    console.log($('.fag-selection-realfag>option:selected'));
    console.log($nyttFag.val());
    console.log($nyttFagText);
    console.log($nyttFagType);
    console.log($nyttFagId);

    // make the value equal to poeng of the fag:) need to find out which option user clicked
    let htmlNyttFag = '<tr class=' + 'row' + '><td class='+ '"'+ 'active-fag' + '"' + 'id=' + '"' + $nyttFagId + '"' +' value=' + '"' + $nyttFag.val() + '" ' + 'type=' + '"' + $nyttFagType + '"' + '>' + $nyttFagText + '</td><td class=' + '"' + 'grade-col';
    let htmlNyttFag2 =  '"' + '><ul class=' + '"' + 'grade' + '"' + '><li value=' + '"' + '1' + '"' + '>1</li><li value=' + '2' + '>2</li><li value=' + '3';
    let htmlNyttFag3 = '>3</li><li value=' + '4' + '>4</li><li value=' + '5' + '>5</li><li value=' + '6' + '>6</li></ul></td><td class=' + '"' + 'eksamen-col' + '"' + '><ul class=' + '"' + 'eksamen' + '"' + '><li value=' + '1';
    let htmlNyttFag4 = '>1</li><li value=' + '2' + '>2</li><li value=' + '3' + '>3</li><li value=' + '4' + '>4</li><li value=' + '5' + '>5</li><li value=' + '6' +'>6</li></ul></td>';
    let htmlNyttFag5 = '<td class=' + '"' + 'remove-btn' + '"' + '><i class=' + '"' + 'fas fa-times fa-2x x-btn' + '"' + '></i></td></tr>';

    let htmlNyttFagRow = htmlNyttFag + htmlNyttFag2 + htmlNyttFag3 + htmlNyttFag4 + htmlNyttFag5;

    if ($nyttFagType === 'programfag') {
      $('.row-hidden').hide(); // removes the hidden row of programfag table
      $('.table-programfag').append(htmlNyttFagRow);
    } else {
      $('.table-fellesfag').append(htmlNyttFagRow);
    }


    // Adds to object fag and poeng
    $('.grade').children().on('click', event => {
      $(event.currentTarget).toggleClass('grade-active');
      $(event.currentTarget).siblings().removeClass('grade-active');

      let gradeString = $(event.currentTarget).val();
      let parent = $(event.currentTarget).parentsUntil('tr').prev();

      let currentFag = parent[0].innerHTML;
      let fagPoeng = Number(parent[0].attributes.value.value);

      fag[currentFag] = gradeString;
      poeng[currentFag] = fagPoeng;

      console.log(fag);
      console.log(poeng)

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
      console.log(fag);
      console.log(poeng);

      vitnemal(fag);
    })

    //remove from selector
    $('.fag-selection-realfag>option:selected').hide();

    // add back if removed from table
    $('.remove-btn').on('click', event => {
      let $currentFag = $(event.currentTarget);
      $currentFag.children().addClass('fa-spin');
      console.log($currentFag.children());
      $currentFag.parent().fadeOut();
      $('.row-hidden').show();


      if ($currentFag !== $('.fag-selection-realfag').text() && $currentFag.siblings()[0].attributes[1].value === 'realfag-fag') {
        let $fagValue = $currentFag.siblings()[0].attributes[2].value; // fagvalue
        let $fagName = $currentFag.siblings()[0].innerHTML; // fagName
        let $fagType = $currentFag.siblings()[0].attributes[3].value; // fagtype
        let $fagId = $currentFag.siblings()[0].attributes[1].value;
        let addNewFagHtml = '<option class=' + '"' + 'add-fag' + '"' + ' id=' + '"' + $fagId + '"' + ' value=' + '"' + $fagValue + '"' + 'type=' + '"' + $fagType + '"' + '>' + $fagName + '</option>';
        $('.fag-selection-realfag').append(addNewFagHtml);
      }
    })

  })




  // Adds new fag from selector -sso
  $('.fag-selection-sso').on('change', event => {

    let $nyttFag = $(event.currentTarget);
    let $nyttFagText = $('.fag-selection-sso>option:selected').text();
    let $nyttFagType = $('.fag-selection-sso>option:selected')[0].attributes[3].value;
    let $nyttFagId = $('.fag-selection-sso>option:selected')[0].attributes[1].value;

    console.log($('.fag-selection-sso>option:selected'));
    console.log($nyttFag.val());
    console.log($nyttFagText);
    console.log($nyttFagType);
    console.log($nyttFagId);

    // make the value equal to poeng of the fag:) need to find out which option user clicked
    let htmlNyttFag = '<tr class=' + 'row' + '><td class='+ '"'+ 'active-fag' + '"' + 'id=' + '"' + $nyttFagId + '"' +' value=' + '"' + $nyttFag.val() + '" ' + 'type=' + '"' + $nyttFagType + '"' + '>' + $nyttFagText + '</td><td class=' + '"' + 'grade-col';
    let htmlNyttFag2 =  '"' + '><ul class=' + '"' + 'grade' + '"' + '><li value=' + '"' + '1' + '"' + '>1</li><li value=' + '2' + '>2</li><li value=' + '3';
    let htmlNyttFag3 = '>3</li><li value=' + '4' + '>4</li><li value=' + '5' + '>5</li><li value=' + '6' + '>6</li></ul></td><td class=' + '"' + 'eksamen-col' + '"' + '><ul class=' + '"' + 'eksamen' + '"' + '><li value=' + '1';
    let htmlNyttFag4 = '>1</li><li value=' + '2' + '>2</li><li value=' + '3' + '>3</li><li value=' + '4' + '>4</li><li value=' + '5' + '>5</li><li value=' + '6' +'>6</li></ul></td>';
    let htmlNyttFag5 = '<td class=' + '"' + 'remove-btn' + '"' + '><i class=' + '"' + 'fas fa-times fa-2x x-btn' + '"' + '></i></td></tr>';

    let htmlNyttFagRow = htmlNyttFag + htmlNyttFag2 + htmlNyttFag3 + htmlNyttFag4 + htmlNyttFag5;

    if ($nyttFagType === 'programfag') {
      $('.row-hidden').hide(); // removes the hidden row of programfag table
      $('.table-programfag').append(htmlNyttFagRow);
    } else {
      $('.table-fellesfag').append(htmlNyttFagRow);
    }


    // Adds to object fag and poeng
    $('.grade').children().on('click', event => {
      $(event.currentTarget).toggleClass('grade-active');
      $(event.currentTarget).siblings().removeClass('grade-active');

      let gradeString = $(event.currentTarget).val();
      let parent = $(event.currentTarget).parentsUntil('tr').prev();

      let currentFag = parent[0].innerHTML;
      let fagPoeng = Number(parent[0].attributes.value.value);

      fag[currentFag] = gradeString;
      poeng[currentFag] = fagPoeng;

      console.log(fag);
      console.log(poeng)

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
      console.log(fag);
      console.log(poeng);

      vitnemal(fag);
    })

    $('.fag-selection-sso>option:selected').hide();

    // add back if removed from table
    $('.remove-btn').on('click', event => {
      let $currentFag = $(event.currentTarget);
      $currentFag.children().addClass('fa-spin');
      $currentFag.parent().fadeOut();
      $('.row-hidden').show();


      if ($currentFag !== $('.fag-selection-sso').text() && $currentFag.siblings()[0].attributes[1].value === 'sso-fag') {
        let $fagValue = $currentFag.siblings()[0].attributes[2].value; // fagvalue
        let $fagName = $currentFag.siblings()[0].innerHTML; // fagName
        let $fagType = $currentFag.siblings()[0].attributes[3].value; // fagtype
        let $fagId = $currentFag.siblings()[0].attributes[1].value;
        console.log($currentFag.siblings());
        let addNewFagHtml = '<option class=' + '"' + 'add-fag' + '"' + ' id=' + '"' + $fagId + '"' + ' value=' + '"' + $fagValue + '"' + 'type=' + '"' + $fagType + '"' + '>' + $fagName + '</option>';
        $('.fag-selection-sso').append(addNewFagHtml);
        console.log(addNewFagHtml);
      }

      if ($.trim(($(".head-pg").next()).html())=='') {
        console.log('hey');
        $('.row-hidden').show(); // adds hidden row back so table doesnt get fucked up
      }
    })
  })



  // removes fag when button pressed and adds it to select tag
  // Does not remove fag added back
  $removeBtn.on('click', event => {
    let $currentFag = $(event.currentTarget);
    $currentFag.children().addClass('fa-spin');
    $currentFag.parent().fadeOut();

    if ($currentFag !== $('.fag-selection-fellesfag').text()) {
      let $fagValue = $currentFag.siblings()[0].attributes[2].value; // fagvalue
      let $fagName = $currentFag.siblings()[0].innerHTML; // fagName
      let $fagType = $currentFag.siblings()[0].attributes[3].value;
      let $fagId = $currentFag.siblings()[0].attributes[1].value;
      let addNewFagHtml = '<option class=' + '"' + 'add-fag' + '"' + ' id=' + '"' + $fagId + '"' + ' value=' + '"' + $fagValue + '"' + 'type=' + '"' + $fagType + '"' + '>' + $fagName + '</option>';
      $('.fag-selection-fellesfag').append(addNewFagHtml);
    }

  })



  // Adds alderspoeng
  $('.alderspoeng-sel').on('change', event => {
    // console.log($('.alderspoeng-sel>option:selected').text()) //make this the value of alderspoeng?
    alderspoeng = Number(($('.alderspoeng-sel>option:selected').val()));

    vitnemal(fag);
  })

  // adds points from tilleggspoeng checkbox
  $('.checkbox-tilleggspoeng').children().on('change', event => {
    console.log('checked');
    tilleggspoeng += Number($(event.currentTarget).val());

    if ($('.checkbox-tilleggspoeng input[type=checkbox]:checked').length > 1) {
      console.log('more than one');
      tilleggspoeng = 2;
      console.log('poeng: ' + tilleggspoeng);
    } else if ($('.checkbox-tilleggspoeng input[type=checkbox]:checked').length === 1) {
      tilleggspoeng = Number($('.checkbox-tilleggspoeng input[type=checkbox]:checked')[0].defaultValue); // gett the value of the one currently ckecked
      console.log('poeng: ' + tilleggspoeng);
    } else {
      tilleggspoeng = 0;
    }

    vitnemal(fag);
  })


  // revealing elements on scroll

  var intro = {
        origin   : "bottom",
        distance : "64px",
        duration : 800,
        delay    : 1500,
        scale    : 1,
      }
  var select = {
    duration: 800,
  }

  window.sr = ScrollReveal();
  // sr.reveal('.scroll', { duration : 1500, scale:0.8}, 1000);
  sr.reveal('header', { duration : 1500, scale:0.8});
  sr.reveal('.scroll', intro);
  // sr.reveal('tr', intro, 50);
  sr.reveal('.more-fag', select);
  sr.reveal('.alderspoeng-div', select);
  sr.reveal('.checkbox-tilleggspoeng', select);

})

// fjern fag fra objektene når de trykkes på igjen og når de fjernes
  // what if i make an array out of the values in fag and then toggle the value when it is clicked?
// remove key from fag when remove-btn is pressed
// some numbers fail to add class gray when clicked
