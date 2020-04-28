import React, {useState, useEffect} from 'react';

import {SearchBar, VideoDetail, VideoList} from './index'
import youtube from '../api/youtube';

const App = () => {

    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    const onTermSubmit = async (term) => {
        try {
            const {data: {items}} = await youtube.get('/search', {
                params: {
                    part: 'snippet',
                    maxResults: 8,
                    key: process.env.REACT_APP_API_KEY,
                    q: term
                }
            })
            setVideos(items)
            setSelectedVideo(items[0])
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        onTermSubmit('Ramadan in Pakistan 2020')
    }, [])

    const onVideoSelect = video => {
        setSelectedVideo(video)
    }
    return (
        <div className="container my-4">
            <div className="row mb-3">
                <div className="col-md-5 offset-md-3 col-8 offset-2" >
                    <SearchBar onSubmitTerm={onTermSubmit}/>
                </div>
            </div>
            
            <div className="row">
                <div  className="col-lg-8">
                    <VideoDetail selectedVideo = {selectedVideo} />
                </div>
                <div  className="col-lg-4">
                    <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
                </div>
            </div>
        </div>
    )
}

export default App;
