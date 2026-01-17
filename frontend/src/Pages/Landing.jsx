import TextType from "../component/TextType";
import "../Page-styling/Landing.css";
export default function Landing() {
  return (
    <div className="page">
 

      <div className="page-content">
        <TextType
          text={["Hello There!", "I'm Amitabh Dey", "Welcome to My Portfolio"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="|"
        />

        <p>
          A creative developer crafting beautiful, functional digital<br/>
          experiences that blend design and technology seamlessly.
        </p>

        <div className="links">
          <a href="/Projects" className="btn">View My Projects</a>
          <a href="/About" className="btn-2">Learn More</a>
        </div>
      </div>
    </div>
  );
}
