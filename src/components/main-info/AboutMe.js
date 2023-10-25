import {
  BusinessDatas,
  EducationDatas,
} from "../../services/datas/AboutMeData";
import profilephoto from "../../photos/profile.png";
import bilgeadamphoto from "../../photos/bilgeadam.png";
import "bootstrap/dist/js/bootstrap.min.js";

function AboutMe() {
  return (
    <>
      <section className="d-grid gap-3">
        <h2 id="aboutme" className="text-center">
          Hakkımda
        </h2>
        <nav>
          <div
            className="nav nav-tabs justify-content-center"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link text-secondary active"
              id="nav-general-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-general"
              type="button"
              role="tab"
              aria-controls="nav-general"
              aria-selected="true"
            >
              Genel Bilgilerim
            </button>

            <button
              className="nav-link text-secondary"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="false"
            >
              Eğitim Hayatım
            </button>

            <button
              className="nav-link text-secondary"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Aldığım Kurslar
            </button>
            <button
              className="nav-link text-secondary"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              İş Deneyimlerim
            </button>
          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          {/* GENERAL INFORMATION */}
          <div
            className="tab-pane fade show active"
            id="nav-general"
            role="tabpanel"
            aria-labelledby="nav-general-tab"
            tabIndex="0"
          >
            <div>
              <div className="d-flex gap-3 border border-0 shadow p-3 bg-body rounded ">
                <div>
                  <img
                    className="rounded w-100"
                    src={profilephoto}
                    alt="course"
                    width={150}
                    height={300}
                  />
                </div>

                <div className="p-3">
                  <div className="d-grid gap-1">
                    <h4>Bülent Tayfur</h4>
                  </div>
                  <div className="d-flex flex-column justify-content-between pt-4">
                    <p>+90 534 893 79 61</p>
                    <p>bulenttayfur@gmail.com</p>
                    <p>Maltepe / İstanbul</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div
            className="tab-pane fade"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex="0"
          >
            <div
              className="d-grid gap-4"
              style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
            >
              {EducationDatas.map((data, id) => {
                id = crypto.randomUUID();
                return (
                  <div className="d-inline-flex" key={id}>
                    <div className="d-grid gap-3 justify-content-between border border-0 shadow p-3 bg-body rounded ">
                      <img
                        className="rounded w-100"
                        src={data.photo}
                        alt={data.title}
                        width={100}
                        height={200}
                      />
                      <div className="d-grid gap-1">
                        <h4 className="m-0">{data.title}</h4>
                        <p className="m-0">{data.info}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>{data.detail}</span>
                        <span>{data.time}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COURSES */}
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabIndex="0"
          >
            <div>
              <div className="d-flex gap-3 border border-0 shadow p-3 bg-body rounded ">
                <div>
                  <img
                    className="rounded w-100"
                    src={bilgeadamphoto}
                    alt="course"
                    width={150}
                    height={300}
                  />
                </div>

                <div className="p-3">
                  <div className="d-grid gap-1">
                    <h4 className="m-0">Bilge Adam Akademi</h4>
                    <h6 className="m-0">
                      Frontend Development & React.js - 2023
                    </h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <ul className="p-3">
                      <li>
                        HTML, CSS ve JavaScript ile React.js kullanılarak
                        Responsive tasarıma sahip projeler yapılması
                      </li>
                      <li>GitHub kullanıcı genel API entegrasyonu </li>
                      <li>
                        JavaScript Fetch API kullanarak, API sorgularının
                        yürütülmesi
                      </li>
                      <li>Genel API entegrasyonu </li>
                      <li>
                        React hooklarının kullanılarak API sorgularının
                        yürütülmesi - useState - useEffect vs.
                      </li>
                      <li>React Context ile durum yönetimi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BUSINESS */}
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabIndex="0"
          >
            <div
              className="d-grid gap-4"
              style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
            >
              {BusinessDatas.map((data, id) => {
                id = crypto.randomUUID();
                return (
                  <div className="d-inline-flex" key={id}>
                    <div className="d-grid gap-3 justify-content-between border border-0 shadow p-3 bg-body rounded ">
                      <img
                        className="rounded w-100"
                        src={data.photo}
                        alt={data.title}
                        width={100}
                        height={200}
                      />
                      <div className="d-grid gap-1">
                        <h4 className="m-0">{data.title}</h4>
                        <p className="m-0">{data.info}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>{data.start}</span>
                        <span>{data.time}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
