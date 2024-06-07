
import { Elements } from "@stripe/react-stripe-js";
import Sectionhedin from "../../../components/Sectionhedin";
import { loadStripe } from "@stripe/stripe-js";
import ChekoutFrom from "./ChekoutFrom";
// add pubilisobol key

const stripePromis=loadStripe(import.meta.env.VITE_PAYMANT_GATWY_PK);
const Paymant = () => {
    return (
        <div>
            <Sectionhedin heding='paymant' sabheding='plaese payman'></Sectionhedin>
            <div>
                <Elements stripe={stripePromis}>
                <ChekoutFrom></ChekoutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Paymant;