import SongBar from "./SongBar";

const RelatedSongs = ({data, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white"> Songs: </h1>
      <div className="mt-6 w-full flex flex-col">
        {data?.map((song,i)=>(
          <SongBar key={song.key} song={song} i={i}  isPlaying={isPlaying} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick}/>
        ))}
      </div>
    </div>
  );
}

export default RelatedSongs;
