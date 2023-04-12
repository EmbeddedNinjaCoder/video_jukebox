const form = document.querySelector("#playlist-form")
const playlist = document.querySelector("#playlist")
const player = document.querySelector("#player")

let songs = []

form.addEventListener("submit", function (e) {
   e.preventDefault()

   const songNameInput = document.querySelector("#song")
   const artistNameInput = document.querySelector("#artist")
   const youtubeIDInput = document.querySelector("#youtubeID")
   const songName = songNameInput.value
   const artistName = artistNameInput.value
   const youtubeID = youtubeIDInput.value

   const songObj = {
      songName,
      artistName,
      youtubeID,
   }

   displayPlaylist(songObj)

   form.reset()
})

function displayPlaylist(songObj) {
   const span = document.createElement("span")
   const li = document.createElement("li")
   const deleteBtn = document.createElement("button")

   span.textContent = `${songObj.songName} - ${songObj.artistName}   `
   deleteBtn.innerHTML = "🗑️"

   // add event listeners

   li.addEventListener("click", () => {
      player.src = `https://www.youtube.com/embed/${songObj.youtubeID}`
   })

   deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      console.log(e)
      if (confirm("Are you sure you want to remove this song?"))
         e.target.parentNode.parentNode.remove()
   })

   // attach
   span.appendChild(deleteBtn)
   li.appendChild(span)

   playlist.appendChild(li)
}
