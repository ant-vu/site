import React, { createContext, useState, useContext, useMemo} from 'react';

const MusicContext = createContext();

export const useMusicContext = () => useContext(MusicContext);

export function MusicProvider({ children }) {
  const songs = [
    { 
      file: 'love.mp3', 
      title: 'love.', 
      artist: 'Wave to Earth', 
      albumArt: 'love.jpg',
      spotify: "https://open.spotify.com/track/5rDXfGMWI6S8wkXR0MHsvv"
    },
    { 
      file: 'piledriver_waltz.mp3', 
      title: 'Piledriver Waltz', 
      artist: 'Alex Turner', 
      albumArt: 'piledriver_waltz.jpg' ,
      spotify: "https://open.spotify.com/track/3s5ogvexUgA6XjNj37zpnP"
    },
    {
      file: 'Add_Up_My_Love.mp3',
      title: 'Add Up My Love',
      artist: 'Clairo',
      albumArt: 'add_up_my_love.png',
      spotify: "https://open.spotify.com/track/6FcDxtnGfsYHOcGkXN2OIG"
    },
    {
      file: 'I_Wouldnt_Treat_A_Dog.mp3',
      title: 'I Wouldn\'t Treat A Dog  (The Way You Treated Me)',
      artist: 'Bobby "Blue" Bland',
      albumArt: 'I_Wouldnt_Treat_A_Dog.jpg',
      spotify: "https://open.spotify.com/track/0KVBOePJfYse4RLo6koXTY"
    },
    {
      file : 'uhaw.mp3',
      title : 'Uhaw (Tayong Lahat)',
      artist : 'Dilaw',
      albumArt : 'Uhaw.jpg',
      spotify : "https://open.spotify.com/track/47OFMuRu5lzJHRbtEXPBbs"
    }
  ];

  // Select a random initial index when the context is created
  const initialRandomIndex = useMemo(() => Math.floor(Math.random() * songs.length), []);

  const [currentSongIndex, setCurrentSongIndex] = useState(initialRandomIndex);

  const currentSong = songs[currentSongIndex];

  const value = {
    songs,
    currentSong,
    currentSongIndex,
    setCurrentSongIndex,
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
}
