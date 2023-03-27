import "./footer.css"
import logo from "../assets/images/ngome_marian_shrine_nobg.png"
import map from "../assets/images/map-example.png"

export default function Footer(props) {
    return (
        <footer className="footer">

            <ul className="footer-list">
                    
            <li className="footer-item">
            <button 
                className="footer-link" 
                id="Home"
                onClick={props.handleClick}
                    >Home
            </button>
            </li>
            <li className="footer-item">
            <button 
                className="footer-link" 
                id="Pilgrims"
                onClick={props.handleClick}
                >Pilgrims
            </button>
            </li>            
            <li className="footer-item">
            <button 
                className="footer-link" 
                id="History"
                onClick={props.handleClick}
                >History
            </button>
            </li>                
            <li className="footer-item">
                <button 
                    className="footer-link" 
                    id="News"
                    onClick={props.handleClick}
                    >News
                </button>
            </li>                
            <li className="footer-item">
                <button 
                    className="footer-link" 
                    id="About"
                    onClick={props.handleClick}
                    >About
                </button>
            </li>
            <li className="footer-item">
                <button 
                    className="footer-link"
                    id="Contact"
                    onClick={props.handleClick}
                    >Contact
                </button>
            </li>
            </ul>
            

            <div className="footer-newsletter">
                <a className="footerbar-brand" href="w">
                    <img className="footerbar-brand-img" src={logo} alt="Ngome Marian Shrine Logo" />
                </a>

                <div className="newsletter">
                    <h2 className="username">
                    Stay Connected with Our Community <br /> Subscribe to Our Church Newsletter Today!
                    </h2>

                    <form action="" className="footer-newsletter-form">
                        <input className="footer-input" type="email" name="" id="" />
                        <button className="submit-newsletter-btn">Submit</button>
                    </form>
                    
                </div>
            </div>
 
        </footer>
    )
}