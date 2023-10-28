import memeData from "./memeData"

export default function Main(){
    function getMemes(){
        const memeArr = memeData.data.memes
        const randomNum = Math.floor(Math.random() * memeArr.length)
        const url = memeArr[randomNum].url
        console.log(url)
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
  </div>
    )
}