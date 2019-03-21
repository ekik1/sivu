/*
$.get("http://mtsdo.com/ddjson", function(data, status) {
    $('.loader-5').hide();
    data = JSON.parse(data);

    $("#leaderboard").append("<tr><th>name</th><th>time</th><th>gems</th><th>kills</th></tr>");
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        $("#leaderboard").append("<tr><td>" + data[i].name + "</td><td>" + data[i].score + "</td><td>" + data[i].gems + "</td><td>" + data[i].kills + "</td></tr>");
    }

});
*/
function openPage(pageName, elmnt, color) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(pageName).style.display = "block";

    elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();