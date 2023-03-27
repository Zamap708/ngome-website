import "./profile.css"
import dp from "../assets/images/default-picture.png"

export default function Profile() {
    return (
        <div className="profile">
            {/* <div className="login-dashboard">
                <button className="login profile-button">Login</button>
                <button className="register profile-button">Register</button>                
            </div> */}
            <div className="profile-dashboard">
                <div className="profile-img-wrapper">
                    <img src={dp} alt="" className="profile-picture"/>
                </div>
                <div className="profile-text">
                    <p className="username">Jane Doe</p>
                    <p className="rank">Guest</p>
                </div>
            </div>
        </div>
        
    )
}