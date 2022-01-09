import { Col, Row } from "react-bootstrap";

import Logo from "../Logo/Logo";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col className="text-start">
          <h5>
            <a href="">Контакты</a>
          </h5>

          <h5 className="my-3">
            <a href="">Поддержка</a>
          </h5>
        </Col>

        <Col className="text-end">
          <h5>
            <a href="">Условия использования</a>
          </h5>

          <h5 className="my-3">
            <a href="">Политика конфиденциальности</a>
          </h5>
        </Col>
      </Row>

      <Row className="text-center">
        <Row style={{ marginBottom: "-30px" }}>
          <Logo position={"footer"} />
        </Row>
        <h6>Copyright © 2022 Family Accounting. Все права защищены.</h6>
      </Row>
    </div>
  );
};
export default Footer;
