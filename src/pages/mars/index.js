import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/Navbar";
import PlanetSection from "../../components/PlanetSection/PlanetSection";
import GlobalContext from "../../contexts/GlobalContext";



const Mars = () => {
  const { HandlePopulation } = useContext(GlobalContext);
  const [population, setPopilation] = useState();

  useEffect(() => {
    HandleData();
  }, []);

  const HandleData = async () => {
    const { data } = await HandlePopulation(5);
    setPopilation(data?.data);
  };

  const data = {
    name: "Mars",
    overview: {
      content:
        "A rugged, desert planet with towering red rock formations and sprawling cities built into the rocky landscape. Martians have created a society that is both rugged and refined, where the ancient rock formations blend seamlessly with modern architecture. The planet's vast deserts provide a unique challenge for horse racing enthusiasts, with courses that twist and turn through the rocky terrain.",
      source: "https://en.wikipedia.org/wiki/Mars",
      image: "./galaxy/planet-mars.png",
    },
    structure: {
      content:
        "The race course on Mars is a grueling endurance challenge, with steep inclines, treacherous terrain, and long, winding stretches of track. The course is known for its unpredictable weather patterns, with sudden dust storms and extreme temperature changes making it a true test of both horse and rider.",
      source: "https://en.wikipedia.org/wiki/Mars#Internal_structure",
      image: "./galaxy/planet-mars-internal.svg",
      RaceCourses: [
        {
          url: "/images/locations/1a453ad4-face-4423-b6db-6f8f2be36f61.jpeg",
        },
        {
          url: "/images/locations/01b7545f-19b7-4cd7-ab08-9a681b06d478.jpeg",
        },
        {
          url: "/images/locations/1c9aa23f-a0f2-4179-b775-bff18572d9ff.jpeg",
        },
        {
          url: "/images/locations/3a66b365-34be-411c-8c52-a8ea1821421e.jpeg",
        },
        {
          url: "/images/locations/4a7116f9-47f3-434b-bbc2-a1c5d7835782.jpeg",
        },
        {
          url: "/images/locations/4a7116f9-47f3-434b-bbc2-a1c5d7835782.jpeg",
        },
        {
          url: "/images/locations/4dbab44f-7111-4e68-8cfc-799331b6c390.jpeg",
        },
        {
          url: "/images/locations/8c4e2017-b985-4ae1-b30b-372012a6cedd.jpeg",
        },
        {
          url: "/images/locations/23c87e50-7d8c-4e73-95af-852c7036fa3f.jpeg",
        },
        {
          url: "/images/locations/52abc2eb-588d-4442-9c44-ea6366a7d42d.jpeg",
        },
      ],
    },
    geology: {
      content:
        "The Martians are a fierce and battle-hardened species, with a long history of warfare. They wear black and red armor that provides excellent protection and reflects their status as skilled warriors. They have developed advanced weaponry, including laser rifles and plasma cannons, and are experts in close-quarters combat. Their spaceships are heavily armed and equipped with cloaking devices, making them difficult to track and engage in battle.",
      source: "https://en.wikipedia.org/wiki/Mars#Surface_geology",
      // image: "/images/species/mars.jpeg",
      // geo: "./galaxy/planet-mars-geology.png",
      // image: `/images/species/${population?.image}`,
      RaceCourses: [
        {
          url: "/images/species_slider/mars/mars.jpeg",
        },
        {
          url: "/images/species_slider/mars/mars_2.jpeg",
        },
        {
          url: "/images/species_slider/mars/mars_3.jpeg",
        },
        {
          url: "/images/species_slider/mars/mars_4.jpeg",
        },
        {
          url: "/images/species_slider/mars/mars_5.jpeg",
        },
        {
          url: "/images/species_slider/mars/mars_6.jpeg",
        },
        {
          url: "/images/species_slider/mars/mars_7.jpeg",
        },{
          url: "/images/species_slider/mars/mars_8.jpeg",
        },
      ],

    },
    sectionColor: "hsl(10, 63%, 51%)",
    desktopImgWidth: "336px",
    tabletImgWidth: "213px",
    mobileImgWidth: "129px",
    rotation: population?.specie ? population?.specie : 0,
    revolution: "1.88 Years",
    radius: "3,389.5 KM",
    temperature: "35°c",
  };

  return (
    <>
      <Layout>
        <div className="main-galaxy">
          <PlanetSection planetData={data} />
        </div>
        <style jsx>{`
          .main-galaxy{
            position: relative;
            min-height: 100vh;
            background-color:#14181d;
            // background-color: hsl(240,67%,8%);
            overflow: hidden;
          }
          .main-galaxy::after {
            content: '';
            position: absolute;
            height: 2px;
            width: 2px;
            top: -2px;
            background: white;
            box-shadow: 250px 557px 0 0px rgb(255 255 255 / 77%), 757px 487px 0 0px rgb(255 255 255 / 94%), 1656px 1149px 0 0px rgb(255 255 255 / 53%), 496px 939px 0 0px rgb(255 255 255 / 67%), 614px 1750px 0 0px rgb(255 255 255 / 96%), 713px 1434px 0 0px rgb(255 255 255 / 1%), 315px 501px 0 0px rgb(255 255 255 / 78%), 1145px 753px 0 0px rgb(255 255 255 / 33%), 1712px 255px 0 0px rgb(255 255 255 / 45%), 466px 206px 0 0px rgb(255 255 255 / 1%), 773px 977px 0 0px rgb(255 255 255 / 94%), 486px 69px 0 0px rgb(255 255 255 / 96%), 1550px 1297px 0 0px rgb(255 255 255 / 22%), 1653px 1527px 0 0px rgb(255 255 255 / 21%), 75px 35px 0 0px rgb(255 255 255 / 79%), 991px 1189px 0 0px rgb(255 255 255 / 35%), 1230px 569px 0 0px rgb(255 255 255 / 45%), 1091px 1437px 0 0px rgb(255 255 255 / 75%), 931px 831px 0 0px rgb(255 255 255 / 51%), 736px 1016px 0 0px rgb(255 255 255 / 95%), 90px 316px 0 0px rgb(255 255 255 / 53%), 893px 1606px 0 0px rgb(255 255 255 / 51%), 1778px 582px 0 0px rgb(255 255 255 / 41%), 1382px 1389px 0 0px rgb(255 255 255 / 40%), 136px 624px 0 0px rgb(255 255 255 / 81%), 698px 682px 0 0px rgb(255 255 255 / 94%), 451px 1116px 0 0px rgb(255 255 255 / 13%), 996px 257px 0 0px rgb(255 255 255 / 44%), 1483px 82px 0 0px rgb(255 255 255 / 10%), 1008px 83px 0 0px rgb(255 255 255 / 77%), 914px 722px 0 0px rgb(255 255 255 / 3%), 792px 681px 0 0px rgb(255 255 255 / 69%), 1303px 1428px 0 0px rgb(255 255 255 / 89%), 1424px 1267px 0 0px rgb(255 255 255 / 70%), 1633px 1208px 0 0px rgb(255 255 255 / 2%), 444px 1351px 0 0px rgb(255 255 255 / 2%), 292px 1045px 0 0px rgb(255 255 255 / 67%), 1395px 152px 0 0px rgb(255 255 255 / 68%), 684px 631px 0 0px rgb(255 255 255 / 45%), 932px 202px 0 0px rgb(255 255 255 / 91%), 1749px 878px 0 0px rgb(255 255 255 / 86%), 940px 460px 0 0px rgb(255 255 255 / 97%), 1389px 805px 0 0px rgb(255 255 255 / 46%), 1443px 385px 0 0px rgb(255 255 255 / 85%), 479px 1268px 0 0px rgb(255 255 255 / 60%), 1040px 986px 0 0px rgb(255 255 255 / 47%), 952px 1137px 0 0px rgb(255 255 255 / 49%), 399px 1726px 0 0px rgb(255 255 255 / 43%), 677px 1707px 0 0px rgb(255 255 255 / 27%), 345px 1548px 0 0px rgb(255 255 255 / 68%), 178px 793px 0 0px rgb(255 255 255 / 18%), 323px 989px 0 0px rgb(255 255 255 / 63%), 1610px 1192px 0 0px rgb(255 255 255 / 81%), 315px 1370px 0 0px rgb(255 255 255 / 49%), 568px 174px 0 0px rgb(255 255 255 / 84%), 369px 245px 0 0px rgb(255 255 255 / 9%), 1129px 1362px 0 0px rgb(255 255 255 / 54%), 1630px 1249px 0 0px rgb(255 255 255 / 81%), 681px 133px 0 0px rgb(255 255 255 / 93%), 548px 717px 0 0px rgb(255 255 255 / 56%), 1170px 833px 0 0px rgb(255 255 255 / 53%), 1329px 1111px 0 0px rgb(255 255 255 / 70%), 150px 1118px 0 0px rgb(255 255 255 / 51%), 65px 1009px 0 0px rgb(255 255 255 / 64%), 1765px 130px 0 0px rgb(255 255 255 / 61%), 1160px 1367px 0 0px rgb(255 255 255 / 4%), 537px 500px 0 0px rgb(255 255 255 / 30%), 1475px 1706px 0 0px rgb(255 255 255 / 54%), 367px 1685px 0 0px rgb(255 255 255 / 53%), 62px 769px 0 0px rgb(255 255 255 / 68%), 806px 1547px 0 0px rgb(255 255 255 / 38%), 860px 1382px 0 0px rgb(255 255 255 / 25%), 1244px 777px 0 0px rgb(255 255 255 / 19%), 154px 765px 0 0px rgb(255 255 255 / 54%), 915px 416px 0 0px rgb(255 255 255 / 56%), 75px 1253px 0 0px rgb(255 255 255 / 37%), 1247px 755px 0 0px rgb(255 255 255 / 19%), 1004px 273px 0 0px rgb(255 255 255 / 32%), 1767px 376px 0 0px rgb(255 255 255 / 73%), 300px 379px 0 0px rgb(255 255 255 / 85%), 774px 410px 0 0px rgb(255 255 255 / 74%), 787px 1048px 0 0px rgb(255 255 255 / 63%), 1313px 1597px 0 0px rgb(255 255 255 / 75%), 1547px 187px 0 0px rgb(255 255 255 / 70%), 1085px 1440px 0 0px rgb(255 255 255 / 81%), 1382px 1595px 0 0px rgb(255 255 255 / 30%), 1111px 1331px 0 0px rgb(255 255 255 / 35%), 1528px 173px 0 0px rgb(255 255 255 / 34%), 791px 671px 0 0px rgb(255 255 255 / 51%), 1378px 831px 0 0px rgb(255 255 255 / 99%), 1758px 910px 0 0px rgb(255 255 255 / 79%), 1501px 105px 0 0px rgb(255 255 255 / 44%), 468px 1029px 0 0px rgb(255 255 255 / 68%), 768px 675px 0 0px rgb(255 255 255 / 34%), 963px 794px 0 0px rgb(255 255 255 / 72%), 270px 457px 0 0px rgb(255 255 255 / 96%), 301px 1396px 0 0px rgb(255 255 255 / 41%), 109px 101px 0 0px rgb(255 255 255 / 3%), 505px 277px 0 0px rgb(255 255 255 / 28%), 1791px 191px 0 0px rgb(255 255 255 / 90%), 1429px 201px 0 0px rgb(255 255 255 / 84%), 467px 619px 0 0px rgb(255 255 255 / 24%), 1332px 67px 0 0px rgb(255 255 255 / 16%), 1665px 744px 0 0px rgb(255 255 255 / 44%), 162px 1645px 0 0px rgb(255 255 255 / 93%), 1326px 830px 0 0px rgb(255 255 255 / 96%), 551px 464px 0 0px rgb(255 255 255 / 61%), 1575px 1354px 0 0px rgb(255 255 255 / 48%), 1393px 907px 0 0px rgb(255 255 255 / 62%), 979px 161px 0 0px rgb(255 255 255 / 30%), 784px 1687px 0 0px rgb(255 255 255 / 96%), 731px 1483px 0 0px rgb(255 255 255 / 30%), 305px 579px 0 0px rgb(255 255 255 / 66%), 1590px 868px 0 0px rgb(255 255 255 / 99%), 34px 354px 0 0px rgb(255 255 255 / 20%), 1310px 539px 0 0px rgb(255 255 255 / 1%), 808px 309px 0 0px rgb(255 255 255 / 34%), 1061px 946px 0 0px rgb(255 255 255 / 2%), 98px 1262px 0 0px rgb(255 255 255 / 90%), 1280px 123px 0 0px rgb(255 255 255 / 60%), 266px 1183px 0 0px rgb(255 255 255 / 39%), 1700px 550px 0 0px rgb(255 255 255 / 84%), 1309px 570px 0 0px rgb(255 255 255 / 69%), 899px 1246px 0 0px rgb(255 255 255 / 80%), 876px 1045px 0 0px rgb(255 255 255 / 80%), 264px 496px 0 0px rgb(255 255 255 / 92%), 988px 231px 0 0px rgb(255 255 255 / 34%), 1142px 409px 0 0px rgb(255 255 255 / 65%), 1537px 45px 0 0px rgb(255 255 255 / 76%), 607px 21px 0 0px rgb(255 255 255 / 98%), 1574px 1738px 0 0px rgb(255 255 255 / 80%), 719px 1373px 0 0px rgb(255 255 255 / 45%), 362px 347px 0 0px rgb(255 255 255 / 44%), 1710px 825px 0 0px rgb(255 255 255 / 64%), 1629px 476px 0 0px rgb(255 255 255 / 9%), 732px 513px 0 0px rgb(255 255 255 / 38%), 1165px 356px 0 0px rgb(255 255 255 / 20%), 1px 1186px 0 0px rgb(255 255 255 / 75%), 906px 12px 0 0px rgb(255 255 255 / 2%), 442px 1632px 0 0px rgb(255 255 255 / 41%), 1214px 1362px 0 0px rgb(255 255 255 / 2%), 214px 641px 0 0px rgb(255 255 255 / 79%), 1438px 1323px 0 0px rgb(255 255 255 / 19%), 250px 1156px 0 0px rgb(255 255 255 / 50%), 1733px 1251px 0 0px rgb(255 255 255 / 20%), 1009px 1416px 0 0px rgb(255 255 255 / 90%), 1502px 1094px 0 0px rgb(255 255 255 / 64%), 1424px 1424px 0 0px rgb(255 255 255 / 68%), 176px 1032px 0 0px rgb(255 255 255 / 28%), 649px 133px 0 0px rgb(255 255 255 / 74%), 217px 108px 0 0px rgb(255 255 255 / 35%), 804px 614px 0 0px rgb(255 255 255 / 86%), 1060px 1193px 0 0px rgb(255 255 255 / 69%), 1333px 824px 0 0px rgb(255 255 255 / 58%), 1394px 1481px 0 0px rgb(255 255 255 / 37%), 1730px 1681px 0 0px rgb(255 255 255 / 18%), 1302px 173px 0 0px rgb(255 255 255 / 96%), 1623px 254px 0 0px rgb(255 255 255 / 65%), 1730px 315px 0 0px rgb(255 255 255 / 83%), 1733px 1361px 0 0px rgb(255 255 255 / 49%), 1767px 133px 0 0px rgb(255 255 255 / 64%), 637px 1586px 0 0px rgb(255 255 255 / 64%), 1545px 1295px 0 0px rgb(255 255 255 / 11%), 1732px 1153px 0 0px rgb(255 255 255 / 60%), 125px 674px 0 0px rgb(255 255 255 / 26%), 810px 1036px 0 0px rgb(255 255 255 / 28%), 1213px 780px 0 0px rgb(255 255 255 / 11%), 1253px 402px 0 0px rgb(255 255 255 / 32%), 1620px 1747px 0 0px rgb(255 255 255 / 70%), 146px 1621px 0 0px rgb(255 255 255 / 21%), 416px 113px 0 0px rgb(255 255 255 / 77%), 1505px 1750px 0 0px rgb(255 255 255 / 87%), 1084px 1790px 0 0px rgb(255 255 255 / 51%), 838px 1072px 0 0px rgb(255 255 255 / 12%), 552px 1333px 0 0px rgb(255 255 255 / 54%), 843px 1660px 0 0px rgb(255 255 255 / 48%), 826px 633px 0 0px rgb(255 255 255 / 99%), 1682px 623px 0 0px rgb(255 255 255 / 10%), 940px 948px 0 0px rgb(255 255 255 / 33%), 1731px 686px 0 0px rgb(255 255 255 / 95%), 1387px 117px 0 0px rgb(255 255 255 / 37%), 1243px 296px 0 0px rgb(255 255 255 / 64%), 345px 517px 0 0px rgb(255 255 255 / 27%), 56px 567px 0 0px rgb(255 255 255 / 92%), 485px 441px 0 0px rgb(255 255 255 / 12%), 1612px 97px 0 0px rgb(255 255 255 / 54%), 640px 435px 0 0px rgb(255 255 255 / 72%), 1145px 214px 0 0px rgb(255 255 255 / 46%), 454px 1326px 0 0px rgb(255 255 255 / 48%), 927px 258px 0 0px rgb(255 255 255 / 16%), 752px 142px 0 0px rgb(255 255 255 / 92%), 77px 1254px 0 0px rgb(255 255 255 / 36%), 224px 1083px 0 0px rgb(255 255 255 / 30%), 401px 1010px 0 0px rgb(255 255 255 / 56%), 947px 1657px 0 0px rgb(255 255 255 / 26%), 421px 1226px 0 0px rgb(255 255 255 / 7%), 1777px 228px 0 0px rgb(255 255 255 / 31%), 73px 1681px 0 0px rgb(255 255 255 / 56%), 712px 1072px 0 0px rgb(255 255 255 / 41%), 1428px 1565px 0 0px rgb(255 255 255 / 77%), 59px 532px 0 0px rgb(255 255 255 / 6%), 1362px 1105px 0 0px rgb(255 255 255 / 54%), 1582px 986px 0 0px rgb(255 255 255 / 72%), 508px 624px 0 0px rgb(255 255 255 / 23%), 305px 1502px 0 0px rgb(255 255 255 / 79%), 1413px 1105px 0 0px rgb(255 255 255 / 40%), 1131px 818px 0 0px rgb(255 255 255 / 31%), 360px 765px 0 0px rgb(255 255 255 / 16%), 1170px 436px 0 0px rgb(255 255 255 / 31%), 508px 1489px 0 0px rgb(255 255 255 / 43%), 915px 425px 0 0px rgb(255 255 255 / 89%), 1523px 966px 0 0px rgb(255 255 255 / 44%), 1023px 718px 0 0px rgb(255 255 255 / 86%), 616px 1044px 0 0px rgb(255 255 255 / 91%), 735px 707px 0 0px rgb(255 255 255 / 79%), 1155px 1108px 0 0px rgb(255 255 255 / 85%), 198px 196px 0 0px rgb(255 255 255 / 78%), 30px 294px 0 0px rgb(255 255 255 / 53%), 1133px 1124px 0 0px rgb(255 255 255 / 96%), 455px 224px 0 0px rgb(255 255 255 / 22%), 658px 695px 0 0px rgb(255 255 255 / 6%), 1757px 274px 0 0px rgb(255 255 255 / 8%), 165px 671px 0 0px rgb(255 255 255 / 93%), 959px 1673px 0 0px rgb(255 255 255 / 74%), 859px 1315px 0 0px rgb(255 255 255 / 17%), 475px 709px 0 0px rgb(255 255 255 / 15%), 805px 1705px 0 0px rgb(255 255 255 / 70%), 1208px 653px 0 0px rgb(255 255 255 / 38%), 1543px 976px 0 0px rgb(255 255 255 / 39%), 153px 798px 0 0px rgb(255 255 255 / 2%), 1573px 1032px 0 0px rgb(255 255 255 / 38%), 1043px 697px 0 0px rgb(255 255 255 / 29%), 360px 1367px 0 0px rgb(255 255 255 / 93%), 1307px 1578px 0 0px rgb(255 255 255 / 12%), 1783px 1395px 0 0px rgb(255 255 255 / 93%), 514px 683px 0 0px rgb(255 255 255 / 28%), 1080px 1362px 0 0px rgb(255 255 255 / 42%), 1545px 761px 0 0px rgb(255 255 255 / 70%), 1408px 1342px 0 0px rgb(255 255 255 / 37%), 256px 690px 0 0px rgb(255 255 255 / 12%), 309px 438px 0 0px rgb(255 255 255 / 67%), 522px 654px 0 0px rgb(255 255 255 / 32%), 112px 1787px 0 0px rgb(255 255 255 / 6%), 955px 195px 0 0px rgb(255 255 255 / 57%), 1481px 1510px 0 0px rgb(255 255 255 / 61%), 683px 287px 0 0px rgb(255 255 255 / 25%), 757px 41px 0 0px rgb(255 255 255 / 30%), 1287px 1426px 0 0px rgb(255 255 255 / 74%), 1240px 1757px 0 0px rgb(255 255 255 / 35%), 377px 1307px 0 0px rgb(255 255 255 / 51%), 39px 6px 0 0px rgb(255 255 255 / 87%), 1645px 710px 0 0px rgb(255 255 255 / 88%), 997px 1022px 0 0px rgb(255 255 255 / 41%), 502px 1590px 0 0px rgb(255 255 255 / 36%), 397px 1330px 0 0px rgb(255 255 255 / 92%), 1789px 1239px 0 0px rgb(255 255 255 / 28%), 1669px 1485px 0 0px rgb(255 255 255 / 83%), 1028px 1039px 0 0px rgb(255 255 255 / 72%), 1685px 1302px 0 0px rgb(255 255 255 / 79%), 1571px 495px 0 0px rgb(255 255 255 / 14%), 1243px 1284px 0 0px rgb(255 255 255 / 18%), 247px 1030px 0 0px rgb(255 255 255 / 71%), 105px 1388px 0 0px rgb(255 255 255 / 98%), 1019px 942px 0 0px rgb(255 255 255 / 3%), 1745px 756px 0 0px rgb(255 255 255 / 36%), 698px 1497px 0 0px rgb(255 255 255 / 95%), 403px 57px 0 0px rgb(255 255 255 / 93%), 1175px 1107px 0 0px rgb(255 255 255 / 15%), 1133px 765px 0 0px rgb(255 255 255 / 6%), 931px 401px 0 0px rgb(255 255 255 / 28%), 394px 1212px 0 0px rgb(255 255 255 / 35%), 1558px 1420px 0 0px rgb(255 255 255 / 10%), 455px 181px 0 0px rgb(255 255 255 / 100%), 578px 1052px 0 0px rgb(255 255 255 / 17%), 94px 275px 0 0px rgb(255 255 255 / 56%), 627px 1370px 0 0px rgb(255 255 255 / 54%), 1080px 538px 0 0px rgb(255 255 255 / 28%), 256px 1128px 0 0px rgb(255 255 255 / 23%), 767px 880px 0 0px rgb(255 255 255 / 36%), 389px 83px 0 0px rgb(255 255 255 / 70%), 1026px 1662px 0 0px rgb(255 255 255 / 98%), 1493px 1751px 0 0px rgb(255 255 255 / 34%), 27px 157px 0 0px rgb(255 255 255 / 27%), 1493px 668px 0 0px rgb(255 255 255 / 97%), 1265px 1060px 0 0px rgb(255 255 255 / 61%), 1755px 1118px 0 0px rgb(255 255 255 / 10%), 776px 997px 0 0px rgb(255 255 255 / 41%), 116px 491px 0 0px rgb(255 255 255 / 99%), 473px 116px 0 0px rgb(255 255 255 / 2%), 770px 705px 0 0px rgb(255 255 255 / 66%), 1705px 928px 0 0px rgb(255 255 255 / 9%), 1187px 616px 0 0px rgb(255 255 255 / 60%), 186px 875px 0 0px rgb(255 255 255 / 42%), 1734px 616px 0 0px rgb(255 255 255 / 36%), 53px 769px 0 0px rgb(255 255 255 / 78%), 1204px 1310px 0 0px rgb(255 255 255 / 91%), 1538px 829px 0 0px rgb(255 255 255 / 65%), 1354px 1212px 0 0px rgb(255 255 255 / 60%), 387px 477px 0 0px rgb(255 255 255 / 69%), 1387px 1358px 0 0px rgb(255 255 255 / 43%), 1430px 1171px 0 0px rgb(255 255 255 / 96%), 1364px 1790px 0 0px rgb(255 255 255 / 16%), 517px 825px 0 0px rgb(255 255 255 / 55%), 156px 1240px 0 0px rgb(255 255 255 / 70%), 980px 86px 0 0px rgb(255 255 255 / 1%), 742px 1268px 0 0px rgb(255 255 255 / 68%), 1474px 1584px 0 0px rgb(255 255 255 / 30%), 1195px 1778px 0 0px rgb(255 255 255 / 78%), 1784px 141px 0 0px rgb(255 255 255 / 84%), 296px 60px 0 0px rgb(255 255 255 / 84%), 1313px 1196px 0 0px rgb(255 255 255 / 82%), 1053px 165px 0 0px rgb(255 255 255 / 30%), 1672px 1022px 0 0px rgb(255 255 255 / 3%), 1612px 153px 0 0px rgb(255 255 255 / 91%), 119px 472px 0 0px rgb(255 255 255 / 14%), 815px 863px 0 0px rgb(255 255 255 / 28%), 1139px 1189px 0 0px rgb(255 255 255 / 24%), 1232px 108px 0 0px rgb(255 255 255 / 85%), 1254px 1284px 0 0px rgb(255 255 255 / 77%), 410px 488px 0 0px rgb(255 255 255 / 41%), 1440px 1114px 0 0px rgb(255 255 255 / 43%), 681px 1345px 0 0px rgb(255 255 255 / 83%), 1634px 1680px 0 0px rgb(255 255 255 / 97%), 953px 331px 0 0px rgb(255 255 255 / 9%), 1570px 70px 0 0px rgb(255 255 255 / 93%), 1507px 1486px 0 0px rgb(255 255 255 / 35%), 71px 736px 0 0px rgb(255 255 255 / 99%), 1427px 1452px 0 0px rgb(255 255 255 / 18%), 413px 1024px 0 0px rgb(255 255 255 / 65%), 1668px 1766px 0 0px rgb(255 255 255 / 68%), 1744px 1644px 0 0px rgb(255 255 255 / 23%), 659px 1295px 0 0px rgb(255 255 255 / 6%), 1799px 933px 0 0px rgb(255 255 255 / 3%), 1603px 1536px 0 0px rgb(255 255 255 / 35%), 654px 1036px 0 0px rgb(255 255 255 / 16%), 779px 415px 0 0px rgb(255 255 255 / 74%), 1042px 1597px 0 0px rgb(255 255 255 / 2%), 1529px 583px 0 0px rgb(255 255 255 / 13%), 461px 740px 0 0px rgb(255 255 255 / 88%), 1354px 1112px 0 0px rgb(255 255 255 / 24%), 573px 1438px 0 0px rgb(255 255 255 / 78%), 1147px 886px 0 0px rgb(255 255 255 / 7%), 697px 1775px 0 0px rgb(255 255 255 / 94%), 1412px 714px 0 0px rgb(255 255 255 / 57%), 1497px 1713px 0 0px rgb(255 255 255 / 30%), 260px 1775px 0 0px rgb(255 255 255 / 66%), 168px 552px 0 0px rgb(255 255 255 / 98%), 52px 525px 0 0px rgb(255 255 255 / 94%), 1027px 569px 0 0px rgb(255 255 255 / 49%), 1333px 1079px 0 0px rgb(255 255 255 / 61%), 482px 28px 0 0px rgb(255 255 255 / 60%), 409px 360px 0 0px rgb(255 255 255 / 4%), 189px 903px 0 0px rgb(255 255 255 / 28%), 251px 1443px 0 0px rgb(255 255 255 / 42%), 1016px 1267px 0 0px rgb(255 255 255 / 36%), 229px 1350px 0 0px rgb(255 255 255 / 60%), 29px 1559px 0 0px rgb(255 255 255 / 94%), 1018px 1198px 0 0px rgb(255 255 255 / 72%), 739px 1391px 0 0px rgb(255 255 255 / 14%), 1372px 1433px 0 0px rgb(255 255 255 / 56%), 198px 1662px 0 0px rgb(255 255 255 / 31%), 1008px 213px 0 0px rgb(255 255 255 / 51%), 1548px 376px 0 0px rgb(255 255 255 / 79%), 329px 1199px 0 0px rgb(255 255 255 / 36%), 929px 862px 0 0px rgb(255 255 255 / 91%), 1333px 762px 0 0px rgb(255 255 255 / 94%), 18px 700px 0 0px rgb(255 255 255 / 28%), 1155px 1003px 0 0px rgb(255 255 255 / 97%), 1034px 720px 0 0px rgb(255 255 255 / 48%), 597px 463px 0 0px rgb(255 255 255 / 34%), 599px 1660px 0 0px rgb(255 255 255 / 95%), 655px 482px 0 0px rgb(255 255 255 / 5%), 1369px 872px 0 0px rgb(255 255 255 / 68%), 341px 1507px 0 0px rgb(255 255 255 / 77%), 827px 356px 0 0px rgb(255 255 255 / 54%), 911px 1225px 0 0px rgb(255 255 255 / 42%), 848px 1452px 0 0px rgb(255 255 255 / 3%), 1688px 1264px 0 0px rgb(255 255 255 / 59%), 733px 1605px 0 0px rgb(255 255 255 / 9%), 767px 590px 0 0px rgb(255 255 255 / 34%), 1366px 902px 0 0px rgb(255 255 255 / 68%), 614px 1019px 0 0px rgb(255 255 255 / 6%), 902px 326px 0 0px rgb(255 255 255 / 38%), 1505px 777px 0 0px rgb(255 255 255 / 78%), 1132px 868px 0 0px rgb(255 255 255 / 86%), 1008px 1047px 0 0px rgb(255 255 255 / 73%), 648px 567px 0 0px rgb(255 255 255 / 10%), 997px 373px 0 0px rgb(255 255 255 / 18%), 409px 608px 0 0px rgb(255 255 255 / 89%), 1227px 730px 0 0px rgb(255 255 255 / 27%), 257px 1681px 0 0px rgb(255 255 255 / 19%), 155px 1244px 0 0px rgb(255 255 255 / 95%), 996px 1678px 0 0px rgb(255 255 255 / 11%), 1348px 794px 0 0px rgb(255 255 255 / 92%), 42px 1092px 0 0px rgb(255 255 255 / 39%), 1388px 150px 0 0px rgb(255 255 255 / 36%), 1507px 10px 0 0px rgb(255 255 255 / 12%), 1342px 1572px 0 0px rgb(255 255 255 / 84%), 845px 1168px 0 0px rgb(255 255 255 / 64%), 570px 654px 0 0px rgb(255 255 255 / 55%), 1387px 824px 0 0px rgb(255 255 255 / 59%), 1572px 1306px 0 0px rgb(255 255 255 / 41%), 1250px 1772px 0 0px rgb(255 255 255 / 89%), 585px 1550px 0 0px rgb(255 255 255 / 28%), 524px 1335px 0 0px rgb(255 255 255 / 59%), 1684px 317px 0 0px rgb(255 255 255 / 74%), 929px 57px 0 0px rgb(255 255 255 / 48%), 1749px 1409px 0 0px rgb(255 255 255 / 58%), 861px 25px 0 0px rgb(255 255 255 / 38%), 927px 615px 0 0px rgb(255 255 255 / 99%), 202px 563px 0 0px rgb(255 255 255 / 97%), 55px 318px 0 0px rgb(255 255 255 / 93%), 1283px 1352px 0 0px rgb(255 255 255 / 79%), 1553px 411px 0 0px rgb(255 255 255 / 71%), 692px 1140px 0 0px rgb(255 255 255 / 15%), 599px 805px 0 0px rgb(255 255 255 / 74%), 1687px 588px 0 0px rgb(255 255 255 / 47%), 843px 1417px 0 0px rgb(255 255 255 / 44%), 704px 447px 0 0px rgb(255 255 255 / 25%), 1119px 1489px 0 0px rgb(255 255 255 / 15%), 688px 1757px 0 0px rgb(255 255 255 / 81%), 176px 1732px 0 0px rgb(255 255 255 / 71%), 426px 632px 0 0px rgb(255 255 255 / 12%), 1383px 487px 0 0px rgb(255 255 255 / 58%), 129px 663px 0 0px rgb(255 255 255 / 88%), 1366px 368px 0 0px rgb(255 255 255 / 87%), 1029px 988px 0 0px rgb(255 255 255 / 23%), 544px 155px 0 0px rgb(255 255 255 / 41%), 1611px 529px 0 0px rgb(255 255 255 / 55%), 641px 194px 0 0px rgb(255 255 255 / 30%), 548px 1354px 0 0px rgb(255 255 255 / 59%), 1777px 84px 0 0px rgb(255 255 255 / 91%), 100px 343px 0 0px rgb(255 255 255 / 79%), 1263px 485px 0 0px rgb(255 255 255 / 1%), 1557px 1127px 0 0px rgb(255 255 255 / 24%), 1033px 582px 0 0px rgb(255 255 255 / 36%), 1554px 1419px 0 0px rgb(255 255 255 / 32%), 326px 122px 0 0px rgb(255 255 255 / 33%), 317px 1505px 0 0px rgb(255 255 255 / 77%), 667px 763px 0 0px rgb(255 255 255 / 15%), 1760px 1379px 0 0px rgb(255 255 255 / 71%), 346px 1207px 0 0px rgb(255 255 255 / 4%), 469px 1663px 0 0px rgb(255 255 255 / 67%), 715px 162px 0 0px rgb(255 255 255 / 90%), 1749px 1418px 0 0px rgb(255 255 255 / 97%), 1309px 1651px 0 0px rgb(255 255 255 / 79%), 1723px 1660px 0 0px rgb(255 255 255 / 27%), 1457px 1364px 0 0px rgb(255 255 255 / 61%), 309px 674px 0 0px rgb(255 255 255 / 31%), 1737px 628px 0 0px rgb(255 255 255 / 3%), 624px 204px 0 0px rgb(255 255 255 / 90%), 1731px 860px 0 0px rgb(255 255 255 / 77%), 1487px 508px 0 0px rgb(255 255 255 / 34%), 1036px 977px 0 0px rgb(255 255 255 / 34%), 1578px 1702px 0 0px rgb(255 255 255 / 89%), 1585px 1356px 0 0px rgb(255 255 255 / 77%), 922px 1507px 0 0px rgb(255 255 255 / 43%), 660px 1219px 0 0px rgb(255 255 255 / 60%), 1770px 1513px 0 0px rgb(255 255 255 / 29%), 1717px 236px 0 0px rgb(255 255 255 / 53%), 566px 16px 0 0px rgb(255 255 255 / 19%), 681px 862px 0 0px rgb(255 255 255 / 69%), 1304px 1384px 0 0px rgb(255 255 255 / 38%), 135px 449px 0 0px rgb(255 255 255 / 53%), 1714px 1560px 0 0px rgb(255 255 255 / 34%), 1599px 1646px 0 0px rgb(255 255 255 / 26%), 680px 566px 0 0px rgb(255 255 255 / 9%), 416px 470px 0 0px rgb(255 255 255 / 100%), 1665px 1547px 0 0px rgb(255 255 255 / 52%), 1246px 373px 0 0px rgb(255 255 255 / 60%), 449px 1620px 0 0px rgb(255 255 255 / 18%), 256px 217px 0 0px rgb(255 255 255 / 58%), 1563px 695px 0 0px rgb(255 255 255 / 92%), 1251px 316px 0 0px rgb(255 255 255 / 59%), 688px 1367px 0 0px rgb(255 255 255 / 87%), 1767px 1030px 0 0px rgb(255 255 255 / 45%), 836px 890px 0 0px rgb(255 255 255 / 98%), 1075px 148px 0 0px rgb(255 255 255 / 42%), 738px 757px 0 0px rgb(255 255 255 / 13%), 1228px 1740px 0 0px rgb(255 255 255 / 12%), 738px 468px 0 0px rgb(255 255 255 / 98%), 603px 810px 0 0px rgb(255 255 255 / 90%), 932px 1009px 0 0px rgb(255 255 255 / 80%), 1033px 976px 0 0px rgb(255 255 255 / 27%), 1332px 1498px 0 0px rgb(255 255 255 / 77%), 1732px 851px 0 0px rgb(255 255 255 / 97%), 572px 213px 0 0px rgb(255 255 255 / 40%), 258px 434px 0 0px rgb(255 255 255 / 19%), 1726px 1735px 0 0px rgb(255 255 255 / 3%), 519px 662px 0 0px rgb(255 255 255 / 16%), 1015px 639px 0 0px rgb(255 255 255 / 90%), 833px 927px 0 0px rgb(255 255 255 / 93%), 1723px 302px 0 0px rgb(255 255 255 / 46%), 334px 855px 0 0px rgb(255 255 255 / 78%), 220px 490px 0 0px rgb(255 255 255 / 18%), 134px 465px 0 0px rgb(255 255 255 / 92%), 586px 1149px 0 0px rgb(255 255 255 / 42%), 22px 948px 0 0px rgb(255 255 255 / 45%), 192px 69px 0 0px rgb(255 255 255 / 56%), 1043px 88px 0 0px rgb(255 255 255 / 37%);
            border-radius: 100px;
          
        `}</style>
      </Layout>
    </>
  );
};

export default Mars;
