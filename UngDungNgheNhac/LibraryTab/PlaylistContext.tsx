import React, { createContext, useContext, useState } from 'react';
import MusicPlaylist from '../Class/MusicPlayList';

const PlaylistContext = createContext();

export let playlistsData = [
    "Tạo Danh Sách Nhạc",
    new MusicPlaylist("Dia nhac so 1"),
    new MusicPlaylist("Dia nhac so 2"),
    new MusicPlaylist("Dia nhac so 3"),
];

export const PlaylistProvider = ({ children }) => {
    const [playlists, setPlaylists] = useState(playlistsData);

    const deletePlaylist = (playlistIndex) => {
        const updatedPlaylists = [...playlists];
        updatedPlaylists.splice(playlistIndex, 1);
        setPlaylists(updatedPlaylists);
    };

    return (
        <PlaylistContext.Provider value={{ playlists, setPlaylists, deletePlaylist}}>
            {children}
        </PlaylistContext.Provider>
    );
};

export const usePlaylists = () => {
    return useContext(PlaylistContext);
};
