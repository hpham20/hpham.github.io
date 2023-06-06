export default function HomePage() {
    return (
      <div>
        <div className="home-container">
          <div className="home-text-section">
            <h1>Welcome!</h1>
            <p>My name is Henry. I have a Bachelor's degree in Computer Science from Texas A&M University.  Passionate about coding and technology, I have experience working with languages like C++, Python, JavaScript, ReactJS</p>
          </div>
          <div className="home-image-section">
            <img src={require("../images/Me_Doodle.jpg")} alt="Me!" />
          </div>
        </div>
      </div>
    )
}