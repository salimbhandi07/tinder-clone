import { IconButton } from "@material-ui/core";
import { Close, Favorite, FlashOn, Replay, StarRate } from "@material-ui/icons";
import React from "react";
import "./SwipeButton.css";

function SwipeButton() {
  return (
    <div className="swipeButton">
      <IconButton className="swipeButton__repeat">
        <Replay />
      </IconButton>
      <IconButton className="swipeButton__left">
        <Close />
      </IconButton>
      <IconButton className="swipeButton__star">
        <StarRate />
      </IconButton>
      <IconButton className="swipeButton__right">
        <Favorite />
      </IconButton>
      <IconButton className="swipeButton__lighting">
        <FlashOn />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
