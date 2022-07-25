import React, { useState } from "react";
import ReactPlayer from "react-player";
import './VideoPlayer.css'

const urlLinks = [
  { id: 1, url: "https://youtu.be/LXb3EKWsInQ", photos:'https://www.onthegotours.com/blog/wp-content/uploads/2018/03/Costa-Ricas-cloud-forest-10-interesting-facts.jpg' },
  { id: 2, url: "https://youtu.be/Zv11L-ZfrSg", photos:'https://c4.wallpaperflare.com/wallpaper/374/719/577/it-s-time-to-rest-wallpaper-preview.jpg' },
  { id: 3, url: "https://youtu.be/Kb8CW3axqRE", photos:'https://assets.weforum.org/article/image/responsive_big_webp_Y_gEbktKbfcoPuCKdj4xXjJ1AX75XgEpkA-YAxE2aEc.webp' },
  { id: 4, url: "https://youtu.be/LXb3EKWsInQ", photos:'https://www.onthegotours.com/blog/wp-content/uploads/2018/03/Costa-Ricas-cloud-forest-10-interesting-facts.jpg' },
  { id: 5, url: "https://youtu.be/Zv11L-ZfrSg", photos:'https://c4.wallpaperflare.com/wallpaper/374/719/577/it-s-time-to-rest-wallpaper-preview.jpg'  },
  { id: 6, url: "https://youtu.be/Kb8CW3axqRE", photos:'https://assets.weforum.org/article/image/responsive_big_webp_Y_gEbktKbfcoPuCKdj4xXjJ1AX75XgEpkA-YAxE2aEc.webp'  },
  { id: 7, url: "https://youtu.be/LXb3EKWsInQ", photos:'https://www.onthegotours.com/blog/wp-content/uploads/2018/03/Costa-Ricas-cloud-forest-10-interesting-facts.jpg'},
  { id: 8, url: "https://youtu.be/Zv11L-ZfrSg", photos:'https://c4.wallpaperflare.com/wallpaper/374/719/577/it-s-time-to-rest-wallpaper-preview.jpg'  },
  { id: 9, url: "https://youtu.be/Kb8CW3axqRE", photos:'https://assets.weforum.org/article/image/responsive_big_webp_Y_gEbktKbfcoPuCKdj4xXjJ1AX75XgEpkA-YAxE2aEc.webp'  },
  { id: 10, url: "https://youtu.be/LXb3EKWsInQ", photos:'https://www.onthegotours.com/blog/wp-content/uploads/2018/03/Costa-Ricas-cloud-forest-10-interesting-facts.jpg' },
  { id: 11, url: "https://youtu.be/Zv11L-ZfrSg", photos:'https://c4.wallpaperflare.com/wallpaper/374/719/577/it-s-time-to-rest-wallpaper-preview.jpg'  },
  { id: 12, url: "https://youtu.be/Kb8CW3axqRE", photos:'https://assets.weforum.org/article/image/responsive_big_webp_Y_gEbktKbfcoPuCKdj4xXjJ1AX75XgEpkA-YAxE2aEc.webp'  },
  { id: 13, url: "https://youtu.be/LXb3EKWsInQ", photos:'https://www.onthegotours.com/blog/wp-content/uploads/2018/03/Costa-Ricas-cloud-forest-10-interesting-facts.jpg' },
  { id: 14, url: "https://youtu.be/Zv11L-ZfrSg", photos:'https://c4.wallpaperflare.com/wallpaper/374/719/577/it-s-time-to-rest-wallpaper-preview.jpg'  },
  { id: 15, url: "https://youtu.be/Kb8CW3axqRE", photos:'https://assets.weforum.org/article/image/responsive_big_webp_Y_gEbktKbfcoPuCKdj4xXjJ1AX75XgEpkA-YAxE2aEc.webp'  },
];

const VideoPlay = () => {
    const [ data , setData ] = useState(urlLinks);
    const [ clickUrl , setClickUrl ] = useState("https://youtu.be/LXb3EKWsInQ");

    const handleUrl = (item) => {
        setClickUrl(item.url)
    }

  return (
    <div>
      <h1>Video Player</h1>
      <ReactPlayer url={clickUrl} />
      <div className="videos-collection">
        {data.map((item) => {
            return <li key={item.id}><img src={item.photos} alt="thumbnail" width="125" height="125" onClick={(e)=>handleUrl(item)} /></li>
        })}
      </div>
    </div>
  );
};

export default VideoPlay;
