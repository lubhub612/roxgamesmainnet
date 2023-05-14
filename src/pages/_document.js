import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#000000" />

        <meta property="og:title" content="ROX Games - Enter the World of NFT Horse Racing and Galactic Warfare" />
        <meta
          property="og:image"
          content="https://rox.games/images/rox.jpg"
        />
        <meta
          property="og:description"
          content="ROX Games offers an exciting world of NFTs, including horses for racing, characters for battle, and accessories like weapons for Galaxy War. Explore our unique collection of digital assets, build your own stable or army, and compete with other players to become the ultimate champion. Join now and experience the future of gaming with NFTs!"
        />
        <meta property="og:image:width" content="1088" />
        <meta property="og:image:height" content="720" />

        <meta
          name="description"
          content="ROX Games offers an exciting world of NFTs, including horses for racing, characters for battle, and accessories like weapons for Galaxy War. Explore our unique collection of digital assets, build your own stable or army, and compete with other players to become the ultimate champion. Join now and experience the future of gaming with NFTs!"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
