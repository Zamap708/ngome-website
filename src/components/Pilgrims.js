import { useState } from "react";
import "./pilgrims.css"
import { pages } from "../pilgrimsData"
import Page from "./Page"
import Profile from "./Profile"
import Booking from "./Booking";

export default function Pilgrims() {
    const [activePage, setActivePage] = useState({
        0: true,
        1: false,
        2: false,
        3: false,
        4: false,
        booking: false,
        form: false
      })
    
      const changePage = (e) => {
        const active = e.target.id
        setActivePage(prevState => {
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
    
    const pagesArr = pages.data

    function replaceNewlinesWithBreaks(text) {
        const removedLine = text.replace(/\n/g, "<br />");
      // const removedLine = text
        return removedLine
    }

    const content = pagesArr.map((page) => {
      const fixedContent = replaceNewlinesWithBreaks(page.content);
      const contentString = fixedContent.replace(/"/g, "")
      
        return activePage[page.key] ? (
          <Page
            key={page.key}
            page={page.page}
            heading={page.heading}
            content={page.content}
            id={page.key}
          />
        ) : "";
      });

    const contentsItems = pagesArr.map((page) => {
        return (
            <li className="contents-item">
              <button
                className={"contents-button " + (activePage[page.key] ? "active-content" : "")}
                onClick={changePage}
                id={page.key}>
                {page.page}
              </button>
            </li>
        )
    })
    
    return (
      <div className="pilgrims fade-in">
        
        <div className="header">
            <h1 className="heading">Guidelines and Information for Pilgrims</h1>
            <h2 className="sub-heading">
                This page includes the following detailed sections, split into Tabs
                Please click on a 'tab' button to read a specific section.
            </h2>
        </div>
        <div className="content-wrapper">
        
        <div className="sidebar">
          <Profile />
          <ul className="contents-list">
            {contentsItems}
            <button
              className={"contents-button " + (activePage.booking ? "active-content" : "")}
              onClick={changePage}
              id="booking">
              Bookings
            </button>
          </ul>
          <button
            className="booking-button"
            onClick={changePage}
            id="form">
            Make your booking
          </button>
        </div>
             
        
        <section className="articles">
          {content}
          {activePage.booking ? <div className="page">
          <h1 className="page-heading fade-in">Booking Procedures for 2016</h1>
          <p className="page-content fade-in">
                
            Dear Group Leader / Parish Priest,
                
            I greet you in the name of Our Lord Jesus Christ and Mary Immaculate from the Shrine of Ngome.
                
            In the light of the large number of pilgrims who have visited Ngome Marian Shrine during the past years, it is essential to clarify the process that a group needs to follow in order to secure a booking for accommodation and/or pilgrimage at Ngome.
                
            We have had a number of bookings made in the previous years with leaders/priests reneging on the agreed booking a few days/weeks before arrival at the Shrine.
                
            This has left us with no possibility for other groups to organise themselves to fill these pilgrimage dates at such a short notice, notwithstanding the huge interest in the Shrine.
                
            The following procedures are being implemented for all bookings.
                
            1. To make a Booking kindly email your booking request to (new website link). A booking for an individual or a family also needs to emailed to (new website link). Only one group from a parish will be allowed to book a weekend accommodation and/or pilgrimage during the year. Individual parishes may STILL not get a booking (even if the group has booked early) since there are only 47 weekends available to book and hundreds of booking requests. A weekday pilgrimage/accommodation (Monday to Friday) may be considered instead.
                
            2. A group booking request can only be emailed if it is accompanied by the Parish priest’s approval letter which needs to be emailed to the Shrine with a suggested date (options) and intended number of pilgrims stated. The number of pilgrims in the group must be inclusive of priests/religious sisters and brothers, and bus/taxi drivers. Refer to “Info for Accommodation” document for more details. The parish priest will inform the Shrine, via his letter, that the leader of the group has been approved for this ministry...even if the group is not comprised exclusively of his parishioners.
                
            3. The Shrine will then email a reply to the leader of the group to inform him/her that a date is available for the group, specifying the number of pilgrims that would comprise the group.
                
            4. The leader of the group will then confirm, via email, this agreed booking date. The booking is then considered as a TENTATIVE booking until the non-refundable 30% deposit is paid. Refer to “Info for Accommodation” document for more details. If the deposit is not transacted a month before the arrival date of the group, the booking date will be given over to another group. Refer to “Info for Accommodation” document for more details.
                
            5. It is the duty of the group leader to ensure that EVERY PILGRIM coming to Ngome receives the “Pilgrims Info 2016” document when they make their booking application so that all pilgrims may comply with the requirements of the Shrine.
                
            6. Once the deposit is paid, the booking date and number of pilgrims will be CONFIRMED via an email from the Shrine to the leader of the group. The group leader may then proceed with all other arrangements for the pilgrimage. The group leader may then fill in the Booking Form provided and email it back to the Shrine.
                
            7. One month before the arrival of the group…final arrangements need to be made. Any accompanying priest must bring with him a Celebrit from his Bishop which will allow him to exercise his priestly ministry at the Shrine. If the priest(s) accompanying the group would like to preach and/or preside at the Holy Mass(es) at the Shrine, permission needs to be requested from the Rector(s) before arrival at the Shrine. Refer to “Pilgrims Info 2016” document for more details.
                
            8. Two weeks before the arrival of the group…the time of arrival and the details concerning meals, liturges etc, need to be confirmed.
                
            We ask that group leaders be patient as we implement these procedures. We thank you for considering our request and promise to keep you in our prayers. We look forward to seeing you at Ngome.
                
            LJC et MI.
                
            Fr Siyabonga Dube OMI
                
            February 2023
          </p>
          </div> : ""}
          {activePage.form ? <Booking /> : ""}
        </section>
          
        </div>
      </div>
    );
}