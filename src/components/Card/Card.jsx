import { Container } from 'postcss'
import React from 'react'

const Card = (props) => {

  return (
    <div id="card-container" className="h-72 w-full flex justify-center items-center p-8 gap-4">
      <div id="bg-container" className="bg-fuji bg-center bg-cover h-full w-40 rounded-md"></div>
      <div id="info-container" className="basis-2/3">
        <div id="location" className='flex gap-4'>
          <div id="country" className='tracking-widest uppercase'><i className='fa-solid fa-location-dot text-red-600'></i> {props.location}</div>
          <a href={props.googleMapsUrl} id="googleMap-link" className='text-gray-400 underline font-normal'>View on Google Map</a>
        </div>
        <div id="title" className='font-bold text-sm capitalize sm:mb-4 sm:mt-2 sm:text-2xl'>{props.title}</div>
        <div id="date" className='font-bold mb-2'>{props.date}</div>
        <div id="description" className='font-normal'>{props.description}</div>
      </div>
    </div>
  )
}


export default Card