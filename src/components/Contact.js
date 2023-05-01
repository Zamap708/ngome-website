import "./contact.css"

export default function Contact() {

    const handleSubmit = () => {
        console.log("submit")
    }

    return (
        <div className="contact fade-in">
            <div className="header">
                <h1 className="heading">Contact Us</h1>
                <h2 className="sub-heading">
                    Please note, if you wish to make a booking to visit the shrine, please read the details and use the form on the Bookings page.
                </h2>
            </div>
            <div className="content-wrapper">

                <form action="" className="contact-form">
                    <h1 className="heading">Enquiry Form:</h1>
                    <input className="contact-input" type="text" placeholder="YOUR NAME"/>
                    <input className="contact-input"  type="tel" placeholder="YOUR TEL. NO."/>
                    <input className="contact-input"  type="email" placeholder="YOUR EMAIL" />
                    <textarea placeholder="MESSAGE"/>

                    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                </form>
            </div>


        </div>
    )
}