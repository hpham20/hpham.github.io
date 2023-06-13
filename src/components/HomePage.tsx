import Typewriter from "typewriter-effect"

export default function HomePage() {
    return (
      <>
        <div className="home-container">
          <div className="home-text-section">
            <h1>
              <Typewriter
                onInit={(typewriter) => {
                  const words = ["a developer", "an artist", "Henry"]
                  typewriter.typeString("Hello! I am ")
                
                  for (let index = 0; index < words.length-1; index++) {
                    typewriter.typeString(words[index]).pauseFor(500).deleteChars(words[index].length)
                  }
                  typewriter.typeString("Henry")
                  typewriter.start()
                }}
              />
            </h1>
            <p>
              I have a CS degree from Texas A&M University.
              Passionate about coding and technology, I have experience working with languages like C++, Python, and JavaScript.
            </p> 
            <p>
              In addition, I enjoy drawing and using Photoshop. 
              More importantly, I'm always trying to learn more.
            </p>
          </div>
          <div className="home-image-section">
            <img src={require("../images/Me_Doodle.jpg")} alt="Me!" />
          </div>
        </div>
      </>
    )
}