const colors = {
    background: '#121212',
    primary: '#1DB954',
    card: '#1e1e1e',
    textPrimary: '#FFFFFF',
    textSecondary: '#b3b3b3',
    border: '#282828',
};

// Objek styles diekspor untuk digunakan di komponen lain
export const styles = {
  // Tata letak global
  container: { 
    display: 'flex', 
    flexDirection: 'column', 
    height: '100vh', 
    backgroundColor: colors.background, 
    fontFamily: 'sans-serif',
    color: colors.textPrimary,
  },
  content: { 
    flex: 1, 
    display: 'flex', 
    flexDirection: 'column', 
    overflow: 'hidden', 
    paddingBottom: '70px' // Memberi ruang agar tidak tertutup nav bar
  },
  pageContainer: { 
    flex: 1, 
    padding: 20, 
    display: 'flex', 
    flexDirection: 'column', 
    overflowY: 'auto' 
  },
  pageTitle: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: colors.textPrimary, 
    marginBottom: 20, 
    margin: 0 
  },

  // Layar Player
  playerContainer: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20, textAlign: 'center' },
  playerAlbumArt: { width: 300, height: 300, borderRadius: 15, marginBottom: 20, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
  playerTitle: { fontSize: 24, fontWeight: 'bold', color: colors.textPrimary, margin: '10px 0 5px 0' },
  playerArtist: { fontSize: 18, color: colors.textSecondary, marginBottom: 20, margin: 0 },
  progressContainer: { width: '100%', maxWidth: 400, height: 5, backgroundColor: '#404040', borderRadius: 5, marginTop: 10 },
  progressBar: { height: '100%', backgroundColor: colors.primary, borderRadius: 5 },
  progressLabels: { width: '100%', maxWidth: 400, display: 'flex', justifyContent: 'space-between', marginTop: 5 },
  progressText: { color: colors.textSecondary, fontSize: 12 },
  playerControls: { display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '80%', maxWidth: 300, marginTop: 30 },
  playerButton: { backgroundColor: 'transparent', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' },

  // Komponen Item Lagu
  songItemContainer: { display: 'flex', padding: '10px 0', alignItems: 'center', borderBottom: `1px solid ${colors.border}`, cursor: 'pointer' },
  songItemImage: { width: 50, height: 50, borderRadius: 5, marginRight: 15 },
  songItemInfo: { flex: 1 },
  songItemTitle: { fontSize: 16, color: colors.textPrimary, fontWeight: '500', margin: 0 },
  songItemArtist: { fontSize: 14, color: colors.textSecondary, margin: 0 },
  songItemDuration: { fontSize: 14, color: colors.textSecondary },

  // Komponen Item Teman
  friendItemContainer: { display: 'flex', padding: 10, backgroundColor: colors.card, borderRadius: 10, marginBottom: 10, alignItems: 'center' },
  friendItemAvatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  friendItemInfo: { flex: 1 },
  friendItemName: { fontSize: 16, fontWeight: 'bold', color: colors.textPrimary, margin: 0 },
  friendItemListening: { fontSize: 14, color: colors.textSecondary, margin: 0 },

  // Layar Profil
  profileAvatar: { width: 120, height: 120, borderRadius: 60, alignSelf: 'center', marginBottom: 20 },
  profileName: { fontSize: 26, fontWeight: 'bold', color: colors.textPrimary, textAlign: 'center', marginBottom: 20, margin: 0 },
  profileStatsContainer: { display: 'flex', justifyContent: 'space-around', width: '100%', marginBottom: 30 },
  profileStatItem: { textAlign: 'center' },
  profileStatValue: { fontSize: 20, fontWeight: 'bold', color: colors.textPrimary, margin: 0 },
  profileStatLabel: { fontSize: 14, color: colors.textSecondary, margin: 0 },
  editProfileButton: { backgroundColor: 'transparent', borderColor: colors.primary, borderWidth: 1, borderStyle: 'solid', padding: '12px 30px', borderRadius: 25, alignSelf: 'center', cursor: 'pointer' },
  editProfileButtonText: { color: colors.primary, fontSize: 16, fontWeight: 'bold' },

  // Navigasi Bawah
  navBarContainer: { display: 'flex', height: 70, backgroundColor: '#181818', borderTop: `1px solid ${colors.border}`, position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100 },
  navItem: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' },
  navIcon: { width: 24, height: 24, marginBottom: 4 },
  navText: { fontSize: 10, margin: 0 },
};