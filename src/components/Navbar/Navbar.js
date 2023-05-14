import { useEffect, useState } from "react";
import { Header, Logo, LogoLink, Container } from "./NavbarStyles";
import NavMobile from "./NavMobile/NavMobile";
import NavDesktop from "./NavDesktop/NavDesktop";

const Navbar = ({ pathName, activePlanet, onHover }) => {
  var currentUrl = "/galaxy";
//   if (typeof window !== "undefined") {
//     currentUrl = window.innerWidth;
//   }
//   if (typeof window !== "undefined") {
//     window.onload = function afterWebPageLoad() {
    
//     };
//   }

//   const [windowWidth, setWindowWidth] = useState(currentUrl);
//   const tabletBreakpoint = 768;

//   useEffect(() => {
//     window.addEventListener("resize", () => setWindowWidth(currentUrl));
//   }, [windowWidth]);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 4 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <Header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container>

        <Logo>
          <LogoLink href="/galaxy">The Planets</LogoLink>
        </Logo>
        <NavDesktop
            pathName={pathName}
            onHover={onHover}
            activePlanet={activePlanet}
          />
        {/* {windowWidth >= tabletBreakpoint ? (
          <NavDesktop
            pathName={pathName}
            onHover={onHover}
            activePlanet={activePlanet}
          />
        ) : (
          <NavMobile windowWidth={windowWidth} />
        )} */}
      </Container>
    </Header>
  );
};

export default Navbar;
