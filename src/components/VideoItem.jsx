import React from 'react'
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    const {snippet} = video;

    const handleVideoSelect = () => {
        onVideoSelect(video)
    }
    const MAX_LENGTH= 30;
    return (
            <div className="row video-item my-1" onClick={handleVideoSelect}>
                <div className="col-6 pl-0 pr-1">
                <img alt="..." src={snippet.thumbnails.medium.url} className="img-thumbnail mx-0" />
                </div>
                <div className="col-6">
                    <p className="card-text font-weight-bold mb-1">
                    {
                    snippet.title.length > MAX_LENGTH ? 
                        snippet.title.substring(0, MAX_LENGTH) + '...'
                    :
                        snippet.title.length
                    }
                    </p>
                    <span className="card-text">{snippet.channelTitle}</span>
                </div>
               
            </div>
    )
}

export default VideoItem
