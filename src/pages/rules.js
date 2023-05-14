import React from "react";
import Layout from "../components/Layout";

export default function Rules() {
  return (
    <Layout>
      <div className="info-page">
        <div className="container">
          <h1>Galaxy War Game Rules</h1>
          <h3>Overview:</h3>
          <p>
            Welcome to the Galaxy War, an immersive multiplayer game that takes
            you on a thrilling journey through the far reaches of the galaxy. In
            this game, players will engage in intergalactic horse racing and
            epic battles for dominance over the seven planets in our solar
            system. The goal of the game is to conquer other planets, claim
            their resources, and become the most powerful ruler in the galaxy.
          </p>
          <h3>NFT Horse Racing:</h3>
          <p>
            The game features intergalactic horse racing on each of the seven
            planets, with over 20 unique courses on each planet. Each planet has
            its own distinct racecourses and weather conditions, which will
            affect the performance of the horses. To enhance the performance of
            their horses, players can purchase NFT horse accessories, such as
            advanced technology and speed or agility boosts.
          </p>
          <h3>Battle Galaxy Gameplay:</h3>
          <p>
            In addition to horse racing, players can engage in battles against
            other planets to conquer new territories and claim valuable
            resources. Each planet has its own unique species, with their own
            arsenal of starships, weapons, and accessories. As players progress
            through the game, they can upgrade their ships and weapons, recruit
            new members to their team, and compete in epic battles against other
            players.
          </p>
          <p>
            To engage in battles, players will need to purchase NFT species and
            other powerful game assets like starships, weapons, and accessories.
            Players can customize their ships and weapons to suit their
            individual play styles, and can engage in battles with other players
            or against the computer.
          </p>
          <h3>Game Currency:</h3>
          <p>
            The game uses its own cryptocurrency, known as {'"ROX Games"'} (ROX), as
            the in-game currency. ROX tokens can be used to purchase NFTs,
            upgrade ships and weapons, recruit new members to the team, and
            more. ROX tokens can be earned through gameplay or purchased with
            real money.
          </p>
          <h3>Player Rankings:</h3>
          <p>
            The game features a leaderboard that tracks player rankings based on
            their performance in horse races and battles. Players can climb the
            leaderboard by winning races, conquering new territories, and
            defeating other players in battle. The leaderboard is reset
            periodically to give new players a chance to compete.
          </p>
          <h3>Gameplay Mechanics:</h3>
          <p>
            The game is designed to be immersive and challenging, with various
            gameplay mechanics that will keep players engaged. These mechanics
            include:
          </p>
          <p>
            <ul>
              <li>
                <span>Breeding :</span> Players can breed their NFT horses to
                create new, faster horses with unique abilities. The breeding
                process requires careful consideration of the parent {"horses'"}
                attributes and the resulting {"offspring's"} potential.
              </li>
              <li>
                <span>Training :</span> Players can train their horses to
                improve their speed, agility, and endurance. Training requires a
                combination of time, resources, and careful management of the
                {"horse's"} energy levels.
              </li>
              <li>
                <span>Purchasing :</span> Players can purchase their starships,
                weapons, and other accessories to increase their power and
                capabilities. Careful consideration of the available resources
                and strategic planning is necessary to optimize the {"player's"}
                performance.
              </li>{" "}
              <li>
                <span>Recruiting :</span> Players can recruit new members to
                their team, each with their own unique abilities and attributes.
                Careful consideration of the {"player's"} overall strategy and team
                dynamics is necessary to maximize their performance.
              </li>{" "}
              <li>
                <span>Trading :</span> Players can trade NFTs with each other
                using the {"game's"} built-in marketplace. The marketplace is an
                essential feature for players looking to optimize their
                strategy, acquire new assets, and gain a competitive edge.
              </li>{" "}
              <li>
                <span>Events :</span> The game will feature periodic events,
                such as tournaments and challenges, that will give players the
                chance to win valuable prizes and increase their rankings. These
                events will test the {"player's"} abilities in various aspects of
                the game, including racing, battling, and strategic planning.
              </li>
            </ul>
          </p>
          <p>
            In summary, the ROX Galaxy War is an immersive and competitive game
            that provides hours of entertainment and excitement. Its advanced
            game mechanics, stunning visuals, and challenging gameplay make it
            suitable for players of all skill levels. With intergalactic horse
            racing and epic battles, players can experience the thrill of
            competing to conquer the galaxy. So what are you waiting for? Join
            the ROX Galaxy War today and take on the challenge of dominating the
            galaxy! With its unique blend of gameplay elements, the ROX Galaxy
            War is sure to provide a thrilling and engaging experience for all
            players.
          </p>
        </div>
        <style jsx>{`
          .info-page ul {
            padding-left: 20px;
          }
          .info-page ul li {
            list-style: disc;
            margin-bottom: 20px;
          }
          .info-page ul li span {
            font-weight: 700;
          }
        `}</style>
      </div>
    </Layout>
  );
}
