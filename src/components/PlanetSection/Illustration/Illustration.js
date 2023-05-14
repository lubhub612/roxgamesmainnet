import {
  Illustration,
  Image,
  SliderDiv,
  SliderInnerDiv,
} from "./IllustrationStyles";
import SimpleImageSlider from "react-simple-image-slider";
const IllustrationContainer = ({ planetData, currentData, isChanging }) => {
  console.log(
    "🚀 ~ file: Illustration.js:4 ~ IllustrationContainer ~ currentData:",
    currentData
  );
  // const containerVariants = {
  //   hidden: {
  //     opacity: 0,
  //     scale: 0.5,
  //     rotate: "20deg",
  //     x: 200,
  //   },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     rotate: 0,
  //     x: 0,
  //     transition: { delay: 1, duration: 1.5 },
  //   },
  //   exit: {
  //     opacity: 0,
  //     scale: 0.5,
  //     rotate: "-20deg",
  //     x: -200,
  //     transition: { duration: 1 },
  //   },
  // };
  return (
    <Illustration
    // variants={containerVariants}
    // initial="hidden"
    // animate="visible"
    // exit="exit"
    >
      {currentData.RaceCourses ? (
        // <div style={{ justifyContent: "center" }}>
        <SliderDiv>
          <SliderInnerDiv>
            <SimpleImageSlider
              width={"88%"}
              autoPlay={true}
              height={450}
              bgColor="transparent"
              images={currentData?.RaceCourses}
              showBullets={false}
              showNavs={false}
            />
          </SliderInnerDiv>
        </SliderDiv>
      ) : (
        // </div>
        <Image
          image={currentData.image}
          geo={currentData.geo ? currentData.geo : false}
          desktopImgWidth={planetData.desktopImgWidth}
          tabletImgWidth={planetData.tabletImgWidth}
          mobileImgWidth={planetData.mobileImgWidth}
          isChanging={isChanging ? true : false}
        />
      )}
    </Illustration>
  );
};

export default IllustrationContainer;
