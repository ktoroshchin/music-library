var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}
//
// // FUNCTIONS TO IMPLEMENT:
//
// // prints a list of all playlists, in the form:
// // p01: Coding Music - 2 tracks
// // p02: Other Playlist - 1 tracks
// var printTrack = function (trackId)
// {
//   var trackName = library.tracks[trackId].name
//   var singerName = library.tracks[trackId].artist
//   var albumName = library.tracks[trackId].album
//   console.log(trackName+singerName+albumName);
// }
//
//
// // prints a list of tracks for a given playlist, in the form:
// // p01: Coding Music - 2 tracks
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
//
//
// var printPlaylist = function (playlistId)
// {
//     // print playlist info
//     var lineOne = library.playlists[playlistId].name
//     console.log(library.playlists[playlistId].tracks.length)
//     console.log(lineOne);
//
//     for (var trackId of library.playlists[playlistId].tracks) {
//       // print track info
//       printTrack(trackId);
//     }
// }
// printPlaylist("p01");
//
//
//
// // adds an existing track to an existing playlist
//
// var addTrackToPlaylist = function (trackId, playlistId) {
//    var track = library.tracks[trackId].id
//    var playList = library.playlists[playlistId].tracks
//    playList.push(track);
// return trackId;
// };
// addTrackToPlaylist("t03", "p01")


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var newTrack = {};
  newTrack.id = uid()
  newTrack.name = name
  newTrack.artist = artist
  newTrack.album = album
  library.tracks[newTrack.id] = newTrack;
}
addTrack("Montreal Song", "Konstantin", "Forest songs" )
console.log(library);


// }
//
//
// adds a playlist to the library

var addPlaylist = function (name) {

  var newPlaylist = {}
  newPlaylist.id = uid()
  newPlaylist.name = name
  newPlaylist.tracks = "t22"
  library.playlists[newPlaylist.id] = newPlaylist;
}
addPlaylist("Kosinus")
console.log(library)
//
//
// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
//
// var printSearchResults = function(query) {
//
// }
