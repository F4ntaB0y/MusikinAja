import React from 'react';
import { styles } from '../styles/styles.js'; // Path: ../ (keluar dari screens)
import { FRIENDS_ACTIVITY } from '../data/mockData.js'; // Path: ../ (keluar dari screens)
import FriendActivityItem from '../components/FriendActivityItem.jsx'; // Path: ../ (keluar dari screens)

const FriendsScreen = () => (
    <div style={styles.pageContainer}>
        <h1 style={styles.pageTitle}>Aktivitas Teman</h1>
        <div>
            {FRIENDS_ACTIVITY.map(friend => (
                <FriendActivityItem key={friend.id} friend={friend} />
            ))}
        </div>
    </div>
);

export default FriendsScreen;