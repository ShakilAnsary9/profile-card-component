import "./styles.css";
import background_top from "../src/images/bg-pattern-top.svg";
import background_bottom from "../src/images/bg-pattern-bottom.svg";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <div className="background">
      <div
        className="bg-pattern-top"
        style={{ backgroundImage: `url(${background_top})` }}
      ></div>
      <div
        className="bg-pattern-bottom"
        style={{ backgroundImage: `url(${background_bottom})` }}
      ></div>
      <ProfileCard
        name="Shakil Ansary"
        age="21"
        city="India"
        followers="80K"
        likes="803K"
        photos="1.4K"
      ></ProfileCard>
    </div>
  );
}
