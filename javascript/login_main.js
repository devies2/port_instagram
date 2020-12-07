$(function(){
    $("#login_pw").on('input', function(){
        if($("login_pw").val()=='')
        $("#login_request").attr("disabled", true);
        else
            $("#login_request").attr("disabled", false);
    });
})

var obTimeOut;
var imgAry = ["./img/image01.jpg", "./img/image02.jpg", "./img/image03.jpg", "./img/image04.jpg"];

var index = -1;

function ShowDefaultRotate() {
    index++;
    if (index < imgAry.length) {
        document.getElementById("img_phone").src = imgAry[index];
        obTimeOut = setTimeout("ShowDefaultRotate()", 3000);
    } else {
        index = -1;
        ShowDefaultRotate();
    }1
}

function transImg() {
    obTimeOut = window.setTimeout(ShowDefaultRotate, 100);
}

window.onload = transImg();


let show_pw = document.getElementById('show_pw');
let login_pw = document.getElementById('login_pw');

function show_password(){
    console.log(login_pw.type);
    login_pw.type = 'text';
};

login_pw.addEventListener('click', show_password);