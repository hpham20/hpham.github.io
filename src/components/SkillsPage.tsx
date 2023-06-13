export default function SkillsPage() {
    return (
      <div className="skills-page">
        <h1>My Skills</h1>
        <div className="skills-grid">
          <div className="item item-1">
            <img src={require("../images/skills/cpp.png")} alt="C++" />
          </div>
          <div className="item item-2">
            <img src={require("../images/skills/python.png")} alt="Python" />
          </div>
          <div className="item item-3">
            <img src={require("../images/skills/javascript.png")} alt="JavaScript" />
          </div>
          <div className="item item-4">
            <img src={require("../images/skills/react.png")} alt="React" />
          </div>
          <div className="item item-5">React Native</div>
          <div className="item item-6">
            <img src={require("../images/skills/photoshop.png")} alt="Photoshop" />
          </div>
          <div className="item item-7">
            <img src={require("../images/skills/postgresql.png")} alt="PostgreSQL" />
          </div>
          <div className="item item-8">
            <img src={require("../images/skills/java.png")} alt="Java" />
          </div>
          <div className="item item-9">
            <img src={require("../images/skills/typescript.png")} alt="TypeScript" />
          </div>
          <div className="item item-10">
            <img src={require("../images/skills/nodejs.png")} alt="NodeJS" />
          </div>
          <div className="item item-11">
            <img src={require("../images/skills/git.png")} alt="Git" />
          </div>
          <div className="item item-12">
            Express
          </div>
        </div>
      </div>
    )
}