import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import phone from "../assets/phone.jpg";
import { REGISTRATION_ROUTE } from "../utils/consts";

const MainPage = () => {
  return (
    <Container className="white-cont main-cont">
      <Row>
        <Col md={7}>
          <h1 className="font-bold">
            Веди учёт своих доходов и расходов с помощью одного клика!
          </h1>

          <h4 className="font-regular my-4">
            О приложении.
            <br />.<br />.<br />.<br />.<br />.
          </h4>

          <h4 className="font-regular">Нам доверяет 1 миллион пользователей</h4>

          <Link to={REGISTRATION_ROUTE}>
            <button className="green-button m-3 mx-5">Начать работу</button>
          </Link>
        </Col>

        <Col md={3} className="text-center">
          <img
            alt=""
            src={phone}
            width={"200px"}
            className="position-absolute"
            style={{
              transform: "rotate(-15deg)",
            }}
          />
          <img
            alt=""
            src={phone}
            width={"200px"}
            className="position-absolute"
            style={{
              transform: "rotate(20deg)",
              marginTop: "100px",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default MainPage;
