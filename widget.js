(function (){
    var chatbotUrl = 'https://chatbot-2w3r.onrender.com/';

    function loadChatbot(){
        var iframe = document.createElement('iframe');
        iframe.src = chatbotUrl;
        iframe.styleSheets.width = '300px';
        iframe.style.height = '500px';
        document.body.appendChild(iframe);
    }

    window.onload = loadChatbot;
})();


/*
how to include in the actual website 
    <script src="the link"></script>
*/