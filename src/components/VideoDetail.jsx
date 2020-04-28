import React from 'react'

const VideoDetail = ({selectedVideo}) => {
    if (!selectedVideo) {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
    return (
        <div className="card">
            <iframe src={videoSrc} height="400" alt="Card" title={selectedVideo.snippet.title} frameBorder="0" allow=" picture-in-picture" allowFullScreen/>
            <div className="card-body">
                <h5 className="card-title">{selectedVideo.snippet.title}</h5>
                <span className="bg-danger text-white"> {selectedVideo.snippet.channelTitle}</span>
                <p className="card-text">{selectedVideo.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail