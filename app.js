const btn = document.getElementById("emoji-btn");

// Emoji Array
const emojis = [
    "😁", "😂", "🙂", "🙃", "😉", "🥰", "😇", "😍", 
    "🤩", "😘", "😗", "😚", "😋", "🤑", "🤗", "🤨", 
    "🤭", "🤫", "🤐", "😐", "😡", "😑", "😶‍🌫️", "🙄",
    "👿","😠","😩","😣","😞",  
];

// Function
btn.addEventListener("mouseover", () => {
    btn.innerText = emojis[Math.floor(Math.random() * emojis.length)];

});
