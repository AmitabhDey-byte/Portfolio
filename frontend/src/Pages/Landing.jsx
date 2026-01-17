import TextType from "../component/TextType";

export default function Landing() {

  

  return (
    <>
 <TextType 
  text={["Hello There!", "I'm Amitabh Dey", "Welcome to My Portfolio"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>
<div className="content">
  <h3>
    A creative developer crafting beautiful, functional digital experiences that blend design and technology seamlessly.
  </h3>
   </div>
   <div className="links">
    <a href="/Projects" className="btn">View My Projects</a>
    <a href="/About" className="btn-2">Learn More</a>
   </div>
    </>
  );
}
