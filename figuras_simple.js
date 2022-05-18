// Load square tab on init
document.getElementById("square").style.display =  "flex";
document.getElementById("btab-square").className += " active"

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}

function getSquareInfo(evt) {
    var side_input = document.getElementById("side");
    var side = Number(side_input.value);
    
    document.getElementById("area").value = side*side;
    document.getElementById("perimeter").value = 4*side;
}

function getTriangleInfo(evt) {
    var side_one = Number(document.getElementById("side-one").value);
    var side_two = Number(document.getElementById("side-two").value);
    var side_three = Number(document.getElementById("side-three").value);

    var perimeter = side_one + side_two + side_three;
    var s = perimeter / 2;
    var area = Math.sqrt( s * (s-side_one) * (s-side_two) * (s-side_three) );

    document.getElementById("triangle-perimeter").value = perimeter;
    document.getElementById("triangle-area").value = area;
}

function getCircleInfo(evt) {
    var radius = Number(document.getElementById("radius").value);
    const PI = Math.PI;

    document.getElementById("circle-perimeter").value = (2*PI*radius).toFixed(4);
    document.getElementById("circle-area").value = (PI*radius*radius).toFixed(4);
}