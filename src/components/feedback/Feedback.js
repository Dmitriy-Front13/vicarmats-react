import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';
import './feedback.scss';

const Feedback = () => {
  const {hash} = useLocation();
  const ref = useRef(null);
  useEffect(() => {
    if (hash) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <section className="feedback section" ref={ref}>
      <div className="container">
        <h2 className="title section__title feedback__title">Any questions?
        </h2>
        <p className="section__sub-title feedback__sub-title">Fill out the form below, and we will call you
          back as soon as possible:
        </p>
        <form method="post" name="feedback" id="feedback-form" className="feedback-form">
          <input type="hidden" name="formName" value="feedback" />
          <div className="form-field feedback-form__field">
            <input type="text" required name="userName" className="feedback-form__input form-control"
              placeholder="Your name*" />
          </div>
          <div className="form-field feedback-form__field">
            <input type="email" required name="userEmail" className="feedback-form__input form-control"
              placeholder="Your email*" />
          </div>
          <div className="form-field feedback-form__field">
            <textarea name="userMessage" required id="user-message"
              className="feedback-form__message form-control" placeholder="Your question*"></textarea>
          </div>
          <button type="submit" className="button feedback-form__button">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Feedback;