let btn = document.getElementById("btn");
let content = document.getElementById("content");
let voice = document.getElementById("voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    }
    else if (hours >= 12 && hours < 18) {
        speak("Good Afternoon Sir");
    }
    else {
        speak("Good Evening Sir");
    }
}

btn.addEventListener("click", () => {
    btn.style.display = 'none';
    voice.style.display = 'block';
    recognition.start();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript);
};

function takeCommand(message) {
    btn.style.display = 'flex';
    voice.style.display = 'none';
    message = message.toLowerCase();
    if (message.includes("hello") || message.includes("hi") ||
        message.includes("hey") || message.includes("hi sitara") || message.includes("hello sitara")) {
        {
            speak("Hello Sir, How can I help you?");
        }
    }
    else if (message.includes("what is your name") || message.includes("who are you")) {
        speak("I am Sitara, your personal virtual assistant created by Aajay Aarumugam");
    }
    else if (message.includes("good morning")) {
        wishMe() + speak("How can I Help You Today ?")
    }
    else if (message.includes("good afternoon")) {
        wishMe() + speak("How can I Help You Today ?")
    }
    else if (message.includes("good evening")) {
        wishMe() + speak("How can I Help You Today ?")
    }
    else if (message.includes("how are you") || message.includes("how are you doing")) {
        speak("I am fine Sir, Thank you for asking, How can I help you?");
    }
    else if (message.includes("what can you do") || message.includes("what are your capabilities")) {
        speak("I can help you with various tasks such as searching the web, telling the time and date, opening websites, and much more.Just ask me anything!");
    }
    else if (message.includes("what is the time") || message.includes("tell me the time")) {
        let date = new Date();
        let time = date.toLocaleTimeString();
        speak(`The current time is ${time}`);
    }
    else if (message.includes("what is the today date") || message.includes("tell me the date")) {
        let date = new Date();
        let todayDate = date.toLocaleDateString();
        speak(`Today's date is ${todayDate}`);
    }
    else if (message.includes("day") || message.includes("what is the day today")) {
        let date = new Date();
        let options = { weekday: 'long' };
        let day = date.toLocaleDateString('en-US', options);
        speak(`Today is ${day}`);
    }
    else if (message.includes("open notepad")) {
        speak("Sure sir , Opening Notepad");
        window.open("Notepad://");
    }
    else if (message.includes("open visual studio code") || message.includes("open vs code")) {
        speak("Sure sir , Opening Visual Studio Code");
        window.open("https://vscode.dev", "_blank");
    }
    else if (message.includes("open command prompt") || message.includes("open cmd")) {
        speak("Sure sir , Opening Command Prompt");
        window.open("cmd://");
    }
    else if (message.includes("open settings")) {
        speak("Sure sir , Opening Settings");
        window.open("Settings://");
    }
    else if (message.includes("open file explorer") || message.includes("open my computer")) {
        speak("Sure sir , Opening File Explorer");
        window.open("FileExplorer://");
    }
    else if (message.includes("open google") || message.includes("search on google")) {
        speak("Sure sir , Opening Google");
        window.open("https://www.google.com", "_blank");
    }
    else if (message.includes("open youtube") || message.includes("open the youtube")) {
        speak("Sure sir , Opening Youtube");
        window.open("https://www.youtube.com", "_blank");
    }
    else if (message.includes("open facebook") || message.includes("open the facebook")) {
        speak("Sure sir , Opening facebook");
        window.open("https://www.facebook.com", "_blank");
    }
    else if (message.includes("open twitter") || message.includes("open the twitter")) {
        speak("Sure sir , Opening twitter");
        window.open("https://www.twitter.com", "_blank");
    }
    else if (message.includes("open instagram") || message.includes("open the instagram")) {
        speak("Sure sir , Opening instagram");
        window.open("https://www.instagram.com", "_blank");
    }
    else if (message.includes("open calculator") || message.includes("open the calculator")) {
        speak("Sure sir , Opening calculator");
        window.open("Calculator://");
    }
    else if (message.includes("thank you") || message.includes("thanks")) {
        speak("You are welcome Sir, if you need any help , I am here to help you");
    }
    else if (message.includes("goodbye") || message.includes("bye")) {
        speak("Goodbye Sir, have a nice day");
        window.close();
    }
    else if (message.includes("open whatsapp") || message.includes("open the whatsapp")) {
        speak("Sure sir , Opening WhatsApp");
        window.open("https://web.whatsapp.com", "_blank");
    }
    else if (message.includes("open gmail") || message.includes("open the gmail")) {
        speak("Sure sir , Opening Gmail");
        window.open("https://mail.google.com", "_blank");
    }
    else if (message.includes("open linkedin") || message.includes("open the linkedin")) {
        speak("Sure sir , Opening LinkedIn");
        window.open("https://www.linkedin.com", "_blank");
    }
    else if (message.includes("open spotify") || message.includes("open the spotify")) {
        speak("Sure sir , Opening Spotify");
        window.open("https://www.spotify.com", "_blank");
    }
    else if (message.includes("play music") || message.includes("play some music") || message.includes("play a song")) {
        speak("Playing music for you");
        window.open("https://www.youtube.com/results?search_query=music", "_blank");
    }
    else {
        let finalText = "this is what i found on internet regarding" + message.replace("sitara", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("sitara", "")}`, "_blank");
    }
}