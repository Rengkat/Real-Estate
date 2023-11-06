import { useContext } from "react";
import { usePaystackPayment } from "react-paystack";
import { Context } from "../../Contexts/AppContext";

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

const PaystackHookExample = () => {
  const { property } = useContext(Context);
  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: `${(10 / 100) * property.price}000`,
    publicKey: "pk_test_4f9d3c2879c7e7e6325a7d054e0a735594b658a0",
  };
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Pay Agent Fee
      </button>
    </div>
  );
};

const InspectionFee = () => {
  return (
    <div>
      <PaystackHookExample />
    </div>
  );
};

export default InspectionFee;

// name: `${formFirstName} ${formSurname}`,
// email: email,
// amount: (10 / 100) * property.price,
// product: property.title,
