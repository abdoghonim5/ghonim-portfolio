import { Github, Linkedin, ArrowUp } from "lucide-react";
import resume from "../assets/Abdo-Ghonim-Cv.pdf";
const Home = () => {
  return (
    <>
      <section
        id="home"
        className="grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      >
        {/* image */}
        <div className="p-32 flex justify-center items-center">
          <img
            data-aos="fade-right"
            className="rounded-full w-4xl h-2/3 lg:w-96 lg:h-96 object-cover mb-6"
            src="https://res.cloudinary.com/deveuaooi/image/upload/v1752960389/Picsart_25-01-18_08-13-44-969_a1lr0d.jpg"
            alt="image description"
          />
        </div>
        {/* content */}

        <div
          className="32 flex flex-col justify-center items-center gap-2"
          data-aos="fade-left"
        >
          <p className="mb-4 text-lg font-normal text-gray-700">Hello I'm</p>
          <h1 className="mb-4 text-5xl  leading-none text-gray-900 ">
            Abdo Ghonim
          </h1>
          <p className="mb-4 text-lg font-normal text-gray-700">
            React.Js Front-End Developer
          </p>
          {/* buttons */}
          <div className="flex gap-3">
            <a
              href={resume}
              download="Abdo-Ghonim-Cv.pdf"
              target="_blank"
              className="ring-1 p-3 rounded-full px-6 mb-4 text-lg font-normal hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="
            
              ring-1 p-3 rounded-full px-6 mb-4 text-lg font-normal bg-gray-800 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
          {/* icons */}
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/theghonim/" target="_blank">
              <Linkedin />
            </a>
            <a href="https://github.com/abdoghonim5" target="_blank">
              <Github />
            </a>
          </div>
        </div>
      </section>
      {/* Back to Top Arrow (hidden in Home section) */}
      <a
        href="#home"
        className="fixed bottom-8 right-8 z-50 opacity-50 hover:opacity-80 transition-opacity duration-200 bg-white rounded-full p-2 shadow-lg border border-black md:block hidden"
        style={{ pointerEvents: "auto" }}
        aria-label="Back to Home"
      >
        <ArrowUp size={22} className="text-black" />
      </a>
    </>
  );
};
export default Home;
