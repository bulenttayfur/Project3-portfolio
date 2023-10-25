import { ProjectDatas } from "../../services/datas/ProjectsData";

function Projects() {
  return (
<section className="d-grid gap-3">
    <h2 id="projects" className="text-center ">Projeler</h2>
    <div
      className="d-grid gap-3"
      style={{ gridTemplateColumns: "repeat(3, 1fr)", position: "relative", textAlign: "center", color: "white" }}
    >
      {ProjectDatas.map((item, index) => (
        <div className="d-inline-flex" key={index}>
          <div className="position-relative">
            <img
              className="img-fluid rounded"
              style={{ filter: "brightness(70%)" }}
              src={item.photo}
              alt="project photo"
              height={30}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h3 className="fw-bold">{item.title}</h3>
              <p>{item.info}</p>
              <a class="btn btn-primary" href={item.url} target="_blank" role="button">Projeyi İncele</a>
   
            
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>

  );
}

export default Projects;
