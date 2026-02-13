const button = document.getElementById("validation");
const input = document.getElementById("text");
const card = document.getElementById("card");
const manchot = document.getElementById("manchot");
const loveYouToo = document.getElementById("loveYouToo");
const sad = document.getElementById("sad");

const answers = ["nico", "nicolas", "nicosmos", "nicolas dijoud", "dijoud", "nicolasdijoud", "nicodijoud"];

;
const today = new Date();

if ( today.getDate() == 14){

button.addEventListener('click', () => {
    let value = input.value.trim().toLowerCase();
    console.log(value);
    if (answers.includes(value)) {
        processLove();
    }
    else {
        processSadness();
    }
    input.value = "";

});

function processLove() {
    card.style.display="none";
    let b = document.getElementById("ballon");
    b.classList.add("ballonVisible");
    manchot.style.display = "block";
    setTimeout( ()=>{
        loveYouToo.style.display = "block";
        manchot.style.display = "none";
    }, 4000);

}

function processSadness() {
    card.style.display="none";
    sad.style.display = "block";
    setTimeout( ()=>{
        card.style.display = "flex";
        sad.style.display = "none";
    }, 5000)

}

}
else{
    document.body.innerHTML = `
    <p>
    Ce n'est pas encore le 14/02
    </p>`;
}
