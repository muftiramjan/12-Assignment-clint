
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxios from "../../../Hoks/usehoks/useAxos/UseAxios";
import Usecart from "../../../Hoks/usehoks/usecart/Usecart";

const ChekoutFrom = () => {
  const [error,seterror]=useState('');
  const [cliensecret,setcliensecret]=useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSicoer = UseAxios();
  const [cart]= Usecart();
  const totalprice =cart.reduce( (total,item) => total +item.price,0)
  

  useEffect( () =>{
   axiosSicoer.post('/create-payment-intent',{price:totalprice})
    .then(res => {
      console.log(res.data.clientSecret);
      setcliensecret(res.data.cliensecret)

    })
  },[axiosSicoer,totalprice])

  const handelSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    
    if (error) {
      console.log('payment error', error);
      seterror(error.message);
    } else {
      console.log('payment method', paymentMethod);
      seterror('')
    }
  };

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
      <button className="btn btn-outline border-0 border-b-4 border-orange-400" type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
    </form>
  );
};

export default ChekoutFrom;