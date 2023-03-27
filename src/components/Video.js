import "./video.css"

export default function Video() {
    return (
        <div className="video-wrapper">
            <div className="video-text">
                <h2 className="heading video-title">Join us for our weekly service</h2>
                <p className="page-content">
                    If you can't make it to our physical location, we'd love for you to join us from wherever you are. Our live stream is an opportunity to connect with our community, worship together, and hear an uplifting message. We invite you to join us this Sunday at [insert time] for an inspiring and meaningful experience. We look forward to seeing you there!
                </p>
            </div>
            <div className="video-container">
                <iframe id="ytplayer" type="text/html" 
                src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                frameborder="0"></iframe>
            </div>
            
        </div>
        
    )
}