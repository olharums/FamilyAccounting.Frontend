import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";

import Transaction from "../components/Transaction/Transaction";
import { Context } from "../ContextedApp";

const Incomes = () => {
  const { transactions } = useContext(Context);
  useEffect(() => {
    //get data
    // set store
  }, [transactions]);
  return (
    <Container>
      <Transaction title={"Доходы"} data={transactions.incomes} />
    </Container>
  );
};
export default Incomes;
