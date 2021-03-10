import React, { useEffect } from "react";
import Select from "../UiComponents/Select";
import { useDispatch, useSelector } from "react-redux";
import { fetchLanguages, setLanguage } from "../../store/actions/general";

const LangSelect = () => {
  const dispatch = useDispatch();
  const { languages, language } = useSelector((state) => state.general);
  useEffect(() => {
    dispatch(fetchLanguages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectAction = (el) => {
    dispatch(setLanguage(el));
  };
  return (
    <>
      {languages && (
        <Select
          optionsList={languages}
          defaultText={language.name}
          selectAction={selectAction}
        />
      )}
    </>
  );
};

export default LangSelect;
