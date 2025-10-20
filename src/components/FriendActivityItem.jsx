import React from 'react';
import { styles } from '../styles/styles.js'; // Path: ../ (keluar dari components) lalu ke styles/

const FriendActivityItem = ({ friend }) => (
    <div style={styles.friendItemContainer}>
        <img src={friend.avatarUrl} style={styles.friendItemAvatar} alt="friend avatar"/>
        <div style={styles.friendItemInfo}>
            <p style={styles.friendItemName}>{friend.name}</p>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={'https://img.icons8.com/ios-glyphs/30/1DB954/musical-notes.png'} style={{width: 14, height: 14, marginRight: 5}} alt="listening icon"/>
                <p style={styles.friendItemListening}>{friend.listeningTo}</p>
            </div>
        </div>
    </div>
);

export default FriendActivityItem;