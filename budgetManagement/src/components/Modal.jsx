import CloseBtn from '../img/close_icon.svg'

const Modal = ({setModal, animateModal, setAnimateModal}) => {

    const hideModal = () => {
        
        setAnimateModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

  return (
    <div className="modal">
        <div className="close-modal">
            <img 
                src={CloseBtn} 
                alt="close modal" 
                onClick={hideModal}
                />
        </div>
        <form className={`form ${animateModal ? 'animate' : 'close'}`}>
            <legend>New Expense</legend>
            <div className='field'>
                <label htmlFor="name">Expense Name</label>
                <input 
                    id='name'
                    type="text"
                    placeholder='Add the name of the Expense'
                    />
            </div>
            <div className='field'>
                <label htmlFor="quantity">Quantity</label>
                <input 
                    id='quantity'
                    type="number"
                    placeholder='Add the quantity of the Expense'
                    />
            </div>
            <div className='field'>
                <label htmlFor="category">Category</label>
                <select 
                    id="category">
                    <option value="">-- Select --</option>
                    <option value="saving">Saving</option>
                    <option value="food">Food</option>
                    <option value="home">Home</option>
                    <option value="spent">Miscellaneous Expenses</option>
                    <option value="leisure">Leisure</option>
                    <option value="healt">Healt</option>
                    <option value="subscriptions">Subscriptions</option>
                </select>
            </div>

            <input type="submit" value="Add Expense" />
        </form>
    </div>
  )
}

export default Modal