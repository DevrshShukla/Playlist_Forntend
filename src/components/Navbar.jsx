// Navbar.js
const Navbar = ({ selectedGenre, setSelectedGenre }) => {
  const genres = ["All", "Gujarati", "Folk", "Electronic", "Bollywood", "English Pop"];

  return (
    <nav className="bg-slate-900 text-slate-100 flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold">Music Player</h1>

      <div>
        <label htmlFor="genre" className="mr-2">Select Genre:</label>
        <select
          id="genre"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="bg-pink-400 text-white px-3 py-1 rounded-md"
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
