import React from "react";
import cl from "classnames";
import st from "./AppInput.module.scss";

export const AppInput = ({
  errors = {},
  name = "",
  label = "",
  register,
  textArea,
  ...props
}) => {
  let error = !!errors[name];

  return (
    <label htmlFor={name} className={cl(st.inp, { [st.error]: error })}>
      {textArea ? (
        <textarea {...props} id={name} {...register} placeholder={label}  />
      ) : (
        <input {...props} id={name} {...register} placeholder="&nbsp;" />
      )}
      <span className={st.label}>
        {!error ? label : errors[name]?.message}{" "}
      </span>
      <span className={st.focusBg}></span>
    </label>
  );
};
