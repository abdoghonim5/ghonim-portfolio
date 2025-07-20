import { Award, BadgeCheck, GraduationCap } from "lucide-react";
function About() {
  return (
    <>
      <section id="about" className="p-10 text-center overflow-hidden">
        <p className="text-gray-500 text-sm">Get To Know</p>
        <h2 className="text-shadow-gray-900 text-5xl font-bold">About Me</h2>
        {/* about */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          <div className="mt-11 flex justify-center items-center md:block overflow-hidden">
            <figure className=" max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 overflow-hidden">
              <a href="#about">
                <img
                  data-aos="flip-left"
                  className="rounded-lg overflow-hidden"
                  src="https://res.cloudinary.com/deveuaooi/image/upload/v1752960360/IMG_20240722_021626_004_fqspdt.jpg"
                  alt="abdo ghonim photo"
                />
              </a>
            </figure>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            data-aos="flip-right"
          >
            {/* icons */}
            <div className="grid grid-cols-1 gap-5 mt-11 md:grid-cols-2  ">
              <div className="flex flex-col items-center ">
                <GraduationCap size={55} />
                <p>Tanta UniversityTanta University</p>
                <p>Bachelor of Commerce , Accounting</p>
                <p>Oct 2019 -Jul 2023</p>
              </div>
              <div className="flex flex-col items-center ">
                <Award size={55} />
                <p>Night Auditor Jaz Hotel Group</p>
                <p>Sharm El Sheikh, South Sinai, Egypt</p>
                <p>Dec 2023 - July 2024</p>
              </div>
            </div>
            <p className="text-gray-800 text-sm mt-4">
              I’m a Commerce graduate making a career shift into Frontend
              Development. With a passion for building visually appealing and
              functional web applications, I’ve been diving deep into HTML, CSS,
              and JavaScript. I am currently expanding my knowledge through
              various online courses, including Frontend Development and Java.
            </p>
            <p className="text-gray-800 text-sm mt-4">
              My goal is to become a strong software engineer, and I’m actively
              learning new frameworks and tools such as Bootstrap , Tailwind ,
              Typescript React and Next.js . I thrive on solving problems and
              bringing designs to life. I’m open to collaborating on projects
              and am eager to contribute to dynamic teams.
            </p>
          </div>
        </div>
        {/* experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-11 gap-15 overflow-hidden">
          <div
            className="flex flex-col items-center  p-5 hover:shadow-lg transition ease-in-out bg-gray-100 mt-11 rounded-lg scale-80 hover:scale-100 overflow-hidden"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h3 className="text-2xl font-stretch-50% mb-8  ">
              Front-end Development
            </h3>
            <div className="grid  grid-cols-2 items-baseline gap-4">
              <p className="flex flex-col justify-center items-center">
                <BadgeCheck size={32} color="#26a269" strokeWidth={2.75} />
                HTML
              </p>
              <p className="flex flex-col justify-center items-center">
                <BadgeCheck size={32} color="#26a269" strokeWidth={2.75} /> CSS
              </p>
              <p className="flex flex-col justify-center items-center">
                <BadgeCheck size={32} color="#26a269" strokeWidth={2.75} /> JS
              </p>
              <p className="flex flex-col justify-center items-center">
                <BadgeCheck size={32} color="#26a269" strokeWidth={2.75} />{" "}
                BootStrap
              </p>
              <p className="flex flex-col justify-center items-center">
                <BadgeCheck size={32} color="#26a269" strokeWidth={2.75} />{" "}
                Tailwind
              </p>
              <p className="flex flex-col justify-center items-center">
                <BadgeCheck size={32} color="#26a269" strokeWidth={2.75} />{" "}
                React
              </p>
            </div>
            <p className="text-shadow-md text-sm mt-10 text-gray-800">
              I will Continuo Learning
            </p>
          </div>
          <div
            className="flex flex-col items-center  p-5 hover:shadow-lg transition ease-in-out bg-gray-100 mt-11 rounded-lg scale-80 hover:scale-100 overflow-hidden "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h3 className="text-2xl font-stretch-50% mb-8  ">
              Tool & Libraries
            </h3>
            <div className="grid  grid-cols-2 items-baseline gap-4">
              <p className="flex flex-col justify-center items-center">
                <BadgeCheck size={32} color="#26a269" strokeWidth={2.75} /> Vite
              </p>
              <p className="flex flex-col justify-center items-center">
                <BadgeCheck size={32} color="#26a269" strokeWidth={2.75} /> NPM
              </p>
              <p className="flex flex-col justify-center items-center">
                <BadgeCheck size={32} color="#26a269" strokeWidth={2.75} />{" "}
                Axios
              </p>
              <p className="flex flex-col justify-center items-center">
                <BadgeCheck size={32} color="#26a269" strokeWidth={2.75} />{" "}
                lucide-react
              </p>
              <p className="flex flex-col justify-center items-center">
                <BadgeCheck size={32} color="#26a269" strokeWidth={2.75} />{" "}
                FlowBite
              </p>
              <p className="flex flex-col justify-center items-center">
                <BadgeCheck size={32} color="#26a269" strokeWidth={2.75} />{" "}
                Git/GitHub
              </p>
            </div>
            <p className="text-shadow-md text-sm mt-10 text-gray-800">
              I will Continuo Learning
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
