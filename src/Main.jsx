import { useState } from "react"
import memeData from "./memeData"


export default function Main(){
const [meme, setMeme] = useState({
  topText: "",
  bottomText: "",
  randomImage: "https://i.imgflip.com/1g8my4.jpg"
})
const [allMemeImages, setAllMemeimages] = useState(memeData)

    function getMemes(){
       const memeArray = allMemeImages.data.memes
       const randomNumber = Math.floor(Math.random() * memeArray.length)
       const url = memeArray[randomNumber].url
       setMeme(prevMeme=>({
        ...prevMeme,
        randomImage: url
       }))
        
    }

    return(
    <div className="w-1/2 m-auto">
      <div className="flex justify-between mb-4">
        <input type="text" id="top" placeholder="top text" className="rounded-md bg-slate-300 indent-2 h-12 w-3/5 mr-2" />
        <input type="text" id="bottom" placeholder="bottom text" className="rounded-md bg-slate-300 indent-2 h-12 w-3/5 ml-2" />
      </div>
    <div className="flex justify-center">
      <button className="bg-yellow-500 cursor-pointer rounded-md h-12 font-semibold w-1/2"
      onClick={getMemes}
      >Get a new meme image 🖼</button>
    </div>
    <div className="w-100% flex justify-center mt-10">
        <img src={meme.randomImage}
         alt={meme.randomImage} 
         className="w-100%" />
    </div>
    
  </div>
    )
}