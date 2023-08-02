//This code will rolate a next image in the image's carousell
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 10000);

function nextImage() {
    count++;
    if (count > 5) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

//This code will change the display propriety in the anime's description when the button is pressed and change the button value
function buttonPressed() {
    let { onePieceButton, onePieceDescription, fairyTailButton, fairyTailDescription, jujutsuButton, jujutsuDescription, narutoButton, narutoDescription, dbzbutton, dbzDescription } = variables();

    showOnePieceDescription(onePieceButton, onePieceDescription);
    showFairyTailDescription(fairyTailButton, fairyTailDescription);
    showJujutsuKaisenDescription(jujutsuButton, jujutsuDescription);
    showNarutoDescription(narutoButton, narutoDescription);
    showDragonBallZDescription(dbzbutton, dbzDescription);
}

function showDragonBallZDescription(dbzbutton, dbzDescription) {
    dbzbutton.addEventListener('click', function () {
        if (dbzDescription.style.display === "none") {
            dbzDescription.style.display = "block";
            dbzbutton.innerHTML = "-";
        } else {
            dbzDescription.style.display = "none";
            dbzbutton.innerHTML = "+";
        }
    });
}

function showNarutoDescription(narutoButton, narutoDescription) {
    narutoButton.addEventListener('click', function () {
        if (narutoDescription.style.display === "none") {
            narutoDescription.style.display = "block";
            narutoButton.innerHTML = "-";
        } else {
            narutoDescription.style.display = "none";
            narutoButton.innerHTML = "+";
        }
    });
}

function showJujutsuKaisenDescription(jujutsuButton, jujutsuDescription) {
    jujutsuButton.addEventListener('click', function () {
        if (jujutsuDescription.style.display === "none") {
            jujutsuDescription.style.display = "block";
            jujutsuButton.innerHTML = "-";
        } else {
            jujutsuDescription.style.display = "none";
            jujutsuButton.innerHTML = "+";
        }
    });
}

function showFairyTailDescription(fairyTailButton, fairyTailDescription) {
    fairyTailButton.addEventListener('click', function () {
        if (fairyTailDescription.style.display === "none") {
            fairyTailDescription.style.display = "block";
            fairyTailButton.innerHTML = "-";
        } else {
            fairyTailDescription.style.display = "none";
            fairyTailButton.innerHTML = "+";
        }
    });
}

function showOnePieceDescription(onePieceButton, onePieceDescription) {
    onePieceButton.addEventListener('click', function () {
        if (onePieceDescription.style.display === "none") {
            onePieceDescription.style.display = "block";
            onePieceButton.innerHTML = "-";
        } else {
            onePieceDescription.style.display = "none";
            onePieceButton.innerHTML = "+";
        }
    });
}

function variables() {
    let onePieceButton = document.getElementById('onepiece-button');
    let fairyTailButton = document.getElementById('fairyTail-button');
    let jujutsuButton = document.getElementById('jujutsu-button');
    let narutoButton = document.getElementById('naruto-button');
    let dbzbutton = document.getElementById('dbz-button');

    let onePieceDescription = document.getElementById('onepiece-description-box');
    let fairyTailDescription = document.getElementById('fairyTail-description-box');
    let jujutsuDescription = document.getElementById('jujutsu-description-box');
    let narutoDescription = document.getElementById('naruto-description-box');
    let dbzDescription = document.getElementById('dbz-description-box');

    return { onePieceButton, onePieceDescription, fairyTailButton, fairyTailDescription, jujutsuButton, jujutsuDescription, narutoButton, narutoDescription, dbzbutton, dbzDescription };
}

//This code will change the background images if the user's screen is less than 700px
if (window.innerWidth < 700) {
    changeAllImages();
}
function changeAllImages() {
    document.getElementById('onePiece-background').src = "./src/images/onePiece-mobileBackground.jpg";
    document.getElementById('fairyTail-background').src = "./src/images/fairyTail-mobileBackground.jpg";
    document.getElementById('jujutsuKaisen-background').src = "./src/images/jujutsuKaisen-mobileBackground.jpg";
    document.getElementById('naruto-background').src = "./src/images/naruto-mobileBackground.jpg";
    document.getElementById('dbz-background').src = "./src/images/dragonBallZ-mobileBackground.jpg";
}

