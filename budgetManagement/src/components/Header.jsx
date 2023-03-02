import BudgetControl from "./BudgetControl";
import NewBudget from "./NewBudget";

const Header = ({ budget, setBudget, setValidBudget, validBudget }) => {
  return (
    <header>
      <h1>Budget Planner</h1>

      {validBudget 
      ? (<BudgetControl budget={budget}/>) 
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
