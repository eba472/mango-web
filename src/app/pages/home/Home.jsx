import Keyboard from "./keyboard/Keyboard";
import TextToType from "./topPart/TextToType";
import TopPart from "./topPart/TopPart";

export default function Home() {
  return (
    <div>
      <TopPart />
      <TextToType />
      <Keyboard />
    </div>
  );
}
