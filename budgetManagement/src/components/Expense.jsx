import {
    LeadingActions, 
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
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

const Expense = ({expense, setExpenseEdit, deleteExpense}) => {
  const {category, name, quantity, id, date} = expense

  const leadingActions = ()=> (
    <LeadingActions>
        <SwipeAction onClick={()=> setExpenseEdit(expense)}>
            Edit
        </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = ()=> (
    <TrailingActions>
        <SwipeAction 
            onClick={()=> deleteExpense(id)}
            destructive={true}
        >
            Delete
        </SwipeAction>
    </TrailingActions>
  )
  
   return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
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
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense