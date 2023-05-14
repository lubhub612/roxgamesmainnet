import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import GlobalContext from "../contexts/GlobalContext";

export default function Terms() {
  const { invokeServer } = useContext(GlobalContext);
  const [powerSkillsData, setPowerSkillsData] = useState([]);
  console.log(
    "🚀 ~ file: species.js:9 ~ Terms ~ powerSkillsData:",
    powerSkillsData
  );

  useEffect(() => {
    invokeServer("get", "/api/region").then((result) => {
      setPowerSkillsData(result.data);
    });
  }, []);

  return (
    <Layout>
      <div className="info-page">
        <div className="container">
          <h1>characters</h1>
          <p>
            Explore the wonders of our solar system through the characters page,
            where you can discover the unique inhabitants of the seven planets.
            Each species possesses its own traits and characteristics, making
            them valuable additions to your collection.
          </p>
          <p>
            But that is not all - owning a species NFT character offers more
            than just the joy of collecting. If you own a ROX NFT horse, pairing
            it with a character NFT can increase your chances of winning races.
            Additionally, in our Galaxy War game, you can use your NFT character
            to engage in epic battles against other players for ultimate
            dominance. So dont miss out on the opportunity to level up your
            collection and gameplay experience!
          </p>

          <div className="maincontainer">
            {powerSkillsData &&
              powerSkillsData
                ?.filter((data) => data.Region !== "All Planets")
                .map((item, index) => {
                  var a = Math.floor(Math.random() * item?.image?.length);
                  var img = item?.image[a];
                  return (
                    <div key={index} className="main">
                      <div className="mainimage">
                        {item.Race === "Uranians" ? (
                          <Image
                            src={`/images/species_slider/uranus/${img}`}
                            alt="power"
                            height={350}
                            width={350}
                          />
                        ) : item.Race === "Mercurians" ? (
                          <Image
                            src={`/images/species_slider/mercury/${img}`}
                            alt="power"
                            height={350}
                            width={350}
                          />
                        ) : item.Race === "Neptuneans" ? (
                          <Image
                            src={`/images/species_slider/neptune/${img}`}
                            alt="power"
                            height={350}
                            width={350}
                          />
                        ) : item.Race === "Venetians" ? (
                          <Image
                            src={`/images/species_slider/venus/${img}`}
                            alt="power"
                            height={350}
                            width={350}
                          />
                        ) : item.Race === "Martians" ? (
                          <Image
                            src={`/images/species_slider/mars/${img}`}
                            alt="power"
                            height={350}
                            width={350}
                          />
                        ) : item.Race === "Jovians" ? (
                          <Image
                            src={`/images/species_slider/jupiter/${img}`}
                            alt="power"
                            height={350}
                            width={350}
                          />
                        ) : item.Race === "Saturnians" ? (
                          <Image
                            src={`/images/species_slider/saturn/${img}`}
                            alt="power"
                            height={350}
                            width={350}
                          />
                        ) : (
                          <Image
                            src={`/images/species_slider/earth/${img}`}
                            alt="power"
                            height={350}
                            width={350}
                          />
                        )}
                      </div>
                      <div className="dis_div">
                        <h2>  <p>Planet : {item.Region}</p></h2>
                        <p>Species : {item.Race}</p>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
      <style jsx>{`
      .maincontainer{
        margin-top:80px
      }
        .main {
          display: flex;
          gap: 25px;
          margin-bottom: 40px;
        }
        .mainimage {
          width: 350px;
          height: 350px;
          flex: none;
        }
        .dis_div {
          margin-top: 10px;
          margin-left: 25px;
        }
      `}</style>
    </Layout>
  );
}
