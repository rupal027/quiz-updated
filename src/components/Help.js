import Modal from "./Modal";
import classes from './Help.module.css';
const Help = (props) => {
    const cartItems = (
        <ul className={classes['cart-items']}>
          {[{id: 'c1', name:'sushi', amount: 2}].map((item) => (
              <li>{item.name}</li>
          ))}
        </ul>
      ); 
    return (
        <Modal >
 
      {cartItems}
     
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        
      </div>
    </Modal>
    )

}

export default Help;