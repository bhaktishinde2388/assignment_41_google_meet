import Cards from "../../components/Cards/Cards"
import ShareImg from "../../views/Home/img/Screenshot (250).png"
import VideoImg from "../../views/Home/img/video-camera.png"
import PresentScreen from "../../views/Home/img/present.png"
import Mic2 from "../../views/Home/img/mute.png"
import MicMute from "../../views/Home/img/microphone (1).png"
import HandRaised from "../../views/Home/img/hand.png"
import Options from "../../views/Home/img/menu.png"
import Close from "../../views/Home/img/end-meet.png"
import Bhakti from "../../views/Home/img/bhaku.jpg"
import Rutu from "../../views/Home/img/rutu.jpg"
import Rutu2 from "../../views/Home/img/rutu2.jpg"
import Saru from "../../views/Home/img/saru.jpg"
import "./Home.css"
const Home =()=> {
        return(
            <>
            <div className="head">
               <img src={Mic2} className="header-icons-mic"/> &nbsp;
               <img src={PresentScreen} className="header-icons-present"/>&nbsp;
               <span className="screen-presenter">bhakti shinde presenting</span>
               <span className="stop-presenting-text">Stop Presenting</span>
            </div>
            <div className="main">
            <img className="main-img" src={ShareImg}/>
                <div>
                <Cards name="bhakti shinde" images={Bhakti} micstate={true}/>
                <Cards name="Rutuja Wable" images={Rutu} micstate={false}/>
                </div>

                 <div>
                <Cards name="Rutuja More" images={Rutu2} micstate={false}/>
                <Cards name="Sarita Sadgir" images={Saru} micstate={false}/>
                </div>
                             </div>
            <div className="footer-icons-container">
               <img src={MicMute} className="footer-icons-mic"/>
               <img src={VideoImg}  className="footer-icons-video"/>
               <img src={PresentScreen} className="footer-icon-present"/>
               <img src={HandRaised} className="footer-icons-video"/>
               <img src={Options}  className="footer-icons-video"/>
               <img src={Close}  className="footer-icons-end"/>

                 </div>
            </>
        )
    }
export default Home
