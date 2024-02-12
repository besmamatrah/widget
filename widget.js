(function () {
    var chatbotUrl = 'https://chatbot-2w3r.onrender.com/';

    function loadChatbot() {
        var iframe = document.createElement('iframe');
        iframe.src = chatbotUrl;
        iframe.style.width = '300px'; // Corrected property name
        iframe.style.height = '500px';
        document.body.appendChild(iframe);
    }

    // Ensure the chatbot loads when the window is fully loaded
    window.onload = loadChatbot;
})();
