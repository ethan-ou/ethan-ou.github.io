window.onload = function() {
	setTimeout(function() {
        // preload image
        var xhr = new XMLHttpRequest();
		xhr.open('GET', './icons/webfonts/fa-solid-900.woff2');
		xhr.send('');

        new Image().src = "./icons/svg/chat-bold.svg";
        new Image().src = "./icons/svg/chat-bold-night.svg";
        new Image().src = "./icons/svg/conversation-bold.svg";
        new Image().src = "./icons/svg/conversation-bold-night.svg";
        new Image().src = "./icons/svg/categories/dance.svg";
        new Image().src = "./icons/svg/categories/neptune.svg";
        new Image().src = "./icons/svg/categories/park.svg";
        new Image().src = "./icons/svg/categories/snuggle.svg";
        new Image().src = "./icons/svg/categories/night/dance.svg";
        new Image().src = "./icons/svg/categories/night/neptune.svg";
        new Image().src = "./icons/svg/categories/night/park.svg";
        new Image().src = "./icons/svg/categories/night/snuggle.svg";
    }, 1000);
    console.log("loaded");
};