import phone from "../photos/phone.png";
import mail from "../photos/mail.png";
import whatsapp from "../photos/whatsapp.png";
import linkedin from "../photos/linkedin.png";
import instagram from "../photos/instagram.png";
import twitter from "../photos/twitter.png";
import thread from "../photos/thread.png";

const Footer = () => {
  return (
    <>
      <div id="footer" className="container">
        <div
          className="d-flex justify-content-between align-items-center mb-5 rounded px-3 py-5"
          style={{ backgroundColor: "#CFE2FF" }}
        >
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
          <div className="d-flex">
            <a className="nav-link px-2" href="tel:+905348937961">
              <img
                className="rounded-circle"
                src={phone}
                width={50}
                alt="phone"
              />
            </a>

            <a href="mailto:bulenttayfur@gmail.com" className="nav-link px-2">
              <img
                className="rounded-circle"
                src={mail}
                width={50}
                alt="mail"
              />
            </a>

            <a className="nav-link px-2" href="https://wa.me/905348937961" target="_blank">
              <img
                className="rounded-circle"
                src={whatsapp}
                width={50}
                alt="whatsapp"
              />
            </a>

            <a className="nav-link px-2" href="https://www.linkedin.com/in/bülent-tayfur" target="_blank">
              <img
                className="rounded-circle"
                src={linkedin}
                width={50}
                alt="linkedin"
              />
            </a>

            <a className="nav-link px-2" href="https://www.instagram.com/bulenttayfur/?next=%2Fajans_step%2F" target="_blank">
              <img
                className="rounded-circle"
                src={instagram}
                width={50}
                alt="instagram"
              />
            </a>

            <a className="nav-link px-2" href="https://twitter.com/blnttyfr" target="_blank">
              <img
                className="rounded-circle"
                src={twitter}
                width={50}
                alt="twitter"
              />
            </a>

            <a className="nav-link px-2" href="https://www.threads.net/@bulenttayfur" target="_blank">
              <img
                className="rounded-circle"
                src={thread}
                width={50}
                alt="threads"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
