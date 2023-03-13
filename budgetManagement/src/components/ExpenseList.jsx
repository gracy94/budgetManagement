import Expense from "./Expense"


const ExpenseList = ({expenses, setExpenseEdit}) => {
  return (
    <div className="espenses-list container">
        <h2>{expenses.length ? 'Expenses' : "No expenses yet"}</h2>

        {expenses.map(expense => (
            <Expense 
                key= {expense.id}                
                expense={expense}
                setExpenseEdit ={setExpenseEdit}
                />))}
    </div>
  )
}

export default ExpenseList