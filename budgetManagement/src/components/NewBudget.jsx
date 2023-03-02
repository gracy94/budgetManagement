import { useState } from "react"
import Message from "./Message"


const NewBudget = ({budget, setBudget, setValidBudget}) => {

    const [message, setMessage] = useState("")

    const handleBudget = (e) => {
        e.preventDefault()
        
        if (!budget || budget <0) {
            setMessage('It is not a valid budget')
            return
        }

        setMessage('')
        setValidBudget(true)

    }

  return (
    <div className="budget-container container shadow">
        <form className="form" onSubmit={handleBudget}>
            <div className="field">
                <label>Define Budget</label>
                <input 
                    type="number" 
                    className="new-budget"
                    placeholder="Add Budget"
                    value={budget}
                    onChange= { (e) => setBudget(Number(e.target.value))}
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