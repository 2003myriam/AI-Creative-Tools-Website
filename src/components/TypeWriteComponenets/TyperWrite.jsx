import Typewriter from "typewriter-effect";
import "./TypeWriter.css";

function TyperWrite({ words }) {
  return (
    <span className="TypWriterStyle">
      <Typewriter
        options={{
          loop: true,
          delay: 80,
        }}
        onInit={(typewriter) => {
          words.forEach((word) => {
            typewriter
              .typeString(word)
              .pauseFor(1500)
              .deleteAll();
          });

          typewriter.start();
        }}
      />
    </span>
  );
}

export default TyperWrite;