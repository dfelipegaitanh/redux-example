import {deposit, withdraw} from "../../store/amount/action";
import {connect} from 'react-redux';
import {selectCurrentAmount} from "../../store/amount/reducer";

const Counter = ({amount, deposit,withdraw}) => {

  return (
    <div>
      <h1>Amount: {amount}</h1>
      <button onClick={() => deposit()}>Deposit $10</button>
      <button onClick={() => withdraw()}>Withdraw $10</button>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    amount: selectCurrentAmount(state)
  }
}

// export default Counter;
export default connect(mapStateToProps,{withdraw,deposit})(Counter)
