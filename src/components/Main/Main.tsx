import Homepage from "./Homepage/Homepage";
import PortfolioIndex from "./PortfolioIndex/PortfolioIndex";
interface Props {
  projectIndexOpened: boolean;
  setProjectIndexOpened: React.Dispatch<React.SetStateAction<boolean>>;
}
const Main: React.FC<Props> = ({
  projectIndexOpened,
  setProjectIndexOpened,
}) => {
  return (
    <>
      {projectIndexOpened ? (
        <PortfolioIndex />
      ) : (
        <Homepage setProjectIndexOpened={setProjectIndexOpened} />
      )}
    </>
  );
};

export default Main;
