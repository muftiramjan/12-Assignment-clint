
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect, useState } from "react";
// import UseAxios from "../../../Hoks/usehoks/useAxos/UseAxios";
// import Usecart from "../../../Hoks/usehoks/usecart/Usecart";
// import UseAuth from "../../../Hoks/usehoks/user/UseAuth";

// const ChekoutFrom = () => {
//   const [error,seterror]=useState('');
//   const [cliensecret,setcliensecret]=useState('');
//   const stripe = useStripe();
//   const elements = useElements();
//   const axiosSicoer = UseAxios();
//   const {user} =UseAuth();
//   const [cart]= Usecart();
//   const totalprice =cart.reduce( (total,item) => total +item.price,0)
  

//   useEffect( () =>{
//    axiosSicoer.post('/create-payment-intent',{price:totalprice})
//     .then(res => {
//       console.log(res.data.clientSecret);
//       setcliensecret(res.data.cliensecret)

//     })
//   },[axiosSicoer,totalprice])

//   const handelSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }
    
//     const card = elements.getElement(CardElement);
//     if (card === null) {
//       return;
//     }
    
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card,
//     });
    
//     if (error) {
//       console.log('payment error', error);
//       seterror(error.message);
//     } else {
//       console.log('payment method', paymentMethod);
//       seterror('')
//     }

//     // confirm payment
// const {paymentIntent,error: confrimerror}=await stripe.confirmCardPayment(cliensecret,{
//   payment_Method:{
//     card: card,
//     billing_details:{
//       email:user?.email || 'anonimus',
//       name:user?.displayName  || 'anonimus',

//     }
//   }
// });
// if(confrimerror){
//   console.log('confrimerror');
// }else{
//   console.log('paymentIntent',paymentIntent);
// }

//   };

//   return (
//     <form onSubmit={handelSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#424770',
//               '::placeholder': {
//                 color: '#aab7c4',
//               },
//             },
//             invalid: {
//               color: '#9e2146',
//             },
//           },
//         }}
//       />
//       <button className="btn btn-outline border-0 border-b-4 border-orange-400" type="submit" disabled={!stripe || !cliensecret}>
//         Pay
//       </button>
//       <p className="text-red-600">{error}</p>
//     </form>
//   );
// };

// export default ChekoutFrom;
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxios from "../../../Hoks/usehoks/useAxos/UseAxios";
import Usecart from "../../../Hoks/usehoks/usecart/Usecart";
import UseAuth from "../../../Hoks/usehoks/user/UseAuth";

const CheckoutForm = () => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxios();
  const { user } = UseAuth();
  const [cart] = Usecart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price: totalPrice })
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
      .catch(err => {
        console.error('Error creating payment intent:', err);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (paymentMethodError) {
      console.log('Payment method error', paymentMethodError);
      setError(paymentMethodError.message);
    } else {
      console.log('Payment method', paymentMethod);
      setError('');
    }

    // Confirm payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        },
      },
    });

    if (confirmError) {
      console.log('Confirm error', confirmError);
      setError(confirmError.message);
    } else {
      console.log('PaymentIntent', paymentIntent);
    
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {/* || !clientSecret */}
        Pay
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default CheckoutForm;
