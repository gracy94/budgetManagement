import { useState } from "react"
import Message from "./Message"


const NewBudget = ({budget, setBudget}) => {

    const [message, setMessage] = useState("")

    const handleBudget = (e) => {
        e.preventDefault()
        
        if (!Number(budget) || Number(budget) <0) {
            setMessage('It is not a valid budget')
        } else {
            
        }
    }

  return (
    <div className="budget-container container shadow">
        <form className="form" onSubmit={handleBudget}>
            <div className="field">
                <label>Define Budget</label>
                <input 
                    type="text" 
                    className="new-budget"
                    placeholder="Add Budget"
                    value={budget}
                    onChange= { (e) => setBudget(e.target.value)}
                />             
            </div>
            <input 
                type="submit" 
                value="Add"
            />

            {message && <Message type='error'>{message}</Message>}
        </form>
    </div>
  )
}

export default NewBudget