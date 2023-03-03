import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import NewExpenseIcon from './img/new_expense.svg'
import SuscriptionsIcon from './img/subscriptions_icon.svg'

function App() {
  const [budget, setBudget] = useState(0);
  const [validBudget, setValidBudget] = useState(false);

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const handleNewExpense = () => {
      setModal(true)

      setTimeout(() => {
        setAnimateModal(true)
      }, 1000);

  }

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget}
      />

      {validBudget && (
        <div className="new-expense">
          <img 
              src={NewExpenseIcon} 
              alt="New Expense Icon" 
              onClick={handleNewExpense}
          />
        </div>) 
      }

      {modal && <Modal 
                    setModal={setModal}
                    animateModal={animateModal}
                    setAnimateModal={setAnimateModal}
                />}
    </div>
  );
}

export default App
