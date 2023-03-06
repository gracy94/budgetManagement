import { dateFormat } from "../helpers"


const Expense = ({expense}) => {
  const {category, name, quantity, id, date} = expense
  
   return (
    <div className="expense shadow">
        <div className="content-amount">
            <div className="expense-description">
                <p className="category">{category}</p>
                <p className="expense-name">{name}</p>
                <p className="expense-date">
                    Added on: {''}
                    <span>{dateFormat(date)}</span>
                </p>
            </div>
        </div>
        <p className="expense-amount">${quantity}</p>
    </div>
  )
}

export default Expense