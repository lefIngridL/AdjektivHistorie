// Model
const app = document.getElementById('app');
let color='_____';
let subject='_____';
let action='____';
let object='_____';

// View
updateView();
function updateView(){
    html = /*html*/ `
    <div id="story" >
    Once There was a <span id="Color" style="color:blue">${color}</span> <span id="Subject" style="color:blue">${subject}</span> that <span id="Action" style="color:blue">${action}</span> in the <span id="Object" style="color:blue">${object}</span>. And great things happened. The End.
    
    </div>
    <div id="buttons" >
    <input type="button" class="button" id="red" value="red" onclick="setColor(this)">
    <input type="button" class="button" id="green" value="green" onclick="setColor(this)">
    <input type="button" class="button" id="man" value="man" onclick="setSubject(this)">
    <input type="button" class="button" id="cat" value="cat" onclick="setSubject(this)">
    <input type="button" class="button" id="jumped" value="jumped" onclick="setAction(this)">
    <input type="button" class="button" id="stared" value="stared" onclick="setAction(this)">
    <input type="button" class="button" id="pool" value="pool" onclick="setObject(this)">
    <input type="button" class="button" id="wall" value="wall" onclick="setObject(this)">
    </div>

    
    `;
    
    app.innerHTML = html;
}

// Controler

function setColor(colorSel) {
    color = colorSel.value;
    console.log(color, colorSel);
    colorSel.style.color
    updateView();
}
function setSubject(subjectSel) {
    subject = subjectSel.value;
    updateView();
    
}
function setAction(actionSel){
    action = actionSel.value;
    updateView();
    

}
function setObject(objectSel){
    object = objectSel.value;
    updateView();
    

}

