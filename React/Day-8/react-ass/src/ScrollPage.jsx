import React, { useEffect, useRef, useState } from "react";

function ScrollPage() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const sectionsRef = useRef([]);
  const [active, setActive] = useState("About");

  useEffect(() => {
    sectionsRef.current = [
      { name: "About", ref: aboutRef },
      { name: "Services", ref: servicesRef },
      { name: "Portfolio", ref: portfolioRef },
      { name: "Contact", ref: contactRef },
    ];

    const handleScroll = () => {
      sectionsRef.current.forEach((section) => {
        const top = section.ref.current.getBoundingClientRect().top;

        if (top >= 0 && top < 200) {
          setActive(section.name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <div style={navStyle}>
        <NavItem
          text="About"
          active={active}
          onClick={() => scrollToSection(aboutRef)}
        />
        <NavItem
          text="Services"
          active={active}
          onClick={() => scrollToSection(servicesRef)}
        />
        <NavItem
          text="Portfolio"
          active={active}
          onClick={() => scrollToSection(portfolioRef)}
        />
        <NavItem
          text="Contact"
          active={active}
          onClick={() => scrollToSection(contactRef)}
        />
      </div>

      {/* Sections */}
      <Section refProp={aboutRef} title="About" />
      <Section refProp={servicesRef} title="Services" />
      <Section refProp={portfolioRef} title="Portfolio" />
      <Section refProp={contactRef} title="Contact" />
    </>
  );
}

const NavItem = ({ text, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      margin: "0 10px",
      fontWeight: active === text ? "bold" : "normal",
    }}
  >
    {text}
  </button>
);

const Section = ({ refProp, title }) => (
  <div
    ref={refProp}
    style={{
      height: "100vh",
      paddingTop: "80px",
      borderBottom: "1px solid #ccc",
    }}
  >
    <h2>{title}</h2>
  </div>
);

const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  background: "#f0f0f0",
  padding: "10px",
};

export default ScrollPage;
