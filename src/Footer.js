import logoFace from "./logo-face.svg";
import logoInst from "./logo-inst.svg";
import logoYout from "./logo-youtube.svg";

const Footer = () => {
  return (
    <div className="text-center text-white mt-5">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn text-white btn-floating m-1"
            target="_blank"
            href="https://facebook.com/"
            role="button"
          >
            <img src={logoFace} alt="logo" />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            target="_blank"
            href="https://www.youtube.com/"
            role="button"
          >
            <img src={logoYout} alt="logo" />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            target="_blank"
            href="https://www.instagram.com/"
            role="button"
          >
            <img src={logoInst} alt="logo" />
          </a>
        </section>
      </div>

      <div className="text-center p-3 footer">
        <a className="text-white" href="">
          © 2023 Copyright: David Angel
        </a>
      </div>
    </div>
  );
};

export default Footer;
