console.log("HOLA Q TAL")
array = ["ándale, amorcito", "te juro q no se va a volver a repetir", "perdona a esta pobre muchacha de rancho",
"te amo mucho, solecito", "porfi perdón :(", "sabes q eres el amor de mi vida?", "no fue mi intención hacerte enojar", 
"perdóname, amor", ":(", ":c"];
let fontSizeTrue = 20;
let fontSizeFalse = 20;

document.getElementById("isTrue").addEventListener("click", () => {
    apologiesAccepted();
});

document.getElementById("isFalse").addEventListener("click", () => {
    apologiesRejected();
});

function apologiesRejected(){
    numRandom = Math.floor(Math.random() * 10);
    document.getElementById("isFalse").value = array[numRandom];
    document.getElementById("isFalse").style.fontSize = (fontSizeFalse - 4) + 'px';
    document.getElementById("isTrue").style.fontSize = (fontSizeTrue + 10) + 'px';
    fontSizeTrue++;
    fontSizeFalse--;
}

function apologiesAccepted() {
    document.getElementById('child-container').innerHTML = "";
    const loveContainer = document.getElementById('child-container');
    const eleme = document.createElement("div");
    eleme.innerHTML = `

    <div class="loveGif">  
        <img src="https://i.pinimg.com/originals/94/2d/48/942d4887a06dca5b59f8b74dd909b323.gif" alt="" width = 300px>
        <div class="title1"> gracias, te amo, hay q ir a mimir juntos otra vez </div>
    </div>
        `;
        loveContainer.appendChild(eleme);
}