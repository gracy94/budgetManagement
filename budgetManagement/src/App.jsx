import { useState, useEffect} from 'react'
import Header from './components/Header'
import Filters from './components/Filters';
import ExpenseList from './components/ExpenseList';
import Modal from './components/Modal';
import { generateId } from './helpers';
import NewExpenseIcon from './img/new_expense.svg'

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );

  const [validBudget, setValidBudget] = useState(false);

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  )

  const [expenseEdit, setExpenseEdit] = useState({})

  const [filter, setFilter] = useState('')
  const [filterExpenses, setFilterExpenses] = useState([])

  useEffect(() => {
    if ( Object.keys(expenseEdit).length > 0 ) {
      setModal(true)

      setTimeout(() => {
        setAnimateModal(true)
      }, 1000);
    }
  }, [expenseEdit])

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])
  
  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0
    if(budgetLS >0) {
      setValidBudget(true)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  }, [expenses])

  useEffect(() => {
    if(filter) {
      //filter expenses by category
      const filterExpenses = expenses.filter (expense => expense.category === filter)
      setFilterExpenses(filterExpenses)
    }
  }, [filter])
  

  const handleNewExpense = () => {
      setModal(true)
      setExpenseEdit({})

      setTimeout(() => {
        setAnimateModal(true)
      }, 1000);

  }

  const saveExpense = (expense) => {
    if (expense.id) {
      // Edit
      const updatedExpenses = expenses.map ( expenseState => 
            expenseState.id === expense.id ? expense : expenseState)
      setExpenses(updatedExpenses)
      setExpenseEdit({})
    } else {
      // New Expense
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses([...expenses, expense])
    }

    setAnimateModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
  }

  const deleteExpense = id => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(updatedExpenses)
  }

  return (
    <div className={modal ? 'set' : ''}>
      <Header
        expenses = {expenses}
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget}
      />

      {validBudget && (
        <>
          <main>
            <Filters
              filter = {filter}
              setFilter = {setFilter}
            />
            <ExpenseList
              expenses= {expenses}
              setExpenseEdit = {setExpenseEdit}
              deleteExpense = {deleteExpense}
              filter = {filter}
              filterExpenses = {filterExpenses}
            />
          </main>
          <div className="new-expense">
            <img 
                src={NewExpenseIcon} 
                alt="New Expense Icon" 
                onClick={handleNewExpense}
            />
          </div>
        </>
      )}

      {modal && <Modal 
                    setModal={setModal}
                    animateModal={animateModal}
                    setAnimateModal={setAnimateModal}
                    saveExpense = {saveExpense}
                    expenseEdit = {expenseEdit}
                    setExpenseEdit = {setExpenseEdit}
                />}
    </div>
  );
}

export default App
