function toggleClass() {
    if(document.querySelector('body').classList.contains('distractionFree')) {
        document.querySelector('body').classList.remove('distractionFree');
        document.getElementById('toggleChat').innerHTML = '<b>Hide</b> Facebook';
    } else {
        document.querySelector('body').classList.add('distractionFree');
        document.getElementById('toggleChat').innerHTML = '<b>Show</b> Facebook';
    }
}

chrome.runtime.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            var nubContainer = document.getElementsByClassName('rNubContainer');
            var toggleChatDiv = document.createElement('div');

            toggleChatDiv.setAttribute('class','uiToggle _50-v fbNub _4up toggleChat');
            toggleChatDiv.setAttribute('id', 'toggleChat');
            toggleChatDiv.innerHTML = '<b>Hide</b> Facebook';

            nubContainer[0].appendChild(toggleChatDiv);

            document.getElementById('toggleChat').onclick = toggleClass;
        }
    }, 10);
});
