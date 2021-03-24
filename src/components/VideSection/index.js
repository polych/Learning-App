import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import ReactPlayer from "react-player";
import SubtitlesList from "../../components/SubtitlesList";
import TranslateModal from "../../components/TranslateModal";
import { useDispatch, useSelector } from "react-redux";
import { getSubtitles } from "../../store/actions/videoActions";
import Captions from "../Captions";
import VideoLanguageSelect from "../VideoLanguageSelect";
import LangBtn from "../UiComponents/LangBtn";

const VideSection = ({ id }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const {
    video: {
      focusCaptions,
      translatedCaptions,
      subtitles: {
        languages: { original_lang },
      },
    },
    general: { language },
  } = useSelector((state) => state);
  const [state, setState] = useState({
    playingTime: 0,
    playing: false,
  });
  const [langModal, setlangModal] = useState(true);
  const langModalShow = (val) => {
    setlangModal(val);
  };
  useEffect(() => {
    dispatch(getSubtitles(id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language.id]);
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
        <LangBtn val={original_lang} langModalShow={langModalShow} />
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls={true}
          className="video_block"
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
        {focusCaptions && translatedCaptions && (
          <TranslateModal
            captions={focusCaptions}
            translatedCaptions={translatedCaptions}
            videoPlay={videoPlay(true)}
          />
        )}
        {langModal && (
          <VideoLanguageSelect id={id} langModalShow={langModalShow} />
        )}
      </div>
      <SubtitlesList videoTime={state.playingTime} />
    </div>
  );
};
export default VideSection;
