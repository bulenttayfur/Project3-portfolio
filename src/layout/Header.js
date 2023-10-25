import logo from "../photos/logo.png";

const Header = () => {
  return (
    <>
      <div id="header" className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <div>
            <a href="#header">
              <img className="m-0" src={logo} alt="logo" height="80px" />
            </a>
          </div>
          <div>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link active text-secondary"
                  aria-current="page"
                  href="#header"
                >
                  Anasayfa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#aboutme">
                  Hakkımda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#skills">
                  Yetkinlikler
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#projects">
                  Projeler
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#blogs">
                  Bloglar
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a href="#footer">
              <button className="btn btn-primary rounded-pill">İletişim</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
