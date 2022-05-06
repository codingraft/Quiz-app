import { Button } from "@mui/material";
import React, { useEffect } from "react";
import "./Result.css";
import { useNavigate } from "react-router-dom";

const Result = ({ name, score }) => {
  const history = useNavigate();
  useEffect(() => {
    if (!name) {
      history("/");
    }
  }, [name, history]);
  return (
    <div className="result">
      <span className="title">Final Score: {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to home page
      </Button>
    </div>
  );
};

export default Result;
