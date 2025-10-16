// App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Playlist from "./components/Playlist";


function App() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const playlistData = [
  {
    "id": 1,
    "title": "Neon Skies",
    "artist": "Aria Wells",
    "album": "City Lights",
    "genre": "English Pop",
    "duration": "4:12",
    "durationSeconds": 252,
    "cover": "https://i.pinimg.com/1200x/8b/be/94/8bbe94363c0df7a5b13d4c62dce44a88.jpg"
  },
  {
    "id": 2,
    "title": "Paper Planes",
    "artist": "Jonah Creek",
    "album": "Room 21",
    "genre": "English Pop",
    "duration": "3:05",
    "durationSeconds": 185,
    "cover": "https://i.pinimg.com/1200x/7b/24/bf/7b24bfef0051d79f9eabcb65ec62272d.jpg"
  },
  {
    "id": 3,
    "title": "Midnight Drive",
    "artist": "Luma",
    "album": "After Hours",
    "genre": "Electronic",
    "duration": "5:01",
    "durationSeconds": 301,
    "cover": "https://i.pinimg.com/1200x/f4/c9/89/f4c989364e9e672d7267863c380c95ec.jpg"
  },
  {
    "id": 4,
    "title": "Blue Notebook",
    "artist": "Sahil , Waves",
    "album": "Sunsets",
    "genre": "Gujarati",
    "duration": "2:48",
    "durationSeconds": 168,
    "cover": "https://i.pinimg.com/736x/f0/cd/d8/f0cdd8c8ff8aaad4fc5165353709fff7.jpg"
  },
  {
    "id": 5,
    "title": "Orbit",
    "artist": "Nova Echo",
    "album": "Gravity",
    "genre": "Electronic",
    "duration": "3:59",
    "durationSeconds": 239,
    "cover": "https://i.pinimg.com/736x/22/c9/dd/22c9dd7fc2356e35b435154079176220.jpg"
  },
  {
    "id": 6,
    "title": "City Of Paper",
    "artist": "Maru",
    "album": "Folded Maps",
    "genre": "Bollywood",
    "duration": "4:30",
    "durationSeconds": 270,
    "cover": "https://i.pinimg.com/736x/d9/f5/83/d9f583c00016ba2db2e3e654e1673c5f.jpg"
  },
  {
    "id": 7,
    "title": "Echoes",
    "artist": "R. Patel",
    "album": "Reflections",
    "genre": "Gujarati",
    "duration": "6:10",
    "durationSeconds": 370,
    "cover": "https://i.pinimg.com/1200x/57/86/45/5786458217d6f4b26833c8b2d50630b5.jpg"
  },
  {
    "id": 8,
    "title": "Sunrise Loop",
    "artist": "The Dawn",
    "album": "Morning Routines",
    "genre": "Folk",
    "duration": "3:22",
    "durationSeconds": 202,
    "cover": "https://i.pinimg.com/1200x/20/b8/23/20b8234423e7a0ad6b7bac40914c271a.jpg"
  },
  {
    "id": 9,
    "title": "Concrete Roses",
    "artist": "Maya Grey",
    "album": "Streets",
    "genre": "English Pop",
    "duration": "4:05",
    "durationSeconds": 245,
    "cover": "https://i.pinimg.com/736x/cb/ac/bc/cbacbca3a52acae8d9905de1b04cedcd.jpg"
  },
  {
    "id": 10,
    "title": "Polaroid",
    "artist": "Kento",
    "album": "Snapshots",
    "genre": "English Pop",
    "duration": "2:30",
    "durationSeconds": 150,
    "cover": "https://i.pinimg.com/736x/2c/a2/15/2ca2156d83e48cfb7069b29c42a09ade.jpg"
  },
  {
    "id": 11,
    "title": "Wildflower",
    "artist": "Tara Singh",
    "album": "Meadow",
    "genre": "Bollywood",
    "duration": "3:45",
    "durationSeconds": 225,
    "cover": "https://i.pinimg.com/736x/f0/f8/fa/f0f8fa52aafd178e208f79bf07122902.jpg"
  },
  {
    "id": 12,
    "title": "Satellite Heart",
    "artist": "Echo & Ivy",
    "album": "Signals",
    "genre": "Electronic",
    "duration": "4:55",
    "durationSeconds": 295,
    "cover": "https://i.pinimg.com/736x/8f/1c/cd/8f1ccd32a6eb276958065274dce5a7fb.jpg"
  },
  {
    "id": 13,
    "title": "Paper Lanterns",
    "artist": "Yuna K.",
    "album": "Mid-Autumn",
    "genre": "Folk",
    "duration": "3:58",
    "durationSeconds": 238,
    "cover": "https://i.pinimg.com/736x/c0/db/40/c0db40625b7e680bbb21dcf595f39ae9.jpg"
  },
  {
    "id": 14,
    "title": "Static Memory",
    "artist": "Binary Bloom",
    "album": "Cache",
    "genre": "Electronic",
    "duration": "5:28",
    "durationSeconds": 328,
    "cover": "https://i.pinimg.com/1200x/a0/3d/e2/a03de2efcb1cbf3cce102e313b77d808.jpg"
  },
  {
    "id": 15,
    "title": "Riverside",
    "artist": "Old Oak",
    "album": "Drift",
    "genre": "Folk",
    "duration": "3:12",
    "durationSeconds": 192,
    "cover": "https://i.pinimg.com/736x/25/aa/f6/25aaf6b06d04ec771362c209a4ce58ae.jpg"
  }
]


  // Filter songs based on selected genre
  const filteredSongs =
    selectedGenre === "All"
      ? playlistData
      : playlistData.filter((song) => song.genre === selectedGenre);

  return (
    <div>
      <Navbar
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <Playlist songs={filteredSongs} />
    </div>
  );
}

export default App;
