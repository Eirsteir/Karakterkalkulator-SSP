var main = function() {

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

  var intro = {
        origin   : "bottom",
        distance : "64px",
        duration : 800,
        delay    : 1500,
        scale    : 1,
  };
  var select = {
    duration: 800,
  };
  var mobileAverage = {
    origin : "left",
    distance : "1000px",
    duration: 1000,
    delay : 500,
    scale: 1,
  }


  window.sr = ScrollReveal();
  sr.reveal('header', { duration : 1500, scale:0.8});
  sr.reveal('.scroll', intro);
  sr.reveal('.div-programfag', select);
  sr.reveal('.more-fag', select);
  sr.reveal('.alderspoeng-div', select);
  sr.reveal('.checkbox-tilleggspoeng', select);
  if ($(window).innerWidth() < 850){
  sr.reveal('.mobile-average', mobileAverage);
  };

});

$(document).ready(main);
