import Card from "react-bootstrap/Card"

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

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={require("../images/Me_Doodle.jpg")} />
            <Card.Body>
              <Card.Title>RouteRunner</Card.Title>
              <Card.Text>test</Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>
    )
}