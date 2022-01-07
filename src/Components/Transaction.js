import { Card, Col, Container, Row } from "react-bootstrap";
import { HiPlus } from "react-icons/hi";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { useState } from "react";
// import { BsClipboardPlus } from "react-icons/bs"; mobile

const Transaction = ({ title, data }) => {
  const recordNumberDefault = 5;
  const [showedNumber, setShowedNumber] = useState(recordNumberDefault);
  const [isHiddenRecordsLeft, setIsHiddenRecordsLeft] = useState(true);

  const showMore = (event) => {
    event.preventDefault();

    const moreRecords = 1;
    if (showedNumber + moreRecords >= data.length) {
      setShowedNumber(data.length);
      setIsHiddenRecordsLeft(false);
    } else {
      setShowedNumber(showedNumber + moreRecords);
    }
  };

  const hideRecords = (event) => {
    event.preventDefault();

    setShowedNumber(recordNumberDefault);
    setIsHiddenRecordsLeft(true);
  };

  return (
    <Container className="white-cont transaction-cont">
      <h3 className="font-bold">{title}</h3>

      <button className="add-button m-3 ">
        <HiPlus />
        {/* <BsClipboardPlus />  for mobile */}
        Добавить
      </button>

      <Card className="mt-2">
        {data.slice(0, showedNumber).map((transaction) => {
          return (
            <Row
              className={transaction.id % 2 ? "dark" : "light"}
              key={transaction.id}
            >
              <Col md={3}>
                <h4>{transaction.data}</h4>
              </Col>

              <Col className="text-start">
                <h4>{transaction.name}</h4>
              </Col>

              <Col md={3}>
                <h4>{transaction.sum}</h4>
              </Col>
            </Row>
          );
        })}
      </Card>

      {isHiddenRecordsLeft ? (
        <a href="#" onClick={showMore}>
          <h5>
            Показать ещё
            <BsFillCaretDownFill />
          </h5>
        </a>
      ) : (
        <a href="#" onClick={hideRecords}>
          <h5>
            Скрыть
            <BsFillCaretUpFill />
          </h5>
        </a>
      )}
    </Container>
  );
};
export default Transaction;
