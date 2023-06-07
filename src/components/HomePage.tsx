import Typewriter from 'typewriter-effect';

export default function HomePage() {
    return (
      <>
        <div className="home-container">
          <div className="home-text-section">
            <h1>Hello! I am 
              <Typewriter
                options={{
                  strings: ["Henry", "a developer", "an artist"],
                  autoStart: true,
                  loop: true,
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