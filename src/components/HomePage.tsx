import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';

export default function HomePage() {
    const [text]:any = useTypewriter({
      words: ['Henry', 'a developer', 'an artist'],
      loop: false,
      typeSpeed: 80,
      deleteSpeed: 50,
      delaySpeed: 1500
    })
    return (
      <>
        <div className="home-container">
          <div className="home-text-section">
            <h1>Hello! I am {text}<Cursor />
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