import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const FormSearch = ({ searchText }) => {

const [text, setText] = useState('')

  const onsubmit = (value) => {
    setText(value)
    searchText(value)
  }

  return (
    <div className="d-flex">
      <input
        type="search"
        placeholder="Search"
        className=" form-control me-2"
        aria-label="Search"
        value={text}
        onChange={e => onsubmit(e.target.value)}
      />

      <Button variant="outline-success" onClick={() =>setText('')}>
      Очистити
      </Button>
    </div>
  );
};
