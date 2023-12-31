import React,{useState} from "react";
import axios from "axios";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = ({ carName }) => {
  const [reservationStatus, setReservationStatus] = useState("");

  const handleReserveClick = async () => {
    try {
      const response = await axios.post("/reservecar", { carName });
      if (response.status === 200) {
        // Car reserved successfully
        setReservationStatus("success");
        alert("sex")
      }
    } catch (error) {
      console.error(error);
      setReservationStatus("error");
    }
  };
  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Paypal
        </label>

        <img src={paypal} alt="" />
      </div>
      <div className="payment text-end mt-5">
        <button onClick={handleReserveClick}>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
