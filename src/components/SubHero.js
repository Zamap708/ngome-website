// import News from "..assets/images/about-card.jpg"
// import Pray from "../assets/images/pilgrim-card.jpg"
// import History from "../assets/images/history-card.jpg"
import "./subhero.css"


export default function SubHero() {

    return (
        <div className="subhero">
            <div className="subhero-wrapper">
                <div className="subhero--img-wrapper">
                    <div className="news" />
                    <p className="subhero-titles">NEWS</p>
                </div>
                <div className="subhero--img-wrapper">
                    <div className="pray"/>
                    <p className="subhero-titles">PRAY WITH US</p>
                </div>
                <div className="subhero--img-wrapper">
                    <div className="history"/>
                    <p className="subhero-titles">OUR HISTORY</p>
                </div>
            </div>
        </div>
    )
}