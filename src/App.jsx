import Header from "./Header"
import Main from "./Main"


export default function App(){
    return(
        <div  className="bg-[url('/funny.jpg')] bg-fixed h-full bg-cover">
            <Header />
            <Main />

        </div>
    )
}