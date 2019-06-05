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

  newDiv.appendChild(cardsBtns)

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
  newCard.appendChild(text);
  newCard.appendChild(prioDiv);
  newCard.setAttribute("draggable", "true");
  newCard.setAttribute("ondragstart", "drag(event)");
  newCard.appendChild(flagDiv);
  newCard.appendChild(popUpBtn);
  newCard.id = 'card';
  newCard.className = 'card';

  

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
  modalDiv.appendChild(exitSpan);
  modalDiv.appendChild(dueDateDiv);
  modalDiv.appendChild(headerDiv);
  modalDiv.appendChild(descDiv)
  modalDiv.appendChild(chckbxDiv)
  modalDiv.appendChild(addFile);

  headerDiv.innerHTML = document.getElementById("input").value;

  exitSpan.onclick = function () {
    modalDiv.style.display = "none";
  }

  document.getElementById("card" + nr).appendChild(modalDiv);
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
