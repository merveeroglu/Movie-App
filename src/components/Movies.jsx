"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const Movies = ({dt}) => {
    const router = useRouter()
    // console.log("Movie data:", dt); // Film verisini kontrol et
      
    return (
     <div 
       onClick={() => router.push(`/movie/${dt?.id}`)} 
       className="min-w-[400px] h-[300px] relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
     >
        <Image
         fill
         src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}
         alt={dt?.title || "Movie"}
         className="object-cover rounded-lg"
         priority
        />
        <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity text-white bg-black/50 rounded-lg'>
            <div className='text-xl font-bold truncate'>{dt?.title}</div>
            <div className='text-sm'> İMDB: {dt?.vote_average?.toFixed(1)} </div>
            <div className='text-sm'>{dt?.release_date}</div>
        </div>
     </div>
   )
}

export default Movies