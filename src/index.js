import React from 'react'

const defaultSize = '16:9'

const root = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA`

// base64 image datauri for each aspect ratio without the common header
const guides = {
  '3.5:1': `CMAAAAKCAQAAACUcy8sAAAAFElEQVR42mNkoApgHDVm1JiBMwYAEgcAC2DxERMAAAAASUVORK5CYII=`,
  '2.35:1': `OsAAABkCAMAAABQMjfqAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAC1JREFUeNrtwTEBAAAAwiD7p14MH2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwE1cMAAB6Ne5JQAAAABJRU5ErkJggg==`,
  '2.39:1': `O8AAABkCAMAAABZ2ZeQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAC1JREFUeNrtwQENAAAAwqD3T+3sARQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADddwAABcnqeAwAAAABJRU5ErkJggg==`,
  '21:9': `BUAAAAJCAMAAADq3ZdEAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAAtJREFUeAFjGBYAAADGAAHrkQKlAAAAAElFTkSuQmCC`,
  '16:9': `BAAAAAJCAMAAAAM9FwAAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAAtJREFUeAFjGKwAAACZAAEIdHvGAAAAAElFTkSuQmCC`,
  '4:3': `AQAAAADCAMAAACDKl70AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUeAFjQAUAAA8AAeTdOmQAAAAASUVORK5CYII=`,
  '1:1': `AEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12P4zwAAAgEBAKrChTYAAAAASUVORK5CYII=`,
  '9:16': `AkAAAAQCAQAAABuQZ3IAAAAEElEQVR42mNkwACMo0K4hQALSAARu3DAkAAAAABJRU5ErkJggg==`
}

const getGuide = function (size) {
  const guide = guides[size] || guides[defaultSize]
  return `${root}${guide}`
}

const childrenStyle = {
  height: '100%',
  left: '0',
  position: 'absolute',
  top: '0',
  width: '100%'
}

const guideStyle = {
  display: 'block',
  height: 'auto',
  width: '100%'
}

const wrapperStyle = {
  position: 'relative'
}

export default (props) => {
  const size = props.size || defaultSize
  const src = getGuide(size)
  return (<div style={wrapperStyle}>
    <img src={src} style={guideStyle} aria-hidden='true' />
    <div style={childrenStyle} {...props} />
  </div>)
}
