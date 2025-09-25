import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/image.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
  <p className="headtext"> I'm Beselamu Demissie </p>
  <p className="subtext">
    Over the last 12 years, I specialized in security analysis, governance, and risk 
    management — helping organizations strengthen defenses, ensure compliance, 
    and safeguard critical systems.
  </p>
</div>

          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CYBER SECURITY
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Cryptography"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Network security"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Ethical hacking"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="OWASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="VAPT"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/firewall.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/kali.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
          <p className="headtext">Global Security Expertise</p>
<p className="subtext">
  Gained hands-on experience in cybersecurity practices across multiple countries, 
  including Dubai, China, and India, collaborating on threat analysis, risk assessment, 
  and security solutions.
</p>

          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
  <div className="flex flex-col items-center justify-center gap-4 size-full">
    <p className="text-center headtext">
      Do you want to Work together?
    </p>

    {/* Download CV Button */}
    <a
      href="/assets/Beselamu CV Latest File2025_merged.pdf" // Place your CV in the public/ folder
      download="Beselamu CV Latest File2025_merged.pdf"
      className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition"
    >
      Download CV
    </a>
  </div>
</div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText"></p>
            <p className="headText">Cybersecurity Tools</p>
<p className="subtext">
  I specialize in a range of security tools, protocols,
   and technologies that enable me to protect systems, 
  detect vulnerabilities,and implement robust cybersecurity solutions.
</p>

          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
