import React, { useState, useEffect } from 'react';
import { styles } from '../styles/styles.js'; // Path: ../ (keluar dari screens) lalu ke styles/
import PlayerButton from '../components/PlayerButton.jsx'; // Path: ../ (keluar dari screens) lalu ke components/

const PlayerScreen = ({ song, onNext, onPrev }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(0);
        if (song) {
            const interval = setInterval(() => {
                setProgress(oldProgress => {
                    if (oldProgress >= 100) { clearInterval(interval); return 100; }
                    return oldProgress + 0.5; 
                });
            }, 100);
            return () => clearInterval(interval);
        }
    }, [song]);

    if (!song) {
        return (
            <div style={styles.pageContainer}>
                <h1 style={styles.pageTitle}>Pilih Lagu</h1>
                <p style={{color: '#b3b3b3', textAlign: 'center'}}>Pilih sebuah lagu dari daftar untuk mulai mendengarkan.</p>
            </div>
        );
    }

    return (
        <div style={styles.playerContainer}>
            <img src={song.albumArtUrl} style={styles.playerAlbumArt} alt="album art" />
            <h1 style={styles.playerTitle}>{song.title}</h1>
            <p style={styles.playerArtist}>{song.artist}</p>
            <div style={styles.progressContainer}><div style={{...styles.progressBar, width: `${progress}%` }} /></div>
            <div style={styles.progressLabels}>
                <span style={styles.progressText}>0:00</span>
                <span style={styles.progressText}>{song.duration}</span>
            </div>
            <div style={styles.playerControls}>
                <PlayerButton icon="https://img.icons8.com/ios-glyphs/90/ffffff/previous.png" onPress={onPrev} />
                <PlayerButton icon="https://img.icons8.com/ios-glyphs/90/ffffff/play--v1.png" size={80} onPress={() => {}} />
                <PlayerButton icon="https://img.icons8.com/ios-glyphs/90/ffffff/next.png" onPress={onNext} />
            </div>
        </div>
    );
};

export default PlayerScreen;