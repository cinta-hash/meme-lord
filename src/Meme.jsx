import { useEffect, useState } from "react"



export default function Main(){
const [meme, setMeme] = useState({
  topText: "",
  bottomText: "",
  randomImage: "https://i.imgflip.com/1g8my4.jpg"
})
const [allMemes, setAllMemes] = useState([])

    useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
      .then(res=>res.json())
      .then(memeData => setAllMemes(memeData.data.memes))
    }, [])

    function getMemes(){
       const randomNumber = Math.floor(Math.random() * allMemes.length)
       const url = allMemes[randomNumber].url
       setMeme(prevMeme=>({
        ...prevMeme,
        randomImage: url
       }))
        
    }
    function handleChange(event){
      const {name, value} = event.target
      setMeme(prevMeme=>({
        ...prevMeme,
        [name] :value
      }))
    }

    return(
    <div className="w-1/2 m-auto">
      <div className="flex justify-between mb-4">
        <input 
        type="text" id="top" 
        placeholder="top-text" 
        className="rounded-md bg-slate-300 indent-2 h-12 w-3/5 mr-2" 
        name="topText"
        value={meme.topText}
        onChange ={handleChange}
        />
        <input type="text" id="bottom" 
        placeholder="bottom-text" 
        className="rounded-md bg-slate-300 indent-2 h-12 w-3/5 ml-2" 
        name="bottomText"
        value={meme.bottomText}
        onChange ={handleChange}
        />
      </div>
    <div className="flex justify-center">
      <button className="bg-orange-500 cursor-pointer rounded-md h-12 font-semibold w-1/2"
      onClick={getMemes}
      >Get a new meme image 🖼</button>
    </div>
    <div className="w-100% flex justify-center mt-10 relative">
        <img src={meme.randomImage}
         alt={meme.randomImage} 
         className="w-100%" />
         <h1 className="absolute w-4/5 text-center left-1/2 transform -translate-x-1/2 my-3 px-1 top-0 text-2xl uppercase text-white tracking-wide font-bold">{meme.topText}</h1>
         <h2 className="absolute w-4/5 text-center left-1/2 transform -translate-x-1/2 my-3 px-1 bottom-0 text-2xl uppercase text-white tracking-wide font-bold">{meme.bottomText}</h2>
         
    </div>
    
  </div>
    )
}