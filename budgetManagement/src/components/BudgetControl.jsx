import { useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetControl = ({ expenses, budget}) => {

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

  return (
    <div className='container budget-container shadow two-columns'>
        <div>
            <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                    pathColor: 'var(--violet)',
                    trailColor: 'var(--light-gray)',
                    textColor: 'var(--violet)'
                })}
                text={`${percentage}% Spent`}
            />
        </div>
        <div className='budget-content'>
            <p>
                <span>Budget: </span> {formatAmount(budget)}
            </p>
            <p>
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