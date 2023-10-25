import { skillDatas } from "../../services/datas/SkillsData";

function Skills() {
  return (
    <section id="skills" className="d-grid gap-3">
      <h2 id="skills" className="text-center">Yetkinlikler</h2>
      <div className="d-flex gap-4">
        {skillDatas.map((data, id) => {
          id = crypto.randomUUID();
          return (
            <div className="d-flex w-25" key={id}>
              <div className="d-grid gap-2 border border-0 shadow p-3 bg-body rounded">
                <div className="d-grid gap-1">
                  <img src={data.icon} alt={data.title} width={"60px"} />
                  <h5 className="m-0 fs-5">{data.title}</h5>
                </div>
                <div>
                  <p>{data.info}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
