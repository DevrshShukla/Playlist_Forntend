import SongCard from "./SongCard";

const Playlist = ({ songs }) => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-gradient-to-br from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d]
">
      {songs.length > 0 ? (
        songs.map((song) => (
          <SongCard
            key={song.id}
            name={song.title}
            artist={song.artist}
            album={song.album}
            genre={song.genre}
            duration={song.duration}
            cover={song.cover}
          />
        ))
      ) : (
        <p className="text-white text-center col-span-full">No songs found</p>
      )}
    </div>
  );
};

export default Playlist;
