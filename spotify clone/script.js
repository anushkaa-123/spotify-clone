console.log("javascript is running successfully")

const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".card");
searchInput.addEventListener("input",function() {
    const searchText = searchInput.value.toLowerCase();
    cards.forEach(function(card){
        const cardText = card.innerText.toLowerCase();
        if (cardText.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    })
})

const musicPlayer = document.getElementById("musicPlayer");

const playerImage = document.getElementById("playerImage");
const playerSong = document.getElementById("playerSong");
const playerArtist = document.getElementById("playerArtist");

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        const image = card.querySelector("img");
        const songName = card.querySelector("h4");
        const artistName = card.querySelector("p");

        playerImage.src = image.src;
        playerSong.innerText = songName.innerText;
        playerArtist.innerText = artistName.innerText;
        musicPlayer.style.display = "flex";
    });
});

const likeBtn = document.getElementById("likeBtn");

let liked = false;

likeBtn.addEventListener("click", function () {

    if (liked === false) {

        liked = true;
        likeBtn.innerText = "♥";
        likeBtn.classList.add("liked");

    } else {

        liked = false;
        likeBtn.innerText = "♡";
        likeBtn.classList.remove("liked");

    }

});

const createBtn = document.querySelector(".create_btn");
const playlistPopup = document.getElementById("playlistPopup");
const playlistName = document.getElementById("playlistName");
const cancelBtn = document.getElementById("cancelBtn");
const createPlaylistBtn = document.getElementById("createPlaylistBtn");

createBtn.addEventListener("click", function() {
    playlistPopup.style.display = "flex";
    playlistName.focus();
});

cancelBtn.addEventListener("click", function() {
    playlistPopup.style.display = "none";
});

createPlaylistBtn.addEventListener("click", function() {
    const name = playlistName.value.trim();
    if (name === "") {
        alert("Please enter a playlist name.");
        return;
    }

    const playlist = document.createElement("div");

playlist.classList.add("my_playlist");

const playlistText = document.createElement("span");

playlistText.innerText = name;

const deleteBtn = document.createElement("button");

deleteBtn.innerText = "✕";

playlist.appendChild(playlistText);

playlist.appendChild(deleteBtn);

deleteBtn.addEventListener("click", function() {
    playlist.remove();
});

document.querySelector(".library").appendChild(playlist);
    playlistName.value = "";
    playlistPopup.style.display = "none";
});

const closePlayerBtn = document.getElementById("closePlayerBtn");

closePlayerBtn.addEventListener("click", function() {
    musicPlayer.style.display = "none";
});

const loginBtn = document.querySelector(".login_btn");
const loginPopup = document.getElementById("loginPopup");
const closeLogin = document.getElementById("closeLogin");
const submitLogin = document.getElementById("submitLogin");

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginMessage = document.getElementById("loginMessage");


loginBtn.addEventListener("click", function() {
    loginPopup.style.display = "flex";
});


closeLogin.addEventListener("click", function() {
    loginPopup.style.display = "none";
});


submitLogin.addEventListener("click", function() {

    if (email.value === "" || password.value === "") {

        loginMessage.innerText = "Please fill all fields";

    } else {

        loginMessage.innerText = "Login successful!";
        
    }

});