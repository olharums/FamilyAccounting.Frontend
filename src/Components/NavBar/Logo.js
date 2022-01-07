import { Container } from "react-bootstrap";
import { IoSquare } from "react-icons/io5";
import { Link } from "react-router-dom";

import { MAIN_PAGE_ROUTE } from "../../utils/consts";

const Logo = ({ position }) => {
  const COLOR_BY_POSITION = {
    navbar: "text-light-green",
    footer: "text-dark-green",
  };

  return (
    <Link to={MAIN_PAGE_ROUTE} className="a-logo">
      <Container
        className="d-flex flex-row text-center cursor-pointer"
        style={{ width: "fit-content" }}
      >
        <Container>
          <IoSquare size={60} id="logo-square" />

          <h1
            className={"font-regular " + COLOR_BY_POSITION[position]}
            id="logo-letter"
          >
            F
          </h1>
        </Container>

        <Container
          className="text-white text-start"
          style={{ marginLeft: "-3em" }}
        >
          <h5 className="font-light" style={{ marginTop: "0.3em" }}>
            Family
            <br />
            Accounting
          </h5>
        </Container>
      </Container>
    </Link>
  );
};
export default Logo;
