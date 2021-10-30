import React from 'react'
import ReactPlayer from 'react-player'

function Middle() {
  return (
    <section>
      <div className='middle'>
        <div className='middle-center'>
          <ReactPlayer
            url='https://res.cloudinary.com/trikerl/video/upload/v1635635456/computer/vid_pivymn.mp4'
            playing={true}
            width='100%'
            height='100%'
            controls={false}
          />
        </div>
      </div>
    </section>
  )
}

export default Middle
