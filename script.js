let homePnt = 0
let guestPnt = 0

let homeScr= document.getElementById("home-scr")

let guestScr= document.getElementById("guest-scr")

function homeBonus1(){
    homePnt += 1

    homeScr.textContent = homePnt
}
function homeBonus2(){
    homePnt += 2

    homeScr.textContent = homePnt
}
function homeBonus3(){
    homePnt += 3

    homeScr.textContent = homePnt
}

function guestBonus1(){
    guestPnt += 1

    guestScr.textContent = guestPnt
}
function guestBonus2(){
    guestPnt += 2

    guestScr.textContent = guestPnt
}
function guestBonus3(){
    guestPnt += 3

    guestScr.textContent = guestPnt
}