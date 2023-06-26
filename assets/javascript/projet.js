window.addEventListener('load', (event) => {
    var contactMe = document.getElementById("contactMe");
    var contactSpan = document.getElementById("contact-me-text");
    contactMe.onclick = function() {
        copyStringToClipboard(email_code())
        contactSpan.innerHTML= email_code()
        setTimeout(() => {
            contactSpan.innerHTML = 'Contatez moi'
        }, 2000)    
    }
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

function email_code() {
    return atob("anVsaWVuLmFsZG9uQHdhbmFkb28uZnI=")
}