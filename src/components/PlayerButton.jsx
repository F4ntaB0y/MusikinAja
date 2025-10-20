import React from 'react';
import { styles } from '../styles/styles.js'; // Path ini relatif: ../ (keluar dari components) lalu ke styles/

const PlayerButton = ({ icon, onPress, size = 60 }) => (
  <button onClick={onPress} style={{...styles.playerButton, width: size, height: size, borderRadius: size / 2 }}>
    <img src={icon} style={{ width: size * 0.4, height: size * 0.4, filter: 'brightness(0) invert(1)' }} alt="player control"/>
  </button>
);

export default PlayerButton;