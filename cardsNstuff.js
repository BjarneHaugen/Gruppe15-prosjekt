const boardsBtn = document.getElementById("boardsBtn");
const boardsContainer = document.getElementById("boardsContainer");

// diverse counters
var flagCounter = 0;
var cardCounter = 0;

//funskjon som lager ny tavle
boardsBtn.addEventListener("click", function () {
  //DOM elementer
  var newDiv = document.createElement("div")
  var newContent = document.createTextNode("test")
  var 
  newDiv.className = "tavle";

  //append child for ny tavle:
  newDiv.appendChild(newContent);
  tavleContainer.appendChild(newDiv);
  newDiv.after(boardsBtn);
<<<<<<< HEAD
  newCard.after(newCardBtn);
/*
  const starContainer = document.createElement("div");
  starContainer.id = "test";
  const star1 = document.createElement("p")
  const star2 = document.createElement("p")
  const star3 = document.createElement("p")
  const star4 = document.createElement("p")
  const star5 = document.createElement("p")
  starContainer.appendChild(star1);
  newDiv.appendChild(starContainer);
*/
=======

  newDiv.appendChild(cardsBtns)
>>>>>>> c936c596885fb91a1de88658dc1dc68b0b554d94

  return newDiv;
});

const stars = []

//funksjon som lager kortene
function createCard(nr) {
  //DOM elementer
  var newCard = document.createElement("div");
  var flagDiv = document.createElement("div");
  var popUpBtn = document.createElement("button");
  var text = document.createElement("INPUT");
<<<<<<< HEAD
  var flagDiv = document.createElement("div");
  var xspan = document.createElement("span");
  var flagSpan = document.createElement("span");
  var prioDiv = document.createElement("div");
  var flagged = 0;
  const stars = [document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p")]


  xspan.onclick = function removeCard(){
    var elem = document.querySelector('#card');
    elem.parentNode.removeChild(elem);
  };


/*
 stars.onclick = function changeColor1(nr) {
    console.log(nr)
    for(var i = 1; i <= 5; i++) {
        if(i <= nr) {
            document.getElementById('star' + i).style.color = "gold"
            document.getElementById('star'+i).innerHTML = "★"
        } else {
            document.getElementById('star' + i).style.color = "gold"
            document.getElementById('star'+i).innerHTML = "☆"
        }
    }
}
=======
  var span = document.createElement("span");
  var flagSpan = document.createElement("span");
  var prioDiv = document.createElement("div");
  var flagged = 0;


  const starContainer = document.createElement("div");
  starContainer.id = "starContainer";
  newCard.appendChild(starContainer);

  

  /*for (i = 0; i < 5; i++) {
    const star = document.createElement("p");
    starContainer.appendChild(star);
    star.id = "star" + i;
    stars.push(star[i]);
    document.getElementById("star0").innerHTML = "h";
    //document.getElementById('star' + 1).style.color = "gold"
    //star[i].style.color = "gold"
    //star[i].innerHTML = "★"
  }
>>>>>>> c936c596885fb91a1de88658dc1dc68b0b554d94
*/

  //Flagg og onclick funskjon som endrer fargen på flagget.
  flagSpan.innerHTML = "⚑";
  flagSpan.onclick = function changeColor() {
    if (flagged == 0) {
      flagSpan.style.color = "#f06969"
      flagged = 1
      console.log(1)
      return false;
    } else {
      flagSpan.style.color = "#d3d3d3"
      flagged = 0
      console.log(0)
      return false;
    }
  }

  //plasserer <span> som flagget er plassert i riktig div.
  flagDiv.setAttribute("id", "flag" + flagCounter);
  flagDiv.setAttribute("class", "flagDiv");
  flagDiv.appendChild(flagSpan);

<<<<<<< HEAD
  xspan.setAttribute("class", "closeCard");
  xspan.innerHTML = "&times;";

=======
>>>>>>> c936c596885fb91a1de88658dc1dc68b0b554d94
  popUpBtn.setAttribute("id", "popUpBtn");
  popUpBtn.setAttribute("class", "popUpBtns");
  popUpBtn.textContent = "✎ Edit";

  //Det her gidder jeg ikke å kommentere.
  text.setAttribute("id", "input");
  text.setAttribute("type", "text");
  text.setAttribute("class", "textInput");
  text.placeholder = "Enter task ...";

  //Append child kort til riktig tavle.
  document.getElementById("tavle" + nr).appendChild(newCard);

  //onclick funksjon (modal) på knapp.
  popUpBtn.setAttribute("onclick", "createPopUp()");

  /* Styler og setter daddy (new card) til alle elementene som
   skal være på kortet. */
  newCard.appendChild(xspan);
  newCard.appendChild(text);
<<<<<<< HEAD
  newCard.setAttribute("draggable","true");
  newCard.setAttribute("ondragstart","drag(event)");
  newCard.appendChild(popUpBtn);
=======
  newCard.appendChild(prioDiv);
  newCard.setAttribute("draggable", "true");
  newCard.setAttribute("ondragstart", "drag(event)");
>>>>>>> c936c596885fb91a1de88658dc1dc68b0b554d94
  newCard.appendChild(flagDiv);
  newCard.appendChild(popUpBtn);
  newCard.id = 'card';
  newCard.className = 'card';
<<<<<<< HEAD
=======

  
>>>>>>> c936c596885fb91a1de88658dc1dc68b0b554d94

  // f l a g c o u n t e r
  flagCounter = flagCounter + 1;


  for (i = 0; i < 5; i++) {
    const star = document.createElement("p");
    starContainer.appendChild(star);
    star.className = "stars";
    star.id = "star" + i;
    stars.push(star[i]);
    document.getElementById("star" + i).innerHTML = "☆";
    document.getElementById("star" + i).onclick = starchange;
    //document.getElementById('star' + 1).style.color = "gold"
    //star[i].style.color = "gold"
    //star[i].innerHTML = "★"
  }

  /*const star1 = document.getElementById("star1");
  star1.innerHTML = "★";
  star1.onclick = starchange;*/
  function starchange() {

    for (var i = 0; i < stars.length; i++) {

    const star = document.getElementById('star' + i);
    star.classList.add = "fav";

      console.log("klikka på" + stars[i]);

      if (star.className = "fav") {
        star.innerHTML = "★";
        star.classList.remove = "fav";
      } else if(star.className = "nofav") {
        star.innerHTML = "☆"
      }
      
    }
  }

  /*
  stars.onclick = function changeColor1(nr) {

    for (var i = 1; i <= 5; i++) {
      if (i <= nr) {
        document.getElementById('star' + i).style.color = "gold"
        document.getElementById('star' + i).innerHTML = "★"
      } else {
        document.getElementById('star' + i).style.color = "gold"
        document.getElementById('star' + i).innerHTML = "☆"
      }
      
    }
    
  }*/
}

// Lager pop up modal window med div funksjoner.
function createPopUp(nr) {
  var modalDiv = document.createElement("div");
  var headerDiv = document.createElement("div");
  var exitSpan = document.createElement("span");
  var title = document.createElement("h1");
  var chckbx = document.createElement("input");
  var chckbxDiv = document.createElement("div");
  var chckbxBtn = document.createElement("button");
  var uploadBtn = document.createElement("button");
  var fileTextSpan = document.createElement("span");
  var fileInput = document.createElement("input");
  var descDiv = document.createElement("div");
  var textArea = document.createElement("TEXTAREA");
  var descBtn = document.createElement("button");
  var addFile = document.createElement("INPUT");
  var dueDateDiv = document.createElement("div");
  var dueDateLabel = document.createElement("label");
  var dueDateInput = document.createElement("input");
  var dueP = document.createElement("p");
  var textnode = document.createTextNode("Deadline");


  dueP.setAttribute("class", "dueDateP");
  dueP.appendChild(textnode);

  dueDateLabel.setAttribute("class", "dueDateLabel");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.setAttribute("class", "dueDate")

  dueDateDiv.setAttribute("class", "dueDateDiv");

  // &times; lager (x) til pop up vindu.
  exitSpan.innerHTML = "&times;";
  exitSpan.setAttribute("class", "close");

  fileInput.setAttribute("type", "file");
  fileTextSpan.setAttribute("id", "fileBtn");

  chckbx.setAttribute("id", "prod");
  chckbx.setAttribute("type", "text");

  addFile.setAttribute("type", "file");
  addFile.setAttribute("class", "addFileButton")

  descDiv.setAttribute("class", "description")

  textArea.setAttribute("name", "tekst");
  textArea.placeholder = "Type description here";
  textArea.setAttribute("class", "descArea");

  descBtn.setAttribute("class", "descBtn");
  descBtn.innerHTML = "Add Description";
  descBtn.onclick = function text2() {
    var inputText = document.getElementsByName("tekst")[0].value;
    var newText = document.createElement("p");
    descDiv.appendChild(newText);
    newText.textContent = inputText;
  }

  //?????????????
  var i = 1;

  chckbxBtn.onclick = function createCheckBox(obj) {
    if (obj.value !== "") {

      var checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("id", "prodName" + i);
      checkbox.setAttribute("value", obj.value);
      checkbox.setAttribute("name", "products");
      checkbox.setAttribute("style", "display: block");

      var label = document.createElement("label");
      label.setAttribute("for", "prodName" + i);

      label.appendChild(document.createTextNode(obj.value));

      chckbxDiv.appendChild(checkbox);
      chckbxDiv.appendChild(label);

      obj.value = "";
      document.getElementById(obj.id).focus();

      i = i + 1;
    }
  }
  chckbxBtn.setAttribute("class", "chckbxBtn");
  chckbxBtn.innerHTML = "Create task";
  chckbxDiv.setAttribute("class", "chckbxDiv");
  chckbx.placeholder = "Add task";

  //Gir class til textarea
  textArea.setAttribute("class", "textArea");

  //gir class til headerDiv
  headerDiv.setAttribute("class", "headerDiv");

  //Gir class til modal vindu (pop up)
  modalDiv.setAttribute("class", "modal");

  // set daddy (dueDateDiv) til kalenderstuff.
  dueDateDiv.appendChild(dueDateLabel);
  dueDateDiv.appendChild(dueDateInput);

  //set daddy (document.body) til pop up vindu (modalDiv).
  document.body.appendChild(modalDiv)

  //set daddy (descDiv) til textarea og button.
  descDiv.appendChild(textArea)
  descDiv.appendChild(descBtn)

  //set daddy (chckbxDiv) til checkbox og checkboxbutton
  chckbxDiv.appendChild(chckbx)
  chckbxDiv.appendChild(chckbxBtn)

  // set daddy (modalDiv) til alt innhold i pop up
  modalDiv.appendChild(headerDiv);
  modalDiv.appendChild(exitSpan);
  modalDiv.appendChild(dueP);
  modalDiv.appendChild(dueDateDiv);
  modalDiv.appendChild(descDiv)
  modalDiv.appendChild(chckbxDiv)
  modalDiv.appendChild(addFile);

  headerDiv.innerHTML = document.getElementById("input").value;

  exitSpan.onclick = function () {
    modalDiv.style.display = "none";
  }

  // unfinished business
/*  window.onclick = function(event) {
    if (event.target == modalDiv) {
      modalDiv.style.display = "none";
    }
  } */

}

// Drag and drop funksjoner
var dragget;
var source;
var dragged;

function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id)
  dragget = event.target.className;
  dragged = event.target;
  source = ev.target.parentElement;
}
function drop(ev) {
  ev.preventDefault();
  if (ev.target.className == "tavle" && dragget == "card") {
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(dragged);
    console.log("yes");
  }
}
function drop1(ev) {
  ev.preventDefault();
  if (ev.target.className == "listWrap" && dragget == "tavle") {

    var data = ev.dataTransfer.getData("text");
    source.innerHTML = ev.target.innerHTML;
    ev.target.innerHTML = "";
    ev.target.appendChild(dragged);
    console.log("wrap");
  }
}


let cardInfo = [];
