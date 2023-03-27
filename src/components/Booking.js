import "./booking.css"

export default function Booking() {

    const handleSubmit = () => console.log("submitted")
    return (
         <div className="articles">
          <form action="" className="booking-form">
                <h1 className="page-heading">Bookings for Pilgrims</h1>
                <label className="booking-label" htmlFor="">Group Name</label><input type="text" name="" id="" />
                <label className="booking-label" htmlFor="">City & Diocese</label><input type="text" name="" id="" />
                <label className="booking-label" htmlFor="">Group Leader Name</label><input type="text" name="" id="" />
                <label className="booking-label" htmlFor="">Your Tel No.</label><input type="tel" name="" id="" />
                <label className="booking-label" htmlFor="">Your Email</label><input type="email" name="" id="" />
                <label className="booking-label" htmlFor="">Accompanying Priest(s)</label><input type="text" name="" id="" />
                <label className="booking-label" htmlFor="">Arrival Date</label> <input type="date" name="" id="" />
                <input type="time" name="" id="" /><label className="booking-label" htmlFor="">Arrival Time</label>
                <label className="booking-label" htmlFor="">Leaving Date</label> <input type="date" name="" id="" />
                <input type="time" name="" id="" /><label className="booking-label" htmlFor="">Leaving Time</label>
                <label className="booking-label" htmlFor="">No. of Pilgrims</label><input type="text" name="" id="" />
                <label className="booking-label" htmlFor="">No. of Buses</label><input type="text" name="" id="" />
                <label className="booking-label" htmlFor="">No. of Pilgrims</label><input type="text" name="" id="" />
                <label className="booking-label" htmlFor="">Meals?</label><input type="text" name="" id="" />
                <label className="booking-label" htmlFor="">Person In Charge of Holy Mass/Liturgy/Choir</label><input type="text" name="" id="" />
                <label className="booking-label" htmlFor="">Any Other Details</label><textarea name="" id="" />
                
                <button className="submit-btn" onClick={handleSubmit}>Submit</button>

          </form>
        </div>
    )
}