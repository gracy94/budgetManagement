

const NewBudget = () => {
  return (
    <div className="budget-container container shadow">
        <form className="form">
            <div className="field">
                <label>Define Budget</label>
                <input 
                    type="text" 
                    className="new-budget"
                    placeholder="Add Budget"   
                />             
            </div>
            <input 
                type="submit" 
                value="Add"
            />
        </form>
    </div>
  )
}

export default NewBudget