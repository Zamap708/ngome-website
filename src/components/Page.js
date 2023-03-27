import "./page.css"

export default function Page(props) {
    return (
        <div className="page">
            <h1 className="page-heading fade-in">{props.heading}</h1>
            <p className="page-content fade-in">{props.content}</p>
        </div>
    );
}