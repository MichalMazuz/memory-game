var count = 0;
var p = "";
var preve = " ";
var sum = 0;
var countTry = 0;
arr1 = new Array(1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6);
var len = 12;
function newGame() {
    while (len > 0) {
        makom = Math.ceil((Math.random() * (len - 1)));
        var x = document.createElement("div");
        x.classList = "card";
        x.setAttribute("data-id", "animal" + arr1[makom]);
        x.setAttribute("data-state", "off");
        document.getElementsByClassName("warp")[0].appendChild(x);
        arr1[makom] = arr1[len - 1];
        len--;
    }
}
function start() {
    if (event.target == event.currentTarget)
        return;
    if (count == 2 || event.target.getAttribute("data-state") == "on")
        return;
    preve = event.target;
    if (preve == p) {
        return;
    }
    preve.classList.add(preve.getAttribute("data-id"))
    preve.classList.remove("card");
    if (count == 0) {
        count = 1;
        p = preve;
    }
    else {
        count = 2;
        setTimeout(finish, 1200);
    }
}
function finish() {
    countTry += 1;
    if (preve.getAttribute("data-id") == p.getAttribute("data-id")) {
        p.setAttribute("data-state", 'on');
        preve.setAttribute("data-state", 'on');
        sum += 1;
        preve.style.opacity = "0.3";
        p.style.opacity = "0.3";
        if (sum == 6) {
            document.getElementsByClassName("vectory")[0].style.display = "grid";
            document.getElementById("try").innerText = "מס' הנסיונות שלך: " + countTry;
        }

    }
    else {
        preve.classList.remove(preve.getAttribute("data-id"));
        p.classList.remove(p.getAttribute("data-id"));
        preve.classList.add("card");
        p.classList.add("card");
    }
    count = 0;
    preve = "";
    p = "";
}
function end() {
    document.getElementById("end").style.display = "grid";
    document.getElementById("gif").style.display = "none";
}