(function(){
    let isJavaScriptEnabled = true; // Track the JavaScript state

    // Function to toggle JavaScript functionality
    function toggleJavaScript() {
        const popup = popupFind();
        const toggleCheckbox = document.getElementById('toggleCheckbox');
        
        if (toggleCheckbox.checked) {
            isJavaScriptEnabled = true;
            popup.style.display = ''; // Show the popup
        } else {
            isJavaScriptEnabled = false;
            popup.style.display = 'none'; // Hide the popup
        }
    }

    // Listen for changes to the toggle checkbox
    document.getElementById('toggleCheckbox').addEventListener('change', toggleJavaScript);
})();

(function () {
    window.debug = true;
    if (window.debug) console.log("started");
    let unpausingEnabled = true; // Track unpausing state
    let checkingPaused = true; // Track pause state checking
    setInterval(() => {
        if (!!popupFind()) {
            if (window.debug) console.log("hide popup");
            const popup = popupFind();
            if (!isAdBlockerNotification(popup)) {
                popup.style.display = "none";
                
                if (unpausingEnabled) {
                    if (window.debug) console.log("waiting 6 seconds...");
                    setTimeout(() => {
                        unpausingEnabled = false;
                        if (window.debug) console.log("unpausing disabled");
                    }, 6000); // Disable unpausing after 6 seconds
                }
                
                if (checkingPaused) {
                    if (window.debug) console.log("waiting 5 seconds before stopping pause check...");
                    setTimeout(() => {
                        checkingPaused = false;
                        if (window.debug) console.log("pause check stopped");
                    }, 5000); // Stop checking pause state after 5 seconds
                }
                
                if (window.debug) console.log("show popup");
                popup.style.display = ""; // Show the popup again
            }
        }
        
    }, 1000);
})();

function popupFind() {
    return document.querySelector("body > ytd-app > ytd-popup-container");
}

function isAdBlockerNotification(popup) {
    if (!popup) return false;
    const popupContent = popup.querySelector("div#content");
    return popupContent && popupContent.textContent.includes("Adblocker");
}

let ogVolume=1,pbRate = 1;setInterval(()=>{
    if(document.getElementsByClassName("video-stream html5-main-video")[0]!==undefined){let ad = document.getElementsByClassName("video-ads ytp-ad-module")[0];
        let vid = document.getElementsByClassName("video-stream html5-main-video")[0];if(ad==undefined){pbRate = vid.playbackRate}
        let closeAble = document.getElementsByClassName("ytp-ad-overlay-close-button");for(let i=0;i<closeAble.length;i++){closeAble[i].click()}
        if(document.getElementsByClassName("style-scope ytd-watch-next-secondary-results-renderer sparkles-light-cta GoogleActiveViewElement")[0]!==undefined)
        {let sideAd=document.getElementsByClassName("style-scope ytd-watch-next-secondary-results-renderer sparkles-light-cta GoogleActiveViewElement")[0];sideAd.style.display="none"}
        if(document.getElementsByClassName("style-scope ytd-item-section-renderer sparkles-light-cta")[0]!==undefined)
        {let sideAd_ = document.getElementsByClassName("style-scope ytd-item-section-renderer sparkles-light-cta")[0];sideAd_.style.display="none"}
        if(document.getElementsByClassName("ytp-ad-text ytp-ad-skip-button-text")[0]!==undefined){let skipBtn=document.getElementsByClassName("ytp-ad-text ytp-ad-skip-button-text")[0];skipBtn.click()}
        if(document.getElementsByClassName("ytp-ad-message-container")[0]!==undefined){let incomingAd=document.getElementsByClassName("ytp-ad-message-container")[0];incomingAd.style.display="none"}
        if(document.getElementsByClassName("style-scope ytd-companion-slot-renderer")[0]!==undefined){document.getElementsByClassName("style-scope ytd-companion-slot-renderer")[0].remove()}
        if(ad!==undefined){if(ad.children.length>0){if(document.querySelector(".ytp-ad-text[class*='ytp-ad-preview-text']")!==undefined)
        {vid.playbackRate=16;vid.muted=true;}}}if(document.getElementById("masthead-ad")!==null){let headerAd=document.getElementById("masthead-ad");headerAd.remove()}
        if(document.getElementsByTagName("ytd-ad-slot-renderer")[0]!==undefined){let rightSideAd=document.getElementsByTagName("ytd-ad-slot-renderer")[0];rightSideAd.remove()}
        if(document.getElementsByTagName("ytd-reel-shelf-renderer")[0]!==undefined){let rightSideShorts=document.getElementsByTagName("ytd-reel-shelf-renderer")[0];rightSideShorts.remove()}}
},100);
