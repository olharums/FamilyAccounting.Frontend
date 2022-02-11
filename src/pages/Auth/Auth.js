import { useContext } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import {
  INCOMES_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../../utils/consts";
import { Context } from "../../ContextedApp";
import "./styles.scss";

const Auth = () => {
  const isLoginRoute = useLocation().pathname === LOGIN_ROUTE;

  const { user } = useContext(Context);

  return (
    <Container>
      <Container className="text-center auth-cont">
        <h2>{isLoginRoute ? "Авторизация" : "Регистрация"}</h2>

        <div className="form-floating my-4">
          <input
            type="text"
            className="form-control"
            id="loginInput"
            placeholder={"Логин"}
          />
          <label for="loginInput">Логин</label>
        </div>

        <div className="form-floating mb-2">
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Пароль"
          />
          <label for="passwordInput">Пароль</label>
        </div>

        <Link
          to={isLoginRoute ? REGISTRATION_ROUTE : LOGIN_ROUTE}
          className="auth-link"
        >
          {isLoginRoute
            ? "Нет аккаунта? Зарегистрироваться!"
            : "Есть аккаунт? Войти!"}
        </Link>

        <Link to={"/1" + INCOMES_ROUTE}>
          <button
            className="green-button mt-4 mb-2"
            onClick={() => user.setIsAuth(true)}
          >
            {isLoginRoute ? "Войти" : "Зарегистрироваться"}
          </button>
        </Link>
      </Container>
    </Container>
  );
};
export default Auth;
