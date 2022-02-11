import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import "./styles.scss";
import { Context } from "../../ContextedApp";
import Logo from "../Logo/Logo";
import {
  EXPENSES_ROUTE,
  INCOMES_ROUTE,
  LOGIN_ROUTE,
  MAIN_PAGE_ROUTE,
  REGISTRATION_ROUTE,
} from "../../utils/consts";
import MiddleButton from "./MiddleButton";

const NavBar = observer(() => {
  const { user } = useContext(Context);

  const id = "/1";

  const path = useLocation().pathname;

  const isIncomesRoute = path.includes(INCOMES_ROUTE);
  const isExpensesRoute = path.includes(EXPENSES_ROUTE);
  const isAuthorizationRoute =
    path === LOGIN_ROUTE || path === REGISTRATION_ROUTE;

  return (
    <div className="mt-2">
      <Row style={{ margin: 0 }} className="align-items-baseline">
        <Col md="2">
          <Logo position={"navbar"} />
        </Col>

        <Col className="d-flex flex-row justify-content-evenly">
          <MiddleButton
            hidden={!user.isAuth}
            link={id + INCOMES_ROUTE}
            isChosen={isIncomesRoute}
            text={"Доходы"}
          />

          <MiddleButton
            hidden={!user.isAuth}
            link={id + EXPENSES_ROUTE}
            isChosen={isExpensesRoute}
            text={"Расходы"}
          />

          <MiddleButton
            hidden={!user.isAuth}
            link={""}
            isChosen={false}
            text={"Сводка"}
          />
        </Col>

        <Col
          md={4}
          className="text-center d-flex flex-row justify-content-evenly align-items-center"
        >
          {user.isAuth ? (
            <Link to={MAIN_PAGE_ROUTE} hidden={isAuthorizationRoute}>
              <button
                className="white-button"
                onClick={() => user.setIsAuth(false)}
              >
                Выйти
              </button>
            </Link>
          ) : (
            <Link to={LOGIN_ROUTE} hidden={isAuthorizationRoute}>
              <button className="white-button">Войти</button>
            </Link>
          )}
          <label id="switch" class="switch">
            <input type="checkbox" onchange="toggleTheme()" id="slider" />
            <span class="slider round"></span>
          </label>
        </Col>
      </Row>
    </div>
  );
});
export default NavBar;
