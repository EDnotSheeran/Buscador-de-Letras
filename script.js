// https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search
// https://api.lyrics.ovh/v1/artist/title
function getLetra(artista, musica){
    return fetch(`https://api.lyrics.ovh/v1/${artista}/${musica}`)
}