let setting = document.querySelector('.btn_setting');
let modal2 = document.querySelector('.modal2');
let overlay2 = modal2.querySelector('.md_overlay2');
let btn = modal2.querySelector('.btn_close2');

let img_profile = document.getElementById('img_profile');
let modal3 = document.querySelector('.modal3');
let overlay3 = modal3.querySelector('.md_overlay3');
let btn3 = modal3.querySelector('.btn_close3');

let openModal2 = () => {
    modal2.classList.remove('hidden2');
}

let closeModal2 = () => {
    modal2.classList.add('hidden2');
}
let openModal3 = () => {
    modal3.classList.remove('hidden3');
}

let closeModal3 = () => {
    console.log("여기까지옴");
    modal3.classList.add('hidden3');
}

setting.addEventListener("click", openModal2);
overlay2.addEventListener("click", closeModal2);
btn.addEventListener("click", closeModal2);

img_profile.addEventListener("click", openModal3);

overlay3.addEventListener("clcik", closeModal3);
btn3.addEventListener("clcik", closeModal3);