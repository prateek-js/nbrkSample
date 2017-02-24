$('document').ready(init);
function init(){
  $('#card1, #card2, #card3, #card4').bind('dragover', function(event) {
    event.preventDefault();
  });
  $('#card1, #card2, #card3, #card4').bind('drop', function(event) {
    var notecard = event.originalEvent.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(notecard));
    event.preventDefault();
  });
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function card1BtnAdd(){
  getChildDivHtml(childno);
  $('#card1').append(getChildDivHtml(childno));
  childno++;
console.log(card1BtnAdd)
}
function card2BtnAdd(){
  $('#card2').append(getChildDivHtml(childno));
  childno++;
  console.log(card2BtnAdd)
}
function card3BtnAdd(){
  $('#card3').append(getChildDivHtml(childno));
  childno++;
  console.log(card3BtnAdd)
}
function card4BtnAdd(){
  $('#card4').append(getChildDivHtml(childno));
  childno++;
  console.log(card4BtnAdd)
}

var childno = 1;

function getChildDivHtml(childno) {
  return '<div id="item' + childno + '" draggable="true" ondragstart="drag(event)"><div class="cardTitle">Task ' + childno + '</div></div>'
}
