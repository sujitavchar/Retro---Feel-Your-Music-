
document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to soptijg");
    //variables
    let songIndex = 0;
    let audioElement = new Audio('songs/theme.mp3');
    let masterplay = document.getElementById('masterPlay');
    let myProgressBar = document.getElementById('progressbar');
    let gif = document.getElementById('gif');
    let masterSongName = document.getElementById('masterSongName');

    let songitems = Array.from(document.getElementsByClassName('songItem'));

    let songs = [
        { songName: "rss", filePath: "songs/rss.mp3", coverPath: "covers/1.jpg", coverPath: "components/Screenshot_1.png" },
        { songName: "shaabashiyaan", filePath: "songs/shaabashiyaan.m4a", coverPath: "components/Screenshot_2.png" },
        { songName: "Theme of shiv", filePath: "songs/theme.mp3", coverPath: "components/Screenshot_3.png" },
        { songName: "unity", filePath: "songs/unity.m4a", coverPath: "components/Screenshot_4.png" },
        { songName: "vardaan", filePath: "songs/vardaan.mp3", coverPath: "components/Screenshot_5.png" },
        { songName: " Shayad - Love Aaj Kal.mp3", filePath: "songs/ Shayad - Love Aaj Kal.mp3", coverPath: "components/Screenshot_6.png" },
        { songName: "01 Tere Liye - Namaste England", filePath: "songs/01 Tere Liye - Namaste England.mp3", coverPath: "components/Screenshot_7.png" },
        { songName: "01. Teri Jhuki Nazar", filePath: "songs/01. Teri Jhuki Nazar.mp3", coverPath: "components/Screenshot_8.png" },
        { songName: "Tujhe Kitna Chahne Lage", filePath: "songs/Tujhe Kitna Chahne Lage.mp3", coverPath: "components/Screenshot_1.png" },
        { songName: "02 Pal - Jalebi - Arijit Singh.mp3", filePath: "songs/02 Pal - Jalebi - Arijit Singh", coverPath: "components/Screenshot_2.png" },
        { songName: "03 Thodi Der - Half Girlfriend.mp3", filePath: "songs/03 Thodi Der - Half Girlfriend.mp3", coverPath: "components/Screenshot_6.png" },
        { songName: "tu_chale.mp3", filePath: "songs/tu_chale.mp3", coverPath: "components/Screenshot_4.png" },
        { songName: "Wafa Ne Bewafai - Tera Suroor.mp3", filePath: "songs/Wafa Ne Bewafai - Tera Suroor.mp3", coverPath: "components/Screenshot_3.png" },
        { songName: "cradles-by-sub-urban-instrumental.mp3", filePath: "songs/cradles-by-sub-urban-instrumental.mp3", coverPath: "components/Screenshot_7.png" },
        { songName: "Kaun Tujhe Ms Dhoni Ringtone.mp3", filePath: "songs/Kaun Tujhe Ms Dhoni Ringtone.mp3", coverPath: "components/Screenshot_8.png" },
        { songName: "Mere Rashke Qamar - Rahat Fateh.mp3", filePath: "songs/Mere Rashke Qamar - Rahat Fateh.mp3", coverPath: "components/Screenshot_1.png" },
        { songName: " Shayad - Love Aaj Kal.mp3", filePath: "songs/ Shayad - Love Aaj Kal.mp3.mp3", coverPath: "components/Screenshot_5.png" },
        { songName: "02 Nazm Nazm - Bareilly Ki Barfi (Arko) 320Kbps", filePath: "songs/02 Nazm Nazm - Bareilly Ki Barfi (Arko) 320Kbps.mp3", coverPath: "components/Screenshot_2.png" },
    ]

    songitems.forEach((element, i) => {
        console.log(element, i);
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    })

    //handle item playing

    masterplay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
            gif.style.opacity = 1;
        }
        else {
            audioElement.pause();
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
            gif.style.opacity = 0;
        }
    })

    //Listen to events
    audioElement.addEventListener('timeupdate', () => {
        console.log('timeupdate');
        //update progress bar
        progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        myProgressBar.value = progress
    })



    myProgressBar.addEventListener('change', () => {
        audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
    })


    const makeAllPlay = () => {
        Array.from(document.getElementsByClassName('songitemplayicon')).forEach((element) => {
            element.classList.add('fa-play');
            element.classList.remove('fa-pause');
        })
    }
    Array.from(document.getElementsByClassName('songitemplayicon')).forEach((element) => {
        element.addEventListener('click', (e) => {
            makeAllPlay();
            songIndex = parseInt(e.target.id);
            gif.style.opacity=1;
            masterSongName.innerText=songs[songIndex].songName;
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause')
            audioElement.src = songs[songIndex].filePath;
            audioElement.currentTime = 0;
            audioElement.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');

        })
    })

    document.getElementById('next').addEventListener('click',()=>{
        if (songIndex>=9){
            songIndex=0;
        }
        else{
            songIndex+=1;
        }
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');

    })
    document.getElementById('previous').addEventListener('click',()=>{
        if (songIndex<=0){
            songIndex=0;
        }
        else{
            songIndex-=1;
        }
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');

    })

});