import { useState } from "react";
import "./history.css";
import { chapters } from "../chaptersData";
import Chapter from "./Chapter";
import Profile from "./Profile"
import ReactHtmlParser from 'react-html-parser';

export default function Pilgrims() {
    const [activePage, setActivePage] = useState({
        0: true,
        1: false,
        2: false,
        3: false,
        4: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false
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
    

    const chaptersArr = chapters.data

    function replaceNewlinesWithBreaks(text) {
        // const removedLine = text.replace(/\n/g, "<br />");
        const removedLine = text
        return removedLine
      }
    const content = chaptersArr.map((chapter) => {
        const fixedContent = replaceNewlinesWithBreaks(chapter.content)
        return activePage[chapter.key] ? (
            <Chapter
                key={chapter.key}
                img={chapter.img}
                chapter={chapter.chapter}
                content={fixedContent}
            />
        ) : "";
    })

    const contentsItems = chaptersArr.map((chapter) => {
        return (
            <li className="contents-item">
                <button
                className={"contents-button " + (activePage[chapter.key] ? "active-content" : "")}
                    onClick={changePage}
                    id={chapter.key}
                >
                    {ReactHtmlParser(chapter.chapter)}
                </button>
            </li>
        )
    })

    
    return (
        <div className="history fade-in">
            <div className="header">
                <h1 className="heading">The History of Ngome</h1>
                <h2 className="sub-heading">
                    This history was carefully researched and compiled in 2007 by Mrs Rose-marie Foxon of Durban, Kwazulu Natal, South Africa
                    Please click on a 'Chapter' button to read each specific chapter in turn.
                </h2>
            </div>

            <div className="content-wrapper">
                
                <div className="sidebar">
                    <Profile />
                    <ul className="contents-list">
                        {contentsItems}
                    </ul>
                </div>
                

                <section className="chapters">
                    {content}
                </section>
            </div>
        </div>
    );
}