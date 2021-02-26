import React from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { focusCaptions } from "../../store/actions/videoActions";

const Captions = ({ videoTime, videoPlay }) => {
  const dispatch = useDispatch();
  const subtitles = useSelector((state) => state.video.subtitles);
  if (!subtitles) {
    return <></>;
  }
  const func = (event) => {
    const text = window.getSelection();
    dispatch(focusCaptions(text.toString()));
  };
  const funcStop = () => {
    videoPlay();
  };
  const captions = subtitles.find(
    (el) =>
      videoTime >= Number(el.time.start) &&
      videoTime <= Number(el.time.start) + Number(el.time.dur)
  );

  return (
    <p className="captions">
      <span onSelect={func} onMouseDown={funcStop} onMouseUp={func}>
        {captions && captions.text}
      </span>
    </p>
  );
};

export default Captions;
