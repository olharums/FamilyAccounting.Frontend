import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import { Context } from "../../WrappedApp";
import Logo from "./Logo";
import {
  EXPENSES_ROUTE,
  INCOMES_ROUTE,
  LOGIN_ROUTE,
  MAIN_PAGE_ROUTE,
  REGISTRATION_ROUTE,
} from "../../utils/consts";

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
        <Col md="3">
          <Logo position={"navbar"} />
        </Col>

        <Col className="d-flex flex-row justify-content-evenly">
          <Link hidden={!user.isAuth} to={id + INCOMES_ROUTE}>
            <button
              className={"white-button " + (isIncomesRoute ? "chosen" : "")}
            >
              Доходы
            </button>
          </Link>

          <Link hidden={!user.isAuth} to={id + EXPENSES_ROUTE}>
            <button
              className={"white-button " + (isExpensesRoute ? "chosen" : "")}
            >
              Расходы
            </button>
          </Link>

          <Link hidden={!user.isAuth} to={LOGIN_ROUTE}>
            <button className="white-button"> Сводка</button>
          </Link>
        </Col>

        <Col md={3} className="text-center">
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
        </Col>
      </Row>
    </div>
  );
});
export default NavBar;
