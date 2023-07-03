window.addEventListener('load', (event) => {
    
    function unselect(elems) {
        for (let index = 0; index < elems.length; index++) {
            const element = elems[index];
            element.classList.remove('selected');
        }
    }

    var sectionSwitch = document.getElementsByClassName("sectionSwitch");

    sectionSwitch[0].addEventListener('click', (event) => {
        unselect(sectionSwitch);
        sectionSwitch[0].classList.add('selected');
    });

    sectionSwitch[1].addEventListener('click', (event) => {
        unselect(sectionSwitch);
        sectionSwitch[1].classList.add('selected');
    });

    sectionSwitch[2].addEventListener('click', (event) => {
        unselect(sectionSwitch);
        sectionSwitch[2].classList.add('selected');
    });

});