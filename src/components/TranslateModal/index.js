import React from "react";
import { useDispatch } from "react-redux";
import { TextTranslateSucces } from "../../store/actions/videoActions";
import "./index.scss";

const TranslateModal = ({ captions, videoPlay, translatedCaptions }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(TextTranslateSucces(null, null));
    videoPlay();
  };
  return (
    <div className="translate_modal">
      <h3>{captions}</h3>
      <p className="translate_modal_title">Translation</p>
      <p>{translatedCaptions}</p>
      <div className="translate_modal_btns">
        <button type="button" onClick={handleClick}>
          Cancel
        </button>
        <button type="button">Save</button>
      </div>
    </div>
  );
};

export default TranslateModal;
