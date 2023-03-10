import { useState, useEffect} from 'react'

const BudgetControl = ({ expenses, budget}) => {

    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)
    
    useEffect(() => {
      const totalSpent = expenses.reduce( (total, expense)=> expense.quantity + total, 0)
      const totalAvailable = budget - totalSpent;

      setAvailable(totalAvailable)
      setSpent(totalSpent)
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
            <p>Graph here</p>
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