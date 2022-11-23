console.log("welcome to musica");

// initialize  the veriables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('R.gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "keshariya" , filePath:"song/1.mp3", coverpath:"OIP.jpg"},
    {songName: "keshariya" , filePath:"kesariya-tera-ishq-hai-piya.mp3", coverpath:"2.jpg"},
    {songName: "keshariya" , filePath:"LoveMeLikeYouDo.mp3", coverpath:"3.jpg"},
    {songName: "keshariya" , filePath:"song/1.mp3", coverpath:"4.jpg"},
    {songName: "keshariya" , filePath:"song/1.mp3", coverpath:"5.jpg"},
    {songName: "keshariya" , filePath:"song/1.mp3", coverpath:"6.jpg"},
    {songName: "keshariya" , filePath:"song/1.mp3", coverpath:"7.jpg"},
    {songName: "keshariya" , filePath:"song/1.mp3", coverpath:"8.jpg"},
    {songName: "keshariya" , filePath:"song/1.mp3", coverpath:"9.jpg"},
    {songName: "keshariya" , filePath:"song/1.mp3", coverpath:"10.jpg"},
]


//audioElement.play();

//handle pause/play button

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-regular fa-circle-play');
        masterPlay.classList.add('fa-regular fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-regular fa-circle-pause');
        masterPlay.classList.add('fa-regular fa-circle-play');
        gif.style.opacity = 0;
    }
})
// listen to event
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-regular fa-circle-pause');
        element.classList.add('fa-regular fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-regular fa-circle-play');
        e.target.classList.add('fa-regular fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-regular fa-circle-play');
        masterPlay.classList.add('fa-regular fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-regular fa-circle-play');
    masterPlay.classList.add('fa-regular fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-regular fa-circle-play');
    masterPlay.classList.add('fa-regular fa-circle-play');
})