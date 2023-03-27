export default function Chapter(props) {
    return (
        <div className="chapter">
            <h1 className="chapter-heading fade-in">{props.chapter}</h1>
            <div className="chapter-img-wrapper">
                <img src={props.img} alt="" className="chapter-img" />
            </div>
            <p className="chapter-content fade-in">{props.content}</p>
        </div>
    );
}