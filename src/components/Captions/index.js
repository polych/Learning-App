import React from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchTextTranslate } from "../../store/actions/videoActions";
import { captionText } from "../../helpers/videoPage";

const Captions = ({ videoTime = 0, videoPlay }) => {
  const dispatch = useDispatch();
  const { subtitlesOriginal } = useSelector((state) => state.video.subtitles);
  if (!subtitlesOriginal) {
    return <></>;
  }
  const func = (event) => {
    const text = window.getSelection();
    dispatch(fetchTextTranslate(text.toString()));
  };
  const funcStop = () => {
    videoPlay();
  };
  return (
    <p className="captions">
      <span onSelect={func} onMouseDown={funcStop} onMouseUp={func}>
        {captionText(subtitlesOriginal, videoTime)}
      </span>
    </p>
  );
};

export default Captions;
