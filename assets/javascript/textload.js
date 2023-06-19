window.addEventListener('load', (event) => {
    
    function unselect(elems) {
        for (let index = 0; index < elems.length; index++) {
            const element = elems[index];
            element.classList.remove('selected');
        }
    }

    var sectionSwitch = document.getElementsByClassName("sectionSwitch");
    var presbox = document.getElementById("pres-textbox");
    var expbox = document.getElementById("exp-textbox");
    var projtbox = document.getElementById("proj-textbox");
    var boxes = [presbox, expbox, projtbox];

    sectionSwitch[0].addEventListener('click', (event) => {
        unselect(sectionSwitch);
        unselect(boxes);
        presbox.classList.add('selected');
        sectionSwitch[0].classList.add('selected');
    });

    sectionSwitch[1].addEventListener('click', (event) => {
        unselect(sectionSwitch);
        unselect(boxes);
        expbox.classList.add('selected');
        sectionSwitch[1].classList.add('selected');
    });

    sectionSwitch[2].addEventListener('click', (event) => {
        unselect(sectionSwitch);
        unselect(boxes);
        projtbox.classList.add('selected');
        sectionSwitch[2].classList.add('selected');
    });

});