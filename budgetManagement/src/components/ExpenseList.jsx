import Expense from "./Expense"


const ExpenseList = ({expenses, setExpenseEdit, deleteExpense, filter, filterExpenses}) => {
  return (
    <div className="espenses-list container">
     
        {filter 
        ? (<>
            <h2>{filterExpenses.length ? 'Expenses' : "No expenses yet in this category"}</h2>
                
            {filterExpenses.map(expense => (
            <Expense 
                key= {expense.id}                
                expense={expense}
                setExpenseEdit ={setExpenseEdit}
                deleteExpense={deleteExpense}
                />))}
            </>)
        : (<>
            <h2>{expenses.length ? 'Expenses' : "No expenses yet"}</h2>
            {expenses.map(expense => (
            <Expense 
                key= {expense.id}                
                expense={expense}
                setExpenseEdit ={setExpenseEdit}
                deleteExpense={deleteExpense}
                />))}
          </>)
        }
    </div>
  )
}

export default ExpenseList