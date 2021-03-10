import React from "react";
import SerchField from "../../UiComponents/SearchField";
import Select from "../../UiComponents/Select";
import Avatar from "../../UiComponents/Avatar";
import LogOutIcon from "../../icons/LogOutIcon";
import LangSelect from "../../LangSelect";
// delete this
const select2 = {
  showList: false,
  defaultSelectText: "Mark Nomi",
  arr: [{ value: "LogOut", label: "Log Out", icon: <LogOutIcon /> }],
};
const DesktopHeader = () => {
  return (
    <div className="header_main">
      <SerchField />
      <div className="align_center">
        <LangSelect />
        <Select
          optionsList={select2.arr}
          defaultText={select2.defaultSelectText}
        >
          <Avatar url="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" />
        </Select>
      </div>
    </div>
  );
};

export default DesktopHeader;
