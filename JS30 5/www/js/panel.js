const panels = document.querySelectorAll('.panel');

panels.forEach(panel=>panel.addEventListener('click',openPanel));
panels.forEach(panel=>panel.addEventListener('transitionend',appearTitle));


function openPanel(){
    this.classList.toggle('open');
}

function appearTitle(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}
