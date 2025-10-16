# 🎵 Music Playlist App (React.js)

A modern and responsive **Music Playlist App** built using **React.js**.  
Users can browse songs and filter playlists by genre such as *Gujarati, Folk, Electronic, Bollywood, English Pop*.

---

## 🚀 Features

- 🎧 Displays music cards with title, artist, album, and duration  
- 🎨 Clean UI with gradient background and modern typography  
- 🔍 Filter songs dynamically by selected genre  
- ⚡ Built using React functional components and props  
- 💅 Styled using Tailwind CSS  

---

## 🛠️ Tech Stack

**Frontend:** React.js, Tailwind CSS  
**Tools:** Vite or Create React App (CRA), JSX  

---

## 📂 Folder Structure

music-playlist/ <br>
│
├── public/<br>
│ └── index.html<br>
│
├── src/<br>
│ ├── components/<br>
│ │ ├── Navbar.jsx<br>
│ │ ├── SongCard.jsx<br>
│ │ └── GenreFilter.jsx<br>
│ ├── data/<br>
│ │ └── songs.js<br>
│ ├── App.jsx<br>
│ ├── index.js<br>
│ └── App.css<br>
│
├── package.json<br>
├── README.md<br>
└── requirements.txt<br>


---

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/react-music-playlist.git
cd react-music-playlist
npm install
npm start

🧠 How Filtering Works

The GenreFilter component updates a state variable (selectedGenre) in App.jsx.
Then, songs are filtered using:

const filteredSongs = selectedGenre === "All" 
  ? songs 
  : songs.filter(song => song.genre === selectedGenre);

  🖼️ Preview

📌 Future Improvements

🔊 Add audio playback controls
💾 Save user playlists

🌐 Connect to backend (MERN full version)

👨‍💻 Author

Devarsh Shukla
dpshukla1710@gmail.com
3rd Year Computer Science Student