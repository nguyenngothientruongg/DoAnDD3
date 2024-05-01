import Music from "./Music";
export default class MusicPlaylist {
    constructor(name) {
        this.name = name;
        this.playlist = [];
    }

    addMusic(title, artist, duration, image) {
        const newMusic = new Music(title, artist, duration, image);
        this.playlist.push(newMusic);
    }

    editMusic(index, title, artist, duration, image) {
        const music = this.playlist[index];
        music.title = title;
        music.artist = artist;
        music.duration = duration;
        music.image = image;
    }

    removeMusic(index) {
        this.playlist.splice(index, 1);
    }

    playMusic(index) {
        this.playlist[index].play();
    }

    pauseMusic(index) {
        this.playlist[index].pause();
    }

    stopMusic(index) {
        this.playlist[index].stop();
    }
}