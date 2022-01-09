import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";

import Transaction from "../components/Transaction/Transaction";
import { Context } from "../ContextedApp";

const Expenses = () => {
  const { transactions } = useContext(Context);
  useEffect(() => {
    //get data
    // set store
  }, [transactions]);
  return (
    <Container>
      <Transaction title={"Расходы"} data={transactions.expenses} />
    </Container>
  );
};
export default Expenses;
