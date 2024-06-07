import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";



const ChekoutFrom = () => {
const stripe = useStripe();
const elements =useElements();

    const handelSubmit =async (event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }
        const cart =elements.getElement(CardElement)
        if(cart === null){
            return
        }
    }

    return (
      <form onSubmit={handelSubmit}>
  <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>

      </form>
    );
};

export default ChekoutFrom;