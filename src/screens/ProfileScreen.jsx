import React from 'react';
import { styles } from '../styles/styles.js'; // Path: ../ (keluar dari screens)
import { USER_PROFILE } from '../data/mockData.js'; // Path: ../ (keluar dari screens)

const ProfileScreen = () => (
    <div style={styles.pageContainer}>
        <img src={USER_PROFILE.avatarUrl} style={styles.profileAvatar} alt="user avatar"/>
        <h1 style={styles.profileName}>{USER_PROFILE.name}</h1>
        <div style={styles.profileStatsContainer}>
            <div style={styles.profileStatItem}>
                <p style={styles.profileStatValue}>{USER_PROFILE.playlists}</p>
                <p style={styles.profileStatLabel}>Playlist</p>
            </div>
             <div style={styles.profileStatItem}>
                <p style={styles.profileStatValue}>{USER_PROFILE.followers}</p>
                <p style={styles.profileStatLabel}>Pengikut</p>
            </div>
        </div>
        <button style={styles.editProfileButton}>
            <span style={styles.editProfileButtonText}>Edit Profil</span>
        </button>
    </div>
);

export default ProfileScreen;