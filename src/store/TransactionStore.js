import { makeAutoObservable } from "mobx";

export default class TransactionStore {
  constructor() {
    this._incomes = [
      { id: 1, name: "income", data: "01.01.01", sum: 200 },
      { id: 2, name: "income", data: "01.01.01", sum: 200 },
      { id: 3, name: "income", data: "01.01.01", sum: 200 },
      { id: 4, name: "income", data: "01.01.01", sum: 200 },
      { id: 5, name: "income", data: "01.01.01", sum: 200 },
      { id: 6, name: "income", data: "01.01.01", sum: 200 },
      { id: 7, name: "income", data: "01.01.01", sum: 200 },
    ];

    this._expenses = [
      { id: 1, name: "expenses", data: "01.01.01", sum: 200 },
      { id: 2, name: "expenses", data: "01.01.01", sum: 200 },
      { id: 3, name: "expenses", data: "01.01.01", sum: 200 },
      { id: 4, name: "expenses", data: "01.01.01", sum: 200 },
      { id: 5, name: "expenses", data: "01.01.01", sum: 200 },
      { id: 6, name: "expenses", data: "01.01.01", sum: 200 },
      { id: 7, name: "expenses", data: "01.01.01", sum: 200 },
    ];

    makeAutoObservable(this);
  }

  setIncomes(data) {
    this._incomes = data;
  }

  get incomes() {
    return this._incomes;
  }

  setExpenses(data) {
    this._expenses = data;
  }

  get expenses() {
    return this._expenses;
  }
}
