import React from "react";
import "./search-box.styles.scss";

export const Boxsearch = ({ placeholder, handleChange }) => (
  <div className="form__group field">
  <input className="form__field" type='search' placeholder={placeholder} onChange={handleChange} />
  <label className="form__label">{placeholder}</label>
  </div>
)