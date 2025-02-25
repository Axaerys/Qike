import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <>
      <footer className="max-container sm:padding-x">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <img
                src={footerLogo}
                alt="Nike Footer Logo"
                width={150}
                height={46}
              />
            </a>
            <p className="mt-6 text-white-400 text-base font-montserrat leading-7 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              your perfect size in store. <br /> Get Rewards!
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((icon) => (
                <button className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:scale-95 td">
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section) => (
              <div key={section}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray td "
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex justify-start items-center gap-2 font-montserrat text-center cursor-pointer">
            <img
              src={copyrightSign}
              alt="Copyright sign"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <p>Copyright. All Rights Reserved.</p>
          </div>
          <p className="font-montserratcursor-pointer">Terms & Conditions</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
