import { useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetControl = ({ expenses, budget, setExpenses, setBudget, setValidBudget}) => {

    const [percentage, setPercentage] = useState(50)
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)
    
    useEffect(() => {
      const totalSpent = expenses.reduce( (total, expense)=> expense.quantity + total, 0)
      const totalAvailable = budget - totalSpent;

      const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2)

      setAvailable(totalAvailable)
      setSpent(totalSpent)

      setTimeout(() => {
        setPercentage(newPercentage)
      }, 1500);
    }, [expenses])
    
    const formatAmount = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: "USD"
        })
    }

    const handleResetApp = () => {
        const result = confirm('Do you want to reset budget?')
        if (result) {
            setExpenses([])
            setBudget(0)
            setValidBudget(false)
        }
    }

  return (
    <div className='container budget-container shadow two-columns'>
        <div>
            <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                    pathColor: percentage > 100 ? '#db2777' : 'var(--violet)',
                    trailColor: 'var(--light-gray)',
                    textColor: percentage > 100 ? '#db2777' : 'var(--violet)'
                })}
                text={`${percentage}% Spent`}
            />
        </div>
        <div className='budget-content'>
            <button className='reset-app'
                    type= "button"
                    onClick={handleResetApp}
            >Reset App
            </button>
            <p>
                <span>Budget: </span> {formatAmount(budget)}
            </p>
            <p className={`${available < 0 ? 'negative' : ''}`}>
                <span>Available: </span> {formatAmount(available)}
            </p>
            <p>
                <span>Spent: </span> {formatAmount(spent)}
            </p>
        </div>
    </div>
  )
}

export default BudgetControl