import { useForm } from 'react-hook-form';
import OrderTotal from "../orderTotal/OrderTotal";
import './billingForm.scss';

const BillingForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="container">
      <h2 className="modalBuy__title">Billing Details</h2>
      <h4 className="modalBuy__sub-title">Please fill in your contact details to finalize your order. This information is used only for shipping and to contact you regarding your order.</h4>
      <form className="billing-form" onSubmit={handleSubmit(onSubmit)}>
        <input 
          className="modalBuy__form-input" 
          type="text" 
          placeholder="First name" 
          {...register("firstName", { required: true })}
        />
        {errors.firstName && <span className="form-help">First name is required</span>}

        <input 
          className="modalBuy__form-input" 
          type="text" 
          placeholder="Last name" 
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <span className="form-help">Last name is required</span>}

        <input 
          className="modalBuy__form-input" 
          type="email" 
          placeholder="Email address" 
          {...register("email", { required: true })}
        />
        {errors.email && <span className="form-help">Email is required</span>}

        <h5>Billing</h5>
        <input 
          className="modalBuy__form-input" 
          type="text" 
          placeholder="City" 
          {...register("city", { required: true })}
        />
        {errors.city && <span className="form-help">City is required</span>}

        <input 
          className="modalBuy__form-input" 
          type="text" 
          placeholder="Address" 
          {...register("address", { required: true })}
        />
        {errors.address && <span className="form-help">Address is required</span>}

        <input 
          className="modalBuy__form-input" 
          type="text" 
          placeholder="Apartments, suite (optional)" 
          {...register("apartments")}
        />

        <input 
          className="modalBuy__form-input" 
          type="tel" 
          placeholder="Phone" 
          {...register("phone", { required: true })}
        />
        {errors.phone && <span className="form-help">Phone number is required</span>}

        <div className="modalBuy__form-group-textarea">
          <h4 className="modalBuy__region-title">Order notes (optional)</h4>
          <textarea 
            className="modalBuy__form-textarea" 
            placeholder="Notes about your order, e.g. special notes for delivery."
            {...register("notes")}
          />
        </div>

        <div className="order__payment">
          <div className="order__payment-inner">
            <input type="checkbox" checked disabled />
            <label>PAYMENT VIA E-TRANSFER</label>
          </div>
          <p className="order__payment-text">
            Pay after placing the order with E-TRANSFER to <b style={{ color: 'blue' }}>info@eva-tech.ca</b>
          </p>
        </div>

        <OrderTotal />

        <button className="modalBuy__form-submit" type="submit">Place order</button>
      </form>
    </div>
  );
};

export default BillingForm;
