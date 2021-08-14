
const btn1 = document.querySelector('#cbtn1');
btn1.addEventListener('click', function() {
    if(!collapsed) {
        collapsed = true;
    } else collapsed = false;
});