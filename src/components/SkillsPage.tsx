export default function SkillsPage() {
    return (
      <div className="skills-page">
        <h1>My Skills</h1>
        <div className="skills-grid">
          <div className="item item-1">
            <img src={require("../images/skills/cpp.png")} alt="C++" />
            <div className="middle">
              <div className="skill-text">C++</div>
            </div>
          </div>
          <div className="item item-2">
            <img src={require("../images/skills/react.png")} alt="React" />
            <div className="middle">
              <div className="skill-text">React</div>
            </div>
          </div>
          <div className="item item-3">
            <img src={require("../images/skills/javascript.png")} alt="JavaScript" />
            <div className="middle">
              <div className="skill-text">JavaScript</div>
            </div>
          </div>
          <div className="item item-4">
            <img src={require("../images/skills/python.png")} alt="Python" />
            <div className="middle">
              <div className="skill-text">Python</div>
            </div>
          </div>
          <div className="item item-5">
            <img src={require("../images/skills/html.png")} alt="HTML" />
            <div className="middle">
              <div className="skill-text">HTML</div>
            </div>
          </div>
          <div className="item item-6">
          <img src={require("../images/skills/css.png")} alt="CSS" />
            <div className="middle">
              <div className="skill-text">CSS</div>
            </div>
          </div>
          <div className="item item-7">
            <img src={require("../images/skills/typescript.png")} alt="TypeScript" />
            <div className="middle">
              <div className="skill-text">TypeScript</div>
            </div>
          </div>
          <div className="item item-8">
            <img src={require("../images/skills/photoshop.png")} alt="Photoshop" />
            <div className="middle">
              <div className="skill-text">Adobe Photoshop</div>
            </div>
          </div>
          <div className="item item-9">
            <img src={require("../images/skills/postgresql.png")} alt="PostgreSQL" />
            <div className="middle">
              <div className="skill-text">PostgreSQL</div>
            </div>
          </div>
          <div className="item item-10">
            <img src={require("../images/skills/nodejs.png")} alt="NodeJS" />
            <div className="middle">
              <div className="skill-text">Node.js</div>
            </div>
          </div>
          <div className="item item-11">
            <img src={require("../images/skills/git.png")} alt="Git" />
            <div className="middle">
              <div className="skill-text">Git</div>
            </div>
          </div>
          <div className="item item-12">
            <img src={require("../images/skills/java.png")} alt="Java" />
            <div className="middle">
              <div className="skill-text">Java</div>
            </div>
          </div>
        </div>
      </div>
    )
}