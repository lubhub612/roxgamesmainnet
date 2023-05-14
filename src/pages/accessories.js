import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import GlobalContext from "../contexts/GlobalContext";

export default function Accessories() {
  const { invokeServer } = useContext(GlobalContext);
  const [powerSkillsData, setPowerSkillsData] = useState([]);
  console.log(
    "🚀 ~ file: species.js:9 ~ Terms ~ powerSkillsData:",
    powerSkillsData
  );

  useEffect(() => {
    invokeServer("get", "/api/accessories").then((result) => {
      setPowerSkillsData(result.data);
    });
  }, []);

  return (
    <Layout>
      <div className="info-page">
        <div className="container">
          <h1>Accesories</h1>
          <p>
            Introducing our NFT accessories page! Here, {"you'll"} find a wide
            variety of unique items available for all seven species in our
            galaxy war game. Each accessory has been carefully crafted to suit
            all species, providing a vast array of customization options for
            your gameplay experience.
          </p>
          <p>
            With XXXX different accessories available, our range includes
            weapons, armor upgrades, artifacts, and advanced technology. Each
            accessory has its own set of unique properties and abilities,
            allowing you to enhance your gameplay strategy and style.
          </p>
          <p>
            Whether {"you're"} looking to boost your combat abilities, expand
            your technological arsenal, or simply add a touch of style to your
            {"character's"} appearance, {"you're"} sure to find something that
            suits your needs. All accessories are available to all species, so
            feel free to mix and match to find the perfect combination for your
            playstyle.
          </p>
          <p>
            Explore our collection today and discover the perfect accessory to
            take your gameplay to the next level. Collect them all and become
            the most formidable player in the galaxy!
          </p>
          <div className="maincontainer">
            {powerSkillsData &&
              powerSkillsData.map((item, index) => {
                return (
                  <div key={index} className="main">
                    <div className="mainimage">
                      <Image
                        src={`/images/accessories/${item?.Image}`}
                        alt="power"
                        height={400}
                        width={400}
                      />
                    </div>
                    <div className="dis_div">
                      <p className="maindiv">{item.Accessory}</p>
                      <p>{item.description}</p>
                      <p>Weight_lbs : {item.Weight_lbs}</p>
                      <p>Size_inches : {item.Size_inches}</p>
                      <p>Weight_kg : {item.Weight_kg}</p>
                      <p>Size_cm : {item.Size_cm}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .maincontainer {
          margin-top: 80px;
        }
        .maindiv {
          font-weight: 600;
        }
        .main {
          display: flex;
          gap: 25px;
          margin-bottom: 40px;
        }
        .dis_div {
          margin-top: 10px;
        }
        .mainimage {
          width: 450px;
          height: 450px;
          flex: none;
        }
      `}</style>
    </Layout>
  );
}
