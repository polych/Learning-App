import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import ReactPlayer from "react-player";
import SubtitlesList from "../../components/SubtitlesList";
import Tooltip from "../UiComponents/Tooltip";
import TranslateModal from "../../components/TranslateModal";
import { useDispatch, useSelector } from "react-redux";
import { getSubtitles } from "../../store/actions/videoActions";
import Captions from "../Captions";

const message =
  "To extend the selection by few words press and hold 'space' + 'right arrow'";

const VideSection = ({ id }) => {
  const ref = useRef(null);
  const { focusCaptions } = useSelector((state) => state.video);
  const [state, setState] = useState({
    playingTime: 0,
    playing: false,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubtitles(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const progressFunc = (props) => {
    setState((prevState) => {
      return {
        ...prevState,
        playingTime: props.playedSeconds,
      };
    });
  };
  const videoPlay = (param) => () => {
    setState({ ...state, playing: param });
  };
  return (
    <div className="video_wrap">
      <div className="video_section">
        {console.log(state.playing)}
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls={true}
          width="100%"
          onProgress={progressFunc}
          playing={state.playing}
          onPlay={videoPlay(true)}
          config={{
            youtube: {
              playerVars: {
                fs: 0,
                modestbranding: 1,
                rel: 0,
              },
            },
          }}
          ref={ref}
        />
        <Captions videoTime={state.playingTime} videoPlay={videoPlay(false)} />
        {focusCaptions && (
          <TranslateModal
            captions={focusCaptions}
            videoPlay={videoPlay(true)}
          />
        )}
      </div>
      <SubtitlesList videoTime={state.playingTime} />
    </div>
  );
};
export default VideSection;
