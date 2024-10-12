import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Toastify from 'toastify-js';
import { getCurrentDate } from '../../utils/getCurrentDate';

import 'toastify-js/src/toastify.css';
import './feedback.scss';


const FeedbackForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const date = getCurrentDate();
      const response = await axios.post('https://vicarmats/server/action.php', {
        ...data,
        formName: 'feedback',
        date
      });

      if (response.status === 200) {
        Toastify({
          text: "Message was sent successfully!",
          duration: 6000,
          close: true,
          gravity: "bottom",
          position: "center",
          stopOnFocus: true,
          offset: {
            y: 50,
          },
          className: "form-submit-toast",
        }).showToast();
      }
    } catch (error) {
      Toastify({
        text: "Something went wrong",
        duration: 6000,
        close: true,
        gravity: "bottom",
        position: "center",
        stopOnFocus: true,
        offset: {
          y: 50,
        },
        className: "form-submit-toast",
      }).showToast();
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className={`feedback-form  ${isLoading ? 'form--pending' : ''}`} onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field feedback-form__field">
        <input className="feedback-form__input form-control"
          type="text"
          name="userName"
          placeholder="Your name*"
          {...register('userName', { required: 'Name is required' })} />
        {errors.userName && <span className='form-help'>{errors.userName.message}</span>}
      </div>
      <div className="form-field feedback-form__field">
        <input className="feedback-form__input form-control"
          type="email"
          name="userEmail"
          placeholder="Your email*"
          {...register('userEmail', {
            required: 'Email is required',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Invalid email address',
            },
          })} />
        {errors.userEmail && <span className='form-help'>{errors.userEmail.message}</span>}
      </div>
      <div className="form-field feedback-form__field">
        <textarea className="feedback-form__message form-control"
          name="userMessage"
          placeholder="Your question*"
          {...register('userMessage', { required: 'Message is required' })}></textarea>
        {errors.userMessage && <span className='form-help'>{errors.userMessage.message}</span>}
      </div>
      <button type="submit"
        className={`button feedback-form__button`}
        disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send'}
      </button>
    </form>
  )
}


const Feedback = () => {

  return (
    <section className="feedback section">
      <div className="container">
        <h2 className="title section__title feedback__title">Any questions?
        </h2>
        <p className="section__sub-title feedback__sub-title">Fill out the form below, and we will call you
          back as soon as possible:
        </p>
        <FeedbackForm />
      </div>
    </section>
  )
}

export default Feedback;