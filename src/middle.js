import React from 'react'
import ReactPlayer from 'react-player'
import vid from './images/vid.mp4'

function Middle() {
  return (
    <section>
      <div className='middle'>
        <div className='middle-center'>
          <ReactPlayer
            url={vid}
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
