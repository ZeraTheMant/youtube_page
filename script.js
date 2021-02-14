const showMoreOption = document.querySelector("#show-more-option");
const descriptionBox = document.querySelector("#desc-box");
var boxOpened = false;

showMoreOption.addEventListener('click', function() {
    boxOpened = !boxOpened;
    
    if (boxOpened) {
        descriptionBox.style.height = 'auto';        
    } else {
        descriptionBox.style.height = '70px';
    }
});