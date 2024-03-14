let copyTexts = document.querySelectorAll(".copy-btn-continer");

// Loop through each element and add the event listener
copyTexts.forEach(function(copyText) {
    copyText.querySelector("button").addEventListener("click", function() {
        let input = copyText.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function() {
            copyText.classList.remove("active");
        }, 2500);
    });
});