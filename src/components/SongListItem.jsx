import React from 'react';
import { styles } from '../styles/styles.js'; // Path: ../ (keluar dari components) lalu ke styles/

const SongListItem = ({ song, onPress }) => (
  <div style={styles.songItemContainer} onClick={() => onPress(song)}>
    <img src={song.albumArtUrl} style={styles.songItemImage} alt="album art"/>
    <div style={styles.songItemInfo}>
      <p style={styles.songItemTitle}>{song.title}</p>
      <p style={styles.songItemArtist}>{song.artist}</p>
    </div>
    <p style={styles.songItemDuration}>{song.duration}</p>
  </div>
);

export default SongListItem;