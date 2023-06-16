export default function PageNotFound() {
    return (
      <div>
        <div style={{ textAlign: "center", display: "flex", flexDirection:"column", justifyContent: "center", alignItems:"center" }}>
          <h1 style={{ color: "white" }}>PAGE NOT FOUND!</h1>
          <img style={{ width: "500px"}} src={require("../images/UnderConstruction.png")} alt="Under construction!" />
        </div>
      </div>
    )
}