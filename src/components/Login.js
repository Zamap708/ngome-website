import { useState, useEffect } from "react";
import "./login.css"

export default function Login(props) {
    const [RegLog, setRegLog] = useState({
        register: false,
        login: true
    })

    const clickedId = props.clickedId

    useEffect(() => {
        setRegLog(prevState => {
            const newState = {}
            for (const key in prevState) {
              newState[key] = false
            }   
            return {
              ...newState, 
              [clickedId]: true
            }
          })
    }, [])

    const toggleRegLog = (e) => {
        const active = e.target.id
        setRegLog(prevState => {
          const newState = {}
          for (const key in prevState) {
            newState[key] = false
          }   
          return {
            ...newState, 
            [active]: true
          }
        })
    }

    return (
        <div className="login-modal">
            <div className="modal-background" onClick={props.handleClick}></div>
            {RegLog.login ? <div className="login-form">
                <div className="log-reg-switch">
                    <h1 className="heading" id="login" onClick={toggleRegLog}>Login</h1>
                    <h1 className="heading unselected" id="register" onClick={toggleRegLog}>Register</h1>
                </div>
                <input className="login-input" type="text" placeholder="YOUR EMAIL"/>
                <input className="login-input" type="text" placeholder="YOUR PASSWORD"/>
                <button className="login-btn">Login</button>
                <a href="" className="forgot-password">Forgot Password?</a>
            </div> : ""}
           {RegLog.register ? <div className="register-form">
                <div className="log-reg-switch">
                    <h1 className="heading unselected" id="login" onClick={toggleRegLog}>Login</h1>
                    <h1 className="heading" id="register" onClick={toggleRegLog}>Register</h1>
                </div>
                <input className="login-input" type="text" placeholder="ENTER NAME"/>
                <input className="login-input" type="text" placeholder="ENTER PASSWORD" />
                <input className="login-input" type="text" placeholder="CONFIRM PASSWORD"/>
                <input className="login-input" type="text" placeholder="ENTER EMAIL"/>
                <button className="login-btn">Register</button>
            </div> : ""}
        </div>
    )
}