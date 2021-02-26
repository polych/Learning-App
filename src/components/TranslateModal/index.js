import React from "react";
import { useDispatch } from "react-redux";
import { focusCaptions } from "../../store/actions/videoActions";

import "./index.scss";

const TranslateModal = ({ captions, videoPlay }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(focusCaptions(false));
    videoPlay();
  };
  return (
    <div className="translate_modal">
      <h3>{captions}</h3>
      <p className="translate_modal_title">Translation</p>
      <p>Отопление наш дом, и мы нагреваем нашу воду, а затем</p>
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
