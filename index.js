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
      const span = document.createElement("span")
      span.textContent = `${song.songName} - ${song.artistName}`
      const li = document.createElement("li")
      const deleteBtn = document.createElement("button")
      deleteBtn.innerHTML = "🗑️"
      deleteBtn.addEventListener("click", (e) => {
         e.stopPropagation()
         if (confirm("Are you sure you want to remove this song?"))
            e.target.parentNode.parentNode.remove()
      })

      li.addEventListener("click", function () {
         player.src = `https://www.youtube.com/embed/${song.youtubeLink}`
      })
      span.appendChild(deleteBtn)
      li.appendChild(span)
      playlist.appendChild(li)
   })
}
// 🗑️
// make a delete button
// make a favorite button
