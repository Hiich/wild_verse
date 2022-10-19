import { useState } from "react";
import playbutton from "../images/play-button.png";
import pausebutton from "../images/push-button.png";
import nft59 from "../videos/Nft_59.m4v";
import nft79 from "../videos/Nft_79.m4v";
import nft9 from "../videos/Nft_9.m4v";
import nft7 from "../videos/Nft_7.m4v";
import nft72 from "../videos/Nft_72.m4v";
import nft63 from "../videos/Nft_63.m4v";
import nft120 from "../videos/Nft_120.m4v";
import nft129 from "../videos/Nft_129.m4v";
import nft2 from "../videos/wild_nft_2.m4v";
import HerSongPoster from "../images/her_song_poster.png";

const useVideo = () => {
  const [activeListItemName, setActiveListItemName] = useState("first");

  const handleOnTogglePlaying = (itemId, vidId, trackToggleImg) => {
    let getCurrentTrackImage = document.getElementById(trackToggleImg);
    let getCurrentVideo = document.getElementById(vidId);
    let allTrackImageElements = document.querySelectorAll(
      ".playbutton.nft_track_img"
    );
    let allVideos = document.querySelectorAll(".nft_video_track");

    allTrackImageElements.forEach((element) => {
      if (element !== getCurrentTrackImage) {
        element.src = playbutton;
      }
    });

    allVideos.forEach((element) => {
      if (element !== getCurrentVideo) {
        element?.pause();
        element?.load();
      }
    });

    if (getCurrentVideo?.paused) {
      getCurrentVideo.play();
      getCurrentVideo.controls = true;
      getCurrentTrackImage.src = pausebutton;
    } else {
      getCurrentVideo.pause();
      getCurrentVideo.controls = false;
      getCurrentTrackImage.src = playbutton;
    }
    setActiveListItemName(itemId);
  };

  const handleOnTrackVideoPlay = (e, trackImg) => {
    let image = document.getElementById(trackImg);
    image.src = pausebutton;
    e.target.controls = true;
  };

  const handleOnTrackVideoPause = (e, trackImg) => {
    let image = document.getElementById(trackImg);
    image.src = playbutton;
    e.target.controls = false;
  };
  const handleOnTrackEnded = (imgId, e) => {
    let image = document.getElementById(imgId);
    image.src = playbutton;
    e.target.controls = false;
  };
  const videoArrayForSongs = [
    {
      listitem_id: "first",
      list_video_id: "vid_first",
      track_name: "Her",
      video_src: nft59,
      play_button_id: "track_img_1",
      component: (
        <video
          poster={HerSongPoster}
          playsInline={true}
          preload="metadata"
          src={nft59}
          id="vid_first"
          className="nft_video_track"
          onEnded={(e) => handleOnTrackEnded("track_img_1", e)}
        />
      ),
    },
    {
      listitem_id: "second",
      list_video_id: "vid_second",
      track_name: "Him",
      video_src: nft79,
      play_button_id: "track_img_2",
      component: (
        <video
          playsInline={true}
          preload="metadata"
          src={nft79}
          id="vid_second"
          className="nft_video_track"
          onEnded={(e) => handleOnTrackEnded("track_img_2", e)}
        />
      ),
    },
    {
      listitem_id: "third",
      list_video_id: "vid_third",
      track_name: "Sex Pixels",
      video_src: nft9,
      play_button_id: "track_img_3",
      component: (
        <video
          playsInline={true}
          preload="metadata"
          src={nft9}
          id="vid_third"
          className="nft_video_track"
          onEnded={(e) => handleOnTrackEnded("track_img_3", e)}
        />
      ),
    },
    {
      listitem_id: "fourth",
      list_video_id: "vid_fourth",
      track_name: "3ème oeil",
      video_src: nft2,
      play_button_id: "track_img_4",
      component: (
        <video
          playsInline={true}
          preload="metadata"
          src={nft2}
          id="vid_fourth"
          className="nft_video_track"
          onEnded={(e) => handleOnTrackEnded("track_img_4", e)}
        />
      ),
    },
    {
      listitem_id: "fifth",
      list_video_id: "vid_fifth",
      track_name: "Bag of bones",
      video_src: nft7,
      play_button_id: "track_img_5",
      component: (
        <video
          playsInline={true}
          preload="metadata"
          src={nft7}
          id="vid_fifth"
          className="nft_video_track"
          onEnded={(e) => handleOnTrackEnded("track_img_5", e)}
        />
      ),
    },
    {
      listitem_id: "sixth",
      list_video_id: "vid_sixth",
      track_name: "4 / 20",
      video_src: nft72,
      play_button_id: "track_img_6",
      component: (
        <video
          playsInline={true}
          preload="metadata"
          src={nft72}
          id="vid_sixth"
          className="nft_video_track"
          onEnded={(e) => handleOnTrackEnded("track_img_6", e)}
        />
      ),
    },
    {
      listitem_id: "seventh",
      list_video_id: "vid_seventh",
      track_name: "Take a trip",
      video_src: nft63,
      play_button_id: "track_img_7",
      component: (
        <video
          playsInline={true}
          preload="metadata"
          src={nft63}
          id="vid_seventh"
          className="nft_video_track"
          onEnded={(e) => handleOnTrackEnded("track_img_7", e)}
        />
      ),
    },
    {
      listitem_id: "eighth",
      list_video_id: "vid_eighth",
      track_name: "Bric a brac",
      video_src: nft120,
      play_button_id: "track_img_8",
      component: (
        <video
          playsInline={true}
          preload="metadata"
          src={nft120}
          id="vid_eighth"
          className="nft_video_track"
          onEnded={(e) => handleOnTrackEnded("track_img_8", e)}
        />
      ),
    },
    {
      listitem_id: "ninth",
      list_video_id: "vid_ninth",
      track_name: "Vinyl maniac",
      video_src: nft129,
      play_button_id: "track_img_9",
      component: (
        <video
          playsInline={true}
          preload="metadata"
          src={nft129}
          id="vid_ninth"
          className="nft_video_track"
          onEnded={(e) => handleOnTrackEnded("track_img_9", e)}
        />
      ),
    },
  ];

  return {
    activeListItemName,
    handleOnTogglePlaying,
    handleOnTrackVideoPlay,
    handleOnTrackVideoPause,
    VIDEO_ARRAY_FOR_SONGS: videoArrayForSongs,
  };
};

export default useVideo;
