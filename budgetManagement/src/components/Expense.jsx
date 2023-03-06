import { dateFormat } from "../helpers"

import savingsIcon from '../img/savings_icon.svg'
import foodIcon from '../img/food_icon.svg'
import homeIcon from '../img/home_icon.svg'
import spentIcon from '../img/spent_icon.svg'
import leisureIcon from '../img/leisure_icon.svg'
import healtIcon from '../img/healt_icon.svg'
import subscriptionIcon from '../img/subscriptions_icon.svg'

const iconDictionary = {
    saving: savingsIcon,
    food: foodIcon,
    home: homeIcon,
    spent: spentIcon,
    leisure: leisureIcon,
    healt: healtIcon,
    subscriptions: subscriptionIcon,
}

const Expense = ({expense}) => {
  const {category, name, quantity, id, date} = expense
  
   return (
    <div className="expense shadow">
        <div className="content-amount">
            <img 
                src={iconDictionary[category]}
                alt="Icon" 
            />
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