import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";

import Transaction from "../Components/Transaction";
import { Context } from "../WrappedApp";

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
