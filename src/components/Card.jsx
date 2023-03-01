import React from 'react'
import twitterB from "./assets/Twitter-Blue.svg";
import like from "./assets/Like.svg";

const Card = ({ avatar, fname, userName, comment, likes }) => {
  return (
    <div>
        <div className="flex flex-col justify-between bg-white p-4 rounded-md space-y-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row space-x-3">
            <img src={avatar} alt="" />
            <div className="flex flex-col">
              <p className="font-bold">{fname}</p>
              <p className="text-sm text-gray-500">{userName}</p>
            </div>
          </div>
          <img src={twitterB} alt="" />
        </div>
        <p className="text-gray-500">{comment}</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row space-x-1">
            <img src={like} alt="" />
            <p>{likes}</p>
          </div>
          <p className="text-gray-500">January 8, 2023</p>
        </div>
      </div>
    </div>
  )
}

export default Card