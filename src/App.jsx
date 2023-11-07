import Header from "./Header"
import Meme from "./Meme"


export default function App(){
    return(
        <div  className="bg-[url('/funny.jpg')] bg-fixed h-full bg-cover">
            <Header />
            <Meme />

        </div>
    )
}