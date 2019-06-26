var playlist={
  artistSong: "love in the air"
};

function updatePlaylist (playlist, artistName, songTitle){
  playlist.artistName= songTitle;
 return playlist;

}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
}
