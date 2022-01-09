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
        <Col md="3">
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
            link={LOGIN_ROUTE}
            isChosen={false}
            text={"Сводка"}
          />
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
