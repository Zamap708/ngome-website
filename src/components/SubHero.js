// import News from "..assets/images/about-card.jpg"
// import Pray from "../assets/images/pilgrim-card.jpg"
// import History from "../assets/images/history-card.jpg"
import "./subhero.css"
import Video from "./Video"

export default function SubHero(props) {

    return (
        <div className="subhero">

            <blockquote className="quote">
                <p className="quote_text">"Call me Tabernacle of the Most High. You too are such a tabernacle, believe it!”</p>
                <p className="quote_text">
                    “I wish that a shrine be erected for me in the place where seven springs come together. 
                    There I let my graces flow in abundance. Many people shall turn to God.”</p>
            </blockquote>       
     
            <Video />

            <div className="subhero-wrapper">
                <div className="subhero-container">
                    <div className="subhero--img-wrapper subhero-1"
                        id="History"
                        onClick = {props.handlerMethod}
                    >
                        <p className="subhero-titles">HISTORY</p>
                    </div>
                    <div className="subhero-text">
                        <h2 className="heading subhero-heading">
                            Discover the Inspiring History of Our Church
                        </h2>
                        <p className="page-content">
                            Explore the inspiring history of our church by clicking the image. Learn about our founding, the challenges we've overcome, and the impact we've had on the community. Let's journey together through our past to appreciate the present and look forward to the future.
                        </p>
                    </div>

                </div>

                <div className="subhero-container">
                    <div className="subhero-text">
                        <h2 className="heading subhero-heading">
                            Join us on a Journey of Spiritual Growth - Book Now for Our Pilgrimage
                        </h2>
                        <p className="page-content">
                            Book now for our upcoming pilgrimage and deepen your spirituality. Read our guidelines and booking details by clicking the image. Join us on this life-changing journey of faith!
                        </p>
                    </div>
                    <div className="subhero--img-wrapper subhero-2"
                        id="Pilgrims"
                        onClick = {props.handlerMethod}
                    >
                        <p className="subhero-titles">PILGRIMS</p>
                    </div>
                </div>

                <div className="subhero-container">
                    <div className="subhero--img-wrapper subhero-3"
                        id="Contact"
                        onClick={props.handlerMethod}
                    >
                        <p className="subhero-titles">CONTACT US</p>
                    </div>
                    <div className="subhero-text">
                        <h2 className="heading subhero-heading">
                            Get in Touch with Us - Contact Our Church Today
                        </h2>
                        <p className="page-content">e
                            We are always delighted to hear from members of our community and those who are interested in learning more about our church.

                            If you have any questions, comments or would like to connect with us, please click the imag to fill out our contact form. We would love to hear from you and will get back to you as soon as possible.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}