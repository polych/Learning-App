import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubtitles, getVideoLang } from "../../store/actions/videoActions";
import "./index.scss";

const VideoLanguageSelect = ({ id, langModalShow }) => {
  const dispatch = useDispatch();
  const { languages } = useSelector((state) => state.video.subtitles.languages);
  const handleClick = (event) => {
    dispatch(getVideoLang(id, event.target.value));
    langModalShow(false);
  };
  return (
    <div className="video_lang_select_wrap">
      <div className="video_lang_select">
        <h3>Choose native language of the video </h3>
        <ul>
          {languages &&
            languages.map((el) => (
              <li key={el.title + el.code}>
                <button type="button" value={el.code} onClick={handleClick}>
                  {el.title}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoLanguageSelect;
