import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";

import Transaction from "../Components/Transaction";
import { Context } from "../WrappedApp";

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
