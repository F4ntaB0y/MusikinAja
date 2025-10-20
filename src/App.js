import React, { useState } from 'react';

// Impor dari folder-folder yang sejajar dengan App.js
import { styles } from './styles/styles.js';
import { SONGS } from './data/mockData.js';
import BottomNavBar from './components/BottomNavBar.jsx';
import PlayerScreen from './screens/PlayerScreen.jsx';
import SongListScreen from './screens/SongListScreen.jsx';
import FriendsScreen from './screens/FriendsScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';

export default function App() {
  const [activePage, setActivePage] = useState('Player');
  const [currentSong, setCurrentSong] = useState(SONGS[0]);

  const handleSongSelect = (song) => {
      setCurrentSong(song);
      setActivePage('Player'); 
  };
  
  const handleNext = () => {
      const currentIndex = SONGS.findIndex(s => s.id === currentSong.id);
      const nextIndex = (currentIndex + 1) % SONGS.length;
      setCurrentSong(SONGS[nextIndex]);
  };

  const handlePrev = () => {
      const currentIndex = SONGS.findIndex(s => s.id === currentSong.id);
      const prevIndex = (currentIndex - 1 + SONGS.length) % SONGS.length;
      setCurrentSong(SONGS[prevIndex]);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'Player':
        return <PlayerScreen song={currentSong} onNext={handleNext} onPrev={handlePrev} />;
      case 'Lagu':
        return <SongListScreen onSongSelect={handleSongSelect} />;
      case 'Teman':
        return <FriendsScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return <PlayerScreen song={currentSong} onNext={handleNext} onPrev={handlePrev}/>;
    }
  };

  return (
    <div style={styles.container}>
      <main style={styles.content}>
        {renderPage()}
      </main>
      
      <footer>
        <BottomNavBar activePage={activePage} setActivePage={setActivePage} />
      </footer>
    </div>
  );
}