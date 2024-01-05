interface Song {
    title : string;
    artist : string
}

interface Video {
    title  :string;
    crator : string;
    resolution : string
}

class VideoPlaylist {
    public videos : Video[]
}

class SongPlaylist {
    public Songs : Song[]
}

// just like function we can add Generic to classes as well //

class Playlist<T>{
    public queue : T[] = [];
    add(ele : T){
        this.queue.push(ele)
    }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();
videos.add({title  :"string",
crator : "string",
resolution : "string"});