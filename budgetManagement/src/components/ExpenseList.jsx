import Expense from "./Expense"


const ExpenseList = ({expenses, setExpenseEdit, deleteExpense}) => {
  return (
    <div className="espenses-list container">
        <h2>{expenses.length ? 'Expenses' : "No expenses yet"}</h2>

        {expenses.map(expense => (
            <Expense 
                key= {expense.id}                
                expense={expense}
                setExpenseEdit ={setExpenseEdit}
                deleteExpense={deleteExpense}
                />))}
    </div>
  )
}

export default ExpenseList