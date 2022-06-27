let allMusic = [
    {
        name: "Joker (Feat. JAMIE)",
        artist : "BIG Naughty (서동현)",
        img: "joker.jpg",
        src: "Joker",
    },
    {
        name: "이혼서류",
        artist : "GIRIBOY",
        img: "giriboy.jpg",
        src: "giriboy",
    },
    {
        name: "언젠가 우리의 밤도 지나가겠죠",
        artist : "IZ*ONE",
        img: "izone.jpg",
        src: "izone",
    },
    {
        name: "Rose",
        artist : "이하이",
        img: "rose.jpg",
        src: "rose",
    },
    {
        name: "파티피플 (Feat. 염따, Kid)",
        artist : "GIRIBOY",
        img: "partypeople.jpg",
        src: "partypeople",
    },
    {
        name: "Misfits (Feat. MELOH, Kid Wine)",
        artist : "Skinny Brown",
        img: "skinny.jpg",
        src: "Misfios",
    },
    {
        name: "aenergy",
        artist : "aespa",
        img: "aespa.jpg",
        src: "aenergy",
    }
]

const wrapper = document.querySelector(".MusicArea");
musicImg = wrapper.querySelector(".imgArea img");
musicName = wrapper.querySelector(".songInfo .songName");
musicArtist = wrapper.querySelector(".songInfo .artist");
mainAudio = wrapper.querySelector("#main_audio");
playPauseBtn = wrapper.querySelector(".playPause");
prevBtn = wrapper.querySelector("#prev");
nextBtn = wrapper.querySelector("#next");
progressArea = wrapper.querySelector(".progressArea");
progressBar = wrapper.querySelector(".progressArea .progressBar");
musicList = wrapper.querySelector(".music-list");
showMoreBtn = wrapper.querySelector("#moreMusic");
hideMusicBtn = musicList.querySelector("#close");


let musicIndex = Math.floor((Math.random() * allMusic.length) +1);

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
    playingNow();
});

function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `img/${allMusic[indexNumb - 1].img}`;
    mainAudio.src = `music/${allMusic[indexNumb - 1].src}.mp3`;
};

function playMusic(){
    wrapper.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "pause";
    mainAudio.play();
};

function pauseMusic(){
    wrapper.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause();
};
function nextMusic(){
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex =1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingNow();
};
function prevMusic(){
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingNow();
};

playPauseBtn.addEventListener("click", ()=> {
    const isMusicPlay = wrapper.classList.contains("paused");
    isMusicPlay ? pauseMusic() : playMusic();
    playingNow();
});

nextBtn.addEventListener("click", ()=>{
    nextMusic();
});

prevBtn.addEventListener("click", ()=>{
    prevMusic();
});

mainAudio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration ) *100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = wrapper.querySelector(".current");
    musicDuration = wrapper.querySelector(".duration");

    mainAudio.addEventListener("loadeddata", ()=>{
        let audioDuration = mainAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10){
            totalSec = `0${totalSec}`;
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`;
    });
    // 시작시간
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10){
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

progressArea.addEventListener("click", (e)=>{
    let progressWidthval = progressArea.clientWidth;
    let clickedOffSetX = e.offsetX;
    let songDuration = mainAudio.duration;

    mainAudio.currentTime = (clickedOffSetX / progressWidthval) * songDuration;
    playMusic();
})

const repeatBtn = wrapper.querySelector("#repeat-plist");
repeatBtn.addEventListener("click", ()=>{
    let getText = repeatBtn.innerText;
    switch(getText){
        case "repeat":
            repeatBtn.innerText = "repeat_one";
            repeatBtn.setAttribute("title", "Song looped");
            break;
        case "repeat_one":
            repeatBtn.innerText = "shuffle";
            repeatBtn.setAttribute("title", "Playback shuffle");
            break;
        case "shuffle":
            repeatBtn.innerText = "repeat";
            repeatBtn.setAttribute("title", "Playlist looped");
            playingNow();
            break;
    }
});


mainAudio.addEventListener("ended", ()=>{
    let getText = repeatBtn.innerText;
    switch(getText){
        case "repeat":
            nextMusic();
            break;
        case "repeat_one":
            mainAudio.currentTime = 0;
            loadMusic(musicIndex);
            playMusic();
            break;
        case "shuffle":
            let randIndex = Math.floor((Math.random() * allMusic.length) +1);
            do{
                randIndex = Math.floor((Math.random() * allMusic.length) +1);
            }while(musicIndex == randIndex);
            musicIndex = randIndex;
            loadMusic(musicIndex);
            playMusic();
            break;
    }
});


/* 뮤직리스트 */
showMoreBtn.addEventListener("click", ()=>{
    musicList.classList.toggle("show");
});
hideMusicBtn.addEventListener("click", ()=>{
    showMoreBtn.click();
});

const ulTag = wrapper.querySelector("ul");

for (let i = 0; i < allMusic.length; i++){
    let liTag = `<li li-index = "${i + 1}">
                    <div class="listRow">
                        <span>${allMusic[i].name}</span>
                        <p>${allMusic[i].artist}</p>
                    </div>
                    <audio class="${allMusic[i].src}" src="music/${allMusic[i].src}.mp3"></audio>
                    <span id="${allMusic[i].src}" class="audio-duration">02:28</span>
                </li>`;
    ulTag.insertAdjacentHTML("beforeend", liTag);

    let liAudioDuaration = ulTag.querySelector(`#${allMusic[i].src}`);
    let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);

    liAudioTag.addEventListener("loadeddata", ()=>{
        let audioDuration = liAudioTag.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10){
            totalSec = `0${totalSec}`;
        }
        liAudioDuaration.innerText = `${totalMin}:${totalSec}`;
        liAudioDuaration.setAttribute("t-duration", `${totalMin}:${totalSec}`);
    });
}

//리스트 노래연결
const allLiTags = ulTag.querySelectorAll("li");
function playingNow(){
    for(let j = 0; j < allLiTags.length; j++){
        let audioTag = allLiTags[j].querySelector(".audio-duration");
        if(allLiTags[j].classList.contains("playing")){
            allLiTags[j].classList.remove("playing");
            let adDuration = audioTag.getAttribute("t-duration");
            audioTag.innerText = adDuration;
        }
        if(allLiTags[j].getAttribute("li-index") == musicIndex ){
            allLiTags[j].classList.add("playing");
            audioTag.innerText = "재생중";
        }
        allLiTags[j].setAttribute("onclick","clicked(this)");
    }
}

function clicked(element){
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex;
    loadMusic(musicIndex);
    playMusic();
    playingNow();
}