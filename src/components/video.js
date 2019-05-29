import React from 'react'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video">
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow=""
        autoplay= "0"
        frameBorder="0"
        webkitallowfullscreen="false"
        mozallowfullscreen="false"
      />
    </div>
  )

  export default Video