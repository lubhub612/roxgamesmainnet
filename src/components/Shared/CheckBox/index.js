import React from "react";
import EnCheck from "@meronex/icons/en/EnCheck";
import { CheckBoxContainer, CheckBoxAppreance, CheckBoxLabel } from "./styles";

export default function CheckBox(props) {
  const { id, label, isChecked, onChange } = props;

  const handleClick = () => {
    if (!onChange) return;
    onChange(id);
  };

  return (
    <div>
      <CheckBoxContainer onClick={() => handleClick()}>
        <CheckBoxAppreance active={isChecked}>
          {isChecked && <EnCheck color="#AAFF26" />}
        </CheckBoxAppreance>
        <CheckBoxLabel active={isChecked}>{label}</CheckBoxLabel>
      </CheckBoxContainer>
    </div>
  );
}
