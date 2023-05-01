import "./profile.css"
import { useState } from "react";
import Login from "./Login"
import dp from "../assets/images/default-picture.png"

export default function Profile() {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [clickedId, setClickedId] = useState("")
    const [loggedIn, setLoggedIn] = useState(true)

    const toggleModal = (e) => {
        const active = e.target.id.replace("Button", "")
        setShowLoginModal(prevState => !prevState)
        setClickedId(active)
    }
    console.log(clickedId)

    return (
        <div className="profile">

            {loggedIn ?
                <div className="login-dashboard">
                    <button className="profile-button" id="loginButton" onClick={toggleModal}>Login</button>
                    <button className="profile-button" id="registerButton" onClick={toggleModal}>Register</button>
                </div> :

                <div className="profile-dashboard">
                    <div className="profile-img-wrapper">
                        <img src={dp} alt="" className="profile-picture" />
                    </div>
                    <div className="profile-text">
                        <p className="username">Jane Doe</p>
                        <p className="rank">Guest</p>
                    </div>
                </div>
            }

            {showLoginModal ? <Login clickedId = {clickedId} handleClick= {toggleModal} /> : ""}
        </div>
    )
}