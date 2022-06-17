let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let openCntct = document.querySelector("#cntct")


closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
});

openCntct.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
});

  // following are the code to change sidebar button(optional)
function menuBtnChange() {
    if(sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
    }
}

function openHome() {
    document.getElementById("home").style.display = "block";
}

function openShop() {
    document.getElementById("cart").style.display = "block";
}

function openAbout() {
    document.getElementById("about").style.display = "block";
}

function openContact() {
    document.getElementById("contactArea").style.display = "block";
}

function closeHome() {
    document.getElementById("home").style.display = "none";
}

function closeShop() {
    document.getElementById("cart").style.display = "none";
}

function closeAbout() {
    document.getElementById("about").style.display = "none";
}

function closeContact() {
    document.getElementById("contactArea").style.display = "none";
}

function toggleHome() {
    openHome();
    closeShop();
    closeAbout();
}

function toggleShop() {
    openShop();
    closeHome();
    closeAbout();
}

function toggleAbout() {
    openAbout();
    closeHome();
    closeShop();
}

function toggleContact() {
    openContact();
}



var div = document.querySelector(".background");
var btn = document.querySelector("#contact");
btn.addEventListener("click", function(){
  div.classList.add("elementToFadeInAndOut");
  setTimeout(function(){div.classList.remove("elementToFadeInAndOut");}, 1000);
});

