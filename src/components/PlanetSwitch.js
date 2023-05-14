import {
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
} from "./KeyVisualStyles";

const PlanetSwitch = ({ data, activePlanet }) => {
  const planetSwitch = () => {
    switch (data.name) {
      case "Mercury":
        return (
          <Mercury
            href={data.path}
            aria-label={`${data.name} page`}
            $isActive={activePlanet === data.path}
            $planetColor={data.sectionColor}
          />
        );
      case "Venus":
        return (
          <Venus
            href={data.path}
            aria-label={`${data.name} page`}
            $isActive={activePlanet === data.path}
            $planetColor={data.sectionColor}
          />
        );
      case "Earth":
        return (
          <Earth
            href={data.path}
            aria-label={`${data.name} page`}
            $isActive={activePlanet === data.path}
            $planetColor={data.sectionColor}
          />
        );
      case "Mars":
        return (
          <Mars
            href={data.path}
            aria-label={`${data.name} page`}
            $isActive={activePlanet === data.path}
            $planetColor={data.sectionColor}
          />
        );
      case "Jupiter":
        return (
          <Jupiter
            href={data.path}
            aria-label={`${data.name} page`}
            $isActive={activePlanet === data.path}
            $planetColor={data.sectionColor}
          />
        );
      case "Saturn":
        return (
          <Saturn
            href={data.path}
            aria-label={`${data.name} page`}
            $isActive={activePlanet === data.path}
            $planetColor={data.sectionColor}
          />
        );
      case "Uranus":
        return (
          <Uranus
            href={data.path}
            aria-label={`${data.name} page`}
            $isActive={activePlanet === data.path}
            $planetColor={data.sectionColor}
          />
        );
      case "Neptune":
        return (
          <Neptune
            href={data.path}
            aria-label={`${data.name} page`}
            $isActive={activePlanet === data.path}
            $planetColor={data.sectionColor}
          />
        );
    }
  };
  return <>{planetSwitch()}</>;
};

export default PlanetSwitch;
