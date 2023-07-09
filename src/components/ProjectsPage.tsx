import { useState } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Carousel from "react-bootstrap/Carousel"

export default function ProjectsPage() {
    const [show, setShow] = useState<"routerunner" | "wlth" | "close">("close")

    const handleClose = () => setShow("close")
    const handleShowRouteRunner = () => setShow("routerunner")
    const handleShowWlth = () => setShow("wlth")

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
            <Card className="project-card-view" onClick={handleShowRouteRunner}>
              <Card.Img variant="top" src={require("../images/projects/routerunner/routerunner_thumbnail.png")} className="project-card-image" />
              <Card.Body className="project-card-body" >
                <Card.Title className="project-card-title">
                  RouteRunner
                </Card.Title>
                <Card.Text className="project-card-text">
                  A mobile app that generates routes for runners, tracks their goals and stats, and has optional bots for users to race against
                </Card.Text>
                {/* <Button className="project-card-btn">Test</Button> */}
              </Card.Body>
            </Card>
          </div>

          <div className="project-item">
            <Card className="project-card-view" onClick={handleShowWlth}>
              <Card.Img variant="top" src={require("../images/projects/wlth/wlth_thumbnail.png")} className="project-card-image" />
              <Card.Body className="project-card-body">
                <Card.Title className="project-card-title">
                  WLTH ("Wealth")
                </Card.Title>
                <Card.Text className="project-card-text">
                  Budgeting app built for web
                </Card.Text>
                {/* <Button className="project-card-btn" onClick={(e) => {e.stopPropagation(); alert("TEST @") }}>Test</Button> */}
              </Card.Body>
            </Card>

            <Modal className="project-modal" show={show === "routerunner"} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>RouteRunner</Modal.Title>
              </Modal.Header>

              <Modal.Body style={{display: "flex", alignItems:"center"}}>
                <p style={{flex: 1}}>
                  This project was created by a team of four as part of a 15-week capstone class.
                  <br></br><br></br>Tools used: React Native, Node.js, Express.js, PostgreSQL, AWS
                </p>
                <Carousel style={{flex: "1"}} interval={null} >
                  <Carousel.Item>
                    <img src={require("../images/projects/routerunner/routerunner_1.png")} alt="Home page" />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={require("../images/projects/routerunner/routerunner_2.png")} alt="Profile/Preference page" />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={require("../images/projects/routerunner/routerunner_3.png")} alt="Stats page" />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={require("../images/projects/routerunner/routerunner_4.png")} alt="Activities page" />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={require("../images/projects/routerunner/routerunner_5.png")} alt="Routes page" />
                  </Carousel.Item>
                </Carousel>
              </Modal.Body>
              
              {/* <Modal.Footer></Modal.Footer> */}
            </Modal>

            <Modal className="project-modal" show={show === "wlth"} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>WLTH</Modal.Title>
              </Modal.Header>

              <Modal.Body style={{display: "flex", alignItems:"center"}}>
                <p style={{flex: 1}}>
                This project was created by a team of seven using the agile methodology.
                  <br></br><br></br>
                  Tools used: React, Node.js, Express.js, PostgreSQL
                </p>
                <Carousel style={{flex: "1"}} interval={null} >
                  <Carousel.Item>
                    <img src={require("../images/projects/wlth/wlth_1.png")} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={require("../images/projects/wlth/wlth_2.png")} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={require("../images/projects/wlth/wlth_3.png")} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={require("../images/projects/wlth/wlth_4.png")} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={require("../images/projects/wlth/wlth_5.png")} />
                  </Carousel.Item>
                </Carousel>
              </Modal.Body>
              
              {/* <Modal.Footer></Modal.Footer> */}
            </Modal>
          </div>
        </div>
      </div>
    )
}