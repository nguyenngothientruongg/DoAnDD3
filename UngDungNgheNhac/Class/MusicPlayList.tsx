import Music from "./Music";
export default class MusicPlaylist {
    constructor(name) {
        this.name = name;
        this.playlist = [];
    }

    getMusic(){
        return this.playlist;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    addMusic(title, artist, duration, image) {
        const newMusic = new Music(title, artist, duration, image);
        this.playlist.push(newMusic);
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