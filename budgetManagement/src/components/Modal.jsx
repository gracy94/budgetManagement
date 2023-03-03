import { useState } from 'react'
import Message from './Message'
import CloseBtn from '../img/close_icon.svg'

const Modal = ({setModal, animateModal, setAnimateModal, saveExpense}) => {

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState('')

    const hideModal = () => {
        
        setAnimateModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([name, quantity, category].includes('')) {
            setMessage('All fields are required')

            setTimeout(() => {
                setMessage('')
            }, 3000);
            return
        }

        saveExpense({name, quantity, category})
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
        <form 
            onSubmit={handleSubmit}
            className={`form ${animateModal ? 'animate' : 'close'}`}
        >
            <legend>New Expense</legend>

            {message && <Message type="error">{message}</Message>}
            <div className='field'>
                <label htmlFor="name">Expense Name</label>
                <input 
                    id='name'
                    type="text"
                    placeholder='Add the name of the Expense'
                    value={name}
                    onChange= { e => setName(e.target.value)}
                    />
            </div>
            <div className='field'>
                <label htmlFor="quantity">Quantity</label>
                <input 
                    id='quantity'
                    type="number"
                    placeholder='Add the quantity of the Expense'
                    value={quantity}
                    onChange= {e => setQuantity(Number(e.target.value))}
                    />
            </div>
            <div className='field'>
                <label htmlFor="category">Category</label>
                <select 
                    id="category"
                    value={category}
                    onChange= {e => setCategory(e.target.value)}
                    >
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