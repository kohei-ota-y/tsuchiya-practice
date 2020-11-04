import React from 'react';
import YouTube from 'react-youtube';

const Youtube = () => {
    const opts = {
        height: '450',
        width: '710',
        playerVars: { // https://www.youtube.com/embed/TGyE1T3BOGo
            autoplay: 1,
        }
    }

    return (
        <div className="youtubeWrap">
            <YouTube
                videoId="TGyE1T3BOGo"
                opts={opts}
                // onReady={(e) => {e.target.playVideo()}}                    // defaults -> noop
                onPlay={() => {console.log('Play')}}                     // defaults -> noop
                onPause={() => {console.log('Pause')}}                    // defaults -> noop
                onEnd={() => {console.log('End')}}                      // defaults -> noop
                onError={() => {console.log('Error')}}                    // defaults -> noop
                onStateChange={(e) => {console.log('StateChange' + e.data); e.target.playVideo()}}              // defaults -> noop
                onPlaybackRateChange={() => {console.log('RateChange...')}}       // defaults -> noop
                onPlaybackQualityChange={() => {console.log('QualityChange')}}
            />
        </div>
    );
}
export default Youtube