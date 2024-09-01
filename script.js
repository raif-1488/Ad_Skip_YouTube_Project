setInterval(function() {
    var skipButton = document.getElementsByClassName("ytp-skip-ad-button");
    if( skipButton.length > 0){
        console.log("Ad detected");
        skipButton[0].click();
    }
}, 500)