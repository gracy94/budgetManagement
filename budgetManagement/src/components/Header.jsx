import BudgetControl from "./BudgetControl";
import NewBudget from "./NewBudget";

const Header = ({ budget, setBudget, setValidBudget, validBudget, setExpenses ,expenses }) => {
  return (
    <header>
      <h1>Budget Planner</h1>

      {validBudget 
      ? (<BudgetControl 
            expenses = {expenses}
            setExpenses = {setExpenses}
            budget={budget}
            setBudget={setBudget}
            setValidBudget={setValidBudget}
        />) 
      : (<NewBudget
            budget={budget}
            setBudget={setBudget}
            setValidBudget={setValidBudget}
          />
        )}
    </header>
  );
};

export default Header;
