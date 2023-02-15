import React from "react"
export default function Card({image,startingDate,endingDate,link,title,subtitle,location}){
  return (
    <div className="flex justify-between gap-4 px-8 pt-8">
      <div>
        <img src={image} alt="picture" className="min-w-[150px]" />
      </div>
      <div className="space-y-1">
        <div className=" flex gap-2">
          <img src="/images/Fill 220.svg" />
          <p>{location}</p>
         <a href="#" className="underline text-gray-500">{link}</a>
        </div>

        <div className="flex font-bold">
          <p>{startingDate} -</p>
          <p>{endingDate}</p>
        </div>
        <h1 className="font-bold text-xl">{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}