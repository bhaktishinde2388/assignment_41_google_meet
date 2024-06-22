import "./Cards.css"
import MicOn from "../../views/Home/img/microphone (1).png"
import MicMute from "../../views/Home/img/mute.png"
import "./../../views/Home/Home.css"
const Cards = ({images,name,micstate})=>
    {
        return(
            <>
        <div className="container">
           <div className="card-container">
            <img className="voice-icon" src={micstate ? MicOn : MicMute}/>
            <img className="img" src={images}/>
            <span className="student-name">{name}</span>
            </div>
            </div>
            
            
                        </>
        )
    }

    export default Cards