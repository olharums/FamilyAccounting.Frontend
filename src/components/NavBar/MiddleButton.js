import { Link } from "react-router-dom";

const MiddleButton = ({ hidden, link, isChosen, text }) => {
  return (
    <Link hidden={hidden} to={link}>
      <button className={"white-button " + (isChosen ? "chosen" : "")}>
        {text}
      </button>
    </Link>
  );
};
export default MiddleButton;
