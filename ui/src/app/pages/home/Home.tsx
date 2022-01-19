import Keyboard from "./keyboard/Keyboard";
import TextToType from "./topPart/TextToType";
import TopPart from "./topPart/TopPart";
import React from "react";

export default function Home() {
  return (
    <div>
      <TopPart />
      <TextToType />
      <Keyboard />
    </div>
  );
}
