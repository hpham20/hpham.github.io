import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export default function ProjectsPage() {
    return (
      <div className="projects-page">
        <h1>My Projects</h1>
        <div className="projects-grid">

          {/* <div className="project-item project-item-1">
            RouteRunner
          </div>

          <div className="project-item project-item-2">
            WLTH
          </div> */}
          <div className="project-item">
            <Card className="project-card-view" style={{ width: "15rem" }}>
              <Card.Img variant="top" src={require("../images/projects/routerunner/routerunner_thumbnail.png")} style={{ width: "15rem", borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }} />
              <Card.Body>
                <Card.Title>RouteRunner</Card.Title>
                <Card.Text>A mobile app that generates routes for runners</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="project-item">
            <Card className="project-card-view" style={{ width: "15rem" }} onClick={() => { console.log("TEST") }}>
              <Card.Img variant="top" src={require("../images/projects/wlth/wlth_thumbnail.png")} style={{ width: "15rem", borderRadius: "1rem" }} />
              <Card.Body>
                <Card.Title>WLTH</Card.Title>
                <Card.Text>Budgeting app built from web</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    )
}