import React from "react";
import SerchField from "../../UiComponents/SearchField";
import Select from "../../UiComponents/Select";
import Avatar from "../../UiComponents/Avatar";
import { selectLanguage } from "../../../helpers/GeneralObjects";
import LogOutIcon from "../../icons/LogOutIcon";
// delete this
const select2 = {
  showList: false,
  defaultSelectText: "Mark Nomi",
  countryList: [{ value: "LogOut", name: "Log Out", icon: <LogOutIcon /> }],
};
const DesktopHeader = () => {
  return (
    <div className="header_main">
      <SerchField />
      <div className="align_center">
        <Select
          optionsList={selectLanguage.countryList}
          defaultText={selectLanguage.defaultSelectText}
        />
        <Select
          optionsList={select2.countryList}
          defaultText={select2.defaultSelectText}
        >
          <Avatar url="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" />
        </Select>
      </div>
    </div>
  );
};

export default DesktopHeader;
