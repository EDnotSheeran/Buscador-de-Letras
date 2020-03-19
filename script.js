// https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search
// https://api.lyrics.ovh/v1/artist/title
function getLetra(artista, musica){
    return fetch(`https://api.lyrics.ovh/v1/${artista}/${musica}`)
}
const form = document.querySelector('#Formulario')
form.addEventListener('submit', form =>{
    form.preventDefault()

    aoSubmit()
})

async function aoSubmit(){
    const letras = document.querySelector('#letras')
    const artista = document.querySelector('#artista')
    const musica = document.querySelector('#musica') 

    letras.innerHTML = '<div class="spinner"></div>'

    try {
        const resposta = await getLetra(artista.value, musica.value)
        const dados = await resposta.json()
        if(dados.lyrics)
            letras.innerHTML = dados.lyrics
        else
            letras.innerHTML = dados.error
    } catch (err) {
        console.log(err)
    }
}