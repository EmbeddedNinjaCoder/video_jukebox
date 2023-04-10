const form = document.querySelector("#playlistForm")
const playlist = document.querySelector("#playlist")
const player = document.querySelector("#player")

// const inputs = document.querySelectorAll("input")

// inputs.forEach((input) => {
//    input.addEventListener("focus", (e) => {
//       e.target.style.backgroundColor = "yellow"
//    })
//    input.addEventListener("blur", (e) => {
//       e.target.style.backgroundColor = ""
//    })
// })

let songs = []

form.addEventListener("submit", function (e) {
   e.preventDefault()

   const songNameInput = document.querySelector("#songName")
   const artistNameInput = document.querySelector("#artistName")
   const youtubeLinkInput = document.querySelector("#youtubeLink")

   const songName = songNameInput.value
   const artistName = artistNameInput.value
   const youtubeLink = youtubeLinkInput.value

   const song = {
      songName,
      artistName,
      youtubeLink,
   }

   songs.push(song)

   displayPlaylist()

   //    songNameInput.value = ""
   //    artistNameInput.value = ""
   //    youtubeLinkInput.value = ""

   form.reset()
})

function displayPlaylist() {
   playlist.innerHTML = ""

   songs.forEach(function (song) {
      const li = document.createElement("a")
      li.innerText = `${song.songName} - ${song.artistName}`

      const link = document.createElement("a")
      link.href = song.youtubeLink

      link.addEventListener("click", function (e) {
         e.preventDefault()
         player.src = `https://www.youtube.com/embed/${song.youtubeLink}`
      })

      link.appendChild(li)
      playlist.appendChild(link)
   })
}

// make a delete button
// change order of link and li