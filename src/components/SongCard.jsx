import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";

// {
//   name , artist , album , genre , duration , cover
// }


const SongCard = (props) => {
  return (
    
    <div className='flex gap-10 items-center justify-center '>
        <div className='parent  w-50 bg-orange-100 hover:bg-orange-300 rounded-lg p-4 m-2 cursor-pointer'>
        <div className='data flex flex-col items-center gap-4 '>
            <img className='h-30 w-30 rounded-[50%] bg-red-400 object-cover' src={props.cover} alt="SongCover" />
            <h1 className='text-2xl text-slate-800 font-bold text-center'>{props.name}</h1>
            <div className="album_artist text-slate-600 flex items-cente gap-5">
                <h5 className=''>{props.album}</h5>
                <h5 className=''>{props.artist}</h5>
            </div>  
                <h5 className=''>{props.genre}</h5>
            <div className="play_btn text-red-600 flex items-center justify-center gap-2 text-xl font-bold">
                <FaRegCirclePlay />
                <h2>{props.duration}</h2>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SongCard