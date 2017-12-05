# fideo-react

```
npm install fideo-react --save
```

Based on https://github.com/Trolleymusic/fideo.js - implemented for use in a React application

> I've been sticking loads of youtube and vimeo embeds in sites recently, and they're easy to do, but there's always a few extra lines of CSS and a couple of extra div wrappers you need to write to get them to be dynamically sized and/or work properly in a responsive design without them hanging out the end.
>
> So fideo is a little piece of javascript that you run on the embedded iframe and it'll take care of everything. You don't need to add any images or CSS and it has no dependencies.

When you want to embed a video, but the size of video is going to expand to fill the parent container it's a pain in the butt because the iframe doesn't grow the height to the correct aspect ratio when the width grows.

Fideo embeds a little transparent png behind your iframe/component, correctly sized for the aspect ratio so that the container's height grows naturally. The child component is positioned absolutely to fill the container.

```javascript
import React from 'react'
import Fideo from 'fideo-react'

export default () => {
  <Fideo>
    <iframe src='https://www.youtube-nocookie.com/embed/jd-48XjG_Cs?rel=0&amp;showinfo=0?ecver=' frameBorder='0' gesture='media' allow='encrypted-media' allowFullScreen />
  </Fideo>
}
```

> At the moment there are six embedded aspect ratios, 16:9, 4:3, 1:1, 2.39:1, 2.35:1, and 21:9 - if you don't specify a size when calling fideo, then it'll default to 16:9.

You can pass `size` as an attribute/prop: `<Fideo size='2.39:1'>`
