import { BlogDatas } from "../../services/datas/BlogsData";
import tick from "../../photos/tick.png";

function Blogs() {
  return (
    <>
      <section className="d-grid gap-3">
        <h2 id="blogs" className="text-center">Bloglar</h2>
        <div
          className="d-grid gap-4"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {BlogDatas.map((data, id) => {
            id = crypto.randomUUID();
            return (
              <div className="d-flex gap-3 shadow p-4 rounded" key={id}>
                <div className="d-flex align-items-start">
                  <img src={tick} alt="tick" width={50} />
                </div>

                <div className="d-flex flex-column justify-content-between">
                  <h4>{data.name}</h4>
                  <p>
                    {data.name} {data.comment}
                  </p>
                  <div className="d-flex gap-3">
                    <a
                      className="btn btn-primary "
                      href={data.url}
                      role="button"
                      target="_blank"
                    >
                      Makaleyi incele
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Blogs;
