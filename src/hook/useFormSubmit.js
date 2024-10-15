import { useState } from 'react';
import axios from 'axios';
import Toastify from 'toastify-js';

const useFormSubmit = (url) => {
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (data, onSuccess, customContent) => {
    setIsLoading(true);
    try {
      const response = await axios.post(url, data);

      if (response.status === 200) {
        if (onSuccess) {
          onSuccess(response);
        } if (customContent) {
          showToast(customContent);
        } else {
          showToast("Message was sent successfully!");
        }
      }
    } catch (error) {
      showToast("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const showToast = (content) => {
    Toastify({
      text: typeof content === 'string' ? content : undefined,
      node: typeof content === 'object' ? content : undefined,
      duration: 6000,
      close: true,
      gravity: "bottom",
      position: "center",
      stopOnFocus: true,
      offset: { y: 50 },
      className: "form-submit-toast",
    }).showToast();
  };

  return { isLoading, submitForm };
};

export default useFormSubmit;
