import { Col, Container, Row } from "react-bootstrap";
import { BsCoin } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { GiCoins, GiMoneyStack, GiTwoCoins } from "react-icons/gi";
import { SiBitcoin } from "react-icons/si";
import { ImCoinEuro } from "react-icons/im";
import { Link } from "react-router-dom";

import phone from "../../assets/phone.jpg";
import { REGISTRATION_ROUTE } from "../../utils/consts";
import "./styles.scss";
import { IoPhonePortraitOutline } from "react-icons/io5";

const MainPage = () => {
  return (
    <Container className="main-cont">
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

        <Col
          md={5}
          className="d-flex flex-column justify-content-around align-items-center"
        >
          <img
            alt=""
            src={phone}
            width={"200px"}
            className="position-absolute"
            style={
              {
                // transform: "rotate(-15deg)",
              }
            }
          />
          {/* <img
            alt=""
            src={phone}
            width={"200px"}
            className="position-absolute"
            style={{
              transform: "rotate(20deg)",
              marginTop: "100px",
            }}
          /> */}
          {/* <Row className="justify-content-start mt-5" style={{ width: "50%" }}>
            <div
            // style={{
            //   width: "100%",
            //   // textAlign: "left",
            //   backgroundColor: "red",
            // }}
            >
              <BsCoin fill="#FFD700" size={"4rem"} />
            </div>
          </Row>
          <Row className="justify-content-center" style={{ width: "50%" }}>
            <div
              style={{
                // width: "40%",
                textAlign: "right",
              }}
            >
              <SiBitcoin fill="#FFD700" size={"4rem"} />
            </div>
          </Row>
          <Row className="justify-content-center" style={{ width: "50%" }}>
            <div
              style={{
                width: "40%",
                textAlign: "center",
              }}
            >
              <ImCoinEuro fill="#FFD700" size={"4rem"} />
            </div>
          </Row>
          <Row
            className="justify-content-center align-items-baseline"
            style={{ width: "50%" }}
          >
            <Col style={{ margin: 0, padding: 0 }}>
              <GiTwoCoins fill="#FFD700" size={"4rem"} />
            </Col>
            <Col
              style={{
                marginLeft: "-6rem",
                marginRight: "-3rem",
                marginTop: "-2rem",
                padding: 0,
              }}
            >
              <FaCoins fill="#FFD700" size={"4rem"} />
            </Col>

            <Col style={{ margin: 0, padding: 0 }}>
              <GiMoneyStack fill="#FFD700" size={"10rem"} />
            </Col>
          </Row>
          <div style={{ position: "relative" }}>
            <IoPhonePortraitOutline size={"30rem"} />
          </div> */}
        </Col>
      </Row>
    </Container>
  );
};
export default MainPage;
