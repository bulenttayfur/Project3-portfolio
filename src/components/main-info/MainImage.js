import mainphoto from "../../photos/mainphoto.png";

const MainImage = () => {
  return (
    <section
      className="d-flex flex-column gap-3"
      style={{ position: "relative", textAlign: "center", color: "white" }}
    >
      <img
        className="img-fluid rounded"
        style={{ filter: "brightness(70%)" }}
        src={mainphoto}
        alt="mainphoto"
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
        <h2 className="fw-bold">MERHABA</h2>
        <div className="d-flex align-items-center gap-3">
          <p>Ben</p>
          <h1 className="fw-bold">BÜLENT TAYFUR</h1>
        </div>
        <p className="fw-bold">Front-End Developer</p>
      </div>
    </section>
  );
};
export default MainImage;
