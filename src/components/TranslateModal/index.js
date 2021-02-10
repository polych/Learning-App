import React from "react";
import "./index.scss";

const TranslateModal = () => {
  return (
    <div className="translate_modal">
      <h3>Heating our house and we’re heating up our water and then on</h3>
      <p className="translate_modal_title">Translation</p>
      <p>Отопление наш дом, и мы нагреваем нашу воду, а затем</p>
      <div className="translate_modal_btns">
        <button type="button">Cancel</button>
        <button type="button">Save</button>
      </div>
    </div>
  );
};

export default TranslateModal;
