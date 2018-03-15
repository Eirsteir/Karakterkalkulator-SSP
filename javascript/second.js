require(['jquery', 'app'], function($, App) {

  const tableHtml ='<div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Engelsk</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"> <i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Geografi</div><div';

  const tableHtml2 = ' class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"> <i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Mattematikk 1T</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell">';

  const tableHtml3 ='<i class="fas fa-times fa-2x x-btn"></i></div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Naturfag</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Samfunnsfag</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen">';

  const tableHtml4='<li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Historie</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Religion</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li>';

  const tableHtml5 = '<li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul>';

  const tableHtml6 ='</div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Kropps&oslash;ving</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell"> <i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Norsk hovedm&aring;l, skridtlig';

  const tableHtml7 = '</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Norsk hovedmål, muntlig</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div>';

  const tableHtml8 = '<div class="divTableCell remove-btn"><i class="fas fa-times fa-2x x-btn"></i></div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Norsk sidemål</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell"> <i class="fas fa-times fa-2x x-btn"></i> </div></div><div class="divTableRow"><div class="divTableCell active-fag" id="fellesfag" value="0">Fremmedspråk nivå II</div><div class="divTableCell grade-col"><ul class="grade"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul>';

  const tableHtml9 = '</div><div class="divTableCell eksamen-col"><ul class="eksamen"><li value="1">1</li><li value="2">2</li><li value="3">3</li><li value="4">4</li><li value="5">5</li><li value="6">6</li></ul></div><div class="divTableCell remove-btn"> <i class="fas fa-times fa-2x x-btn"></i> </div></div></div></div>';

  $('.table-fellesfag').append(tableHtml + tableHtml2 + tableHtml3 + tableHtml4 + tableHtml5 + tableHtml6 + tableHtml7 + tableHtml8 + tableHtml9);



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
  sr.reveal('.intro', intro);
  // sr.reveal('#average-view', avg )
  // sr.reveal('.div-fellesfag', fellesfag)
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
    scrollTop: $(".div-fellesfag").offset().top - 20
  }

  $('.arrow').on('click', function() {
    $('html, body').animate(topOfPage, 1000);
  })

  $('.til-toppen').on('click', function() {
    $('html, body').animate(topOfPage, 1000);
  })

};

