import React from 'react';
import { styles } from '../styles/styles.js'; // Path: ../ (keluar dari components) lalu ke styles/

const BottomNavBar = ({ activePage, setActivePage }) => {
    const navItems = [
        { name: 'Player', icon: 'https://img.icons8.com/fluency-systems-filled/96/musical-notes.png' },
        { name: 'Lagu', icon: 'https://img.icons8.com/fluency-systems-filled/96/music-library.png' },
        { name: 'Teman', icon: 'https://img.icons8.com/fluency-systems-filled/96/conference-call.png' },
        { name: 'Profile', icon: 'https://img.icons8.com/fluency-systems-filled/96/user-male-circle.png' },
    ];

    return (
        <nav style={styles.navBarContainer}>
            {navItems.map(item => (
                <div key={item.name} style={styles.navItem} onClick={() => setActivePage(item.name)}>
                    <img
                        src={item.icon}
                        style={{
                            ...styles.navIcon,
                            filter: activePage === item.name
                                ? 'invert(58%) sepia(86%) saturate(666%) hue-rotate(95deg) brightness(95%) contrast(90%)' 
                                : 'invert(75%) sepia(0%) saturate(222%) hue-rotate(200deg) brightness(90%) contrast(89%)' 
                        }}
                        alt={`${item.name} icon`}
                    />
                    <p style={{...styles.navText, color: activePage === item.name ? '#1DB954' : '#b3b3b3' }}>{item.name}</p>
                </div>
            ))}
        </nav>
    );
};

export default BottomNavBar;