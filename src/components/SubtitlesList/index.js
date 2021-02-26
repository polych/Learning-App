import React from "react";
import { useSelector } from "react-redux";
import SubtitleItem from "../SubtitleItem";
import { fiterSubtitles } from "../../helpers/videoPage";
import "./index.scss";

const SubtitlesList = ({ videoTime = 0 }) => {
  const subtitles = useSelector((state) => state.video.subtitles);
  return (
    <div className="subtitle_list">
      <ul>
        {subtitles &&
          fiterSubtitles(subtitles, videoTime).map((el, index) => (
            <SubtitleItem
              text={el.text}
              time={el.time}
              key={el.text + el.time.dur}
              activeClass={index == 0 ? "active_item" : ""}
            />
          ))}
      </ul>
    </div>
  );
};

export default SubtitlesList;
