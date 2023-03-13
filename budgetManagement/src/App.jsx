import { useState, useEffect} from 'react'
import Header from './components/Header'
import ExpenseList from './components/ExpenseList';
import Modal from './components/Modal';
import { generateId } from './helpers';
import NewExpenseIcon from './img/new_expense.svg'

function App() {
  const [budget, setBudget] = useState(0);
  const [validBudget, setValidBudget] = useState(false);

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const [expenses, setExpenses] = useState([])

  const [expenseEdit, setExpenseEdit] = useState({})

  useEffect(() => {
    if ( Object.keys(expenseEdit).length > 0 ) {
      setModal(true)

      setTimeout(() => {
        setAnimateModal(true)
      }, 1000);
    }
  }, [expenseEdit])
  

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
            <ExpenseList
              expenses= {expenses}
              setExpenseEdit = {setExpenseEdit}
              deleteExpense = {deleteExpense}
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
