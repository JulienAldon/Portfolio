// Get the modal
window.addEventListener('load', (event) => {
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementsByClassName("img");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    for(var i = 0; i < img.length; i++) { 
        var a = img[i];
        a.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    
    modalImg.onclick = function() {
        event.stopPropagation();
    }
    modal.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
    
    var contactMe = document.getElementById("contactMe");
    var copy = document.getElementById("copy");
    contactMe.onclick = function() {
        if (contactMe.innerHTML == "<span>Contactez moi</span>") {
            contactMe.innerHTML = "julien.aldon@epitech.eu"
            copyStringToClipboard("julien.aldon@epitech.eu");
            copy.classList.add('active');
            contactMe.classList.add('clicked');
            window.setTimeout(() => {
                copy.classList.remove('active');
            }, 2000);
        } else {
            contactMe.innerHTML = "<span>Contactez moi</span>";
            copy.classList.remove('active');
            contactMe.classList.remove('clicked');
        }
    }
    window.onscroll = function(ev) {
        var header = document.getElementsByClassName('h2Context')[0];
        if (window.scrollY > 0) {
            header.classList.add("scroll");
        } else {
            header.classList.remove("scroll");
    
        }
    };
});

function copyStringToClipboard (str) {
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}