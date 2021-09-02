import { ChangeEvent, FormEvent, useState } from "react";

export const useForm = ({
  validations = {},
  initialValues = {},
  onSubmit = null,
}) => {
  const [data, setData] = useState(initialValues || {});
  const [errors, setErrors] = useState({});

  const [submit, setSubmit] = useState(false);

  // Needs to extend unknown so we can add a generic to an arrow function
  const handleChange = (e, sanitizeFn) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleOnBlur = (e) => {
    const { name } = e.target;
    const newErrors = { ...errors };
    if (validations) {
      let valid = true;

      switch (name) {
        case "from_name":
          const fromNameValue = data["from_name"];
          const fromNameValidation = validations["from_name"];
          valid = inputValidation(
            fromNameValidation,
            fromNameValue,
            newErrors,
            "from_name"
          );
          if (valid) delete newErrors["from_name"];
          break;
        case "reply_to":
          const replyTovalue = data["reply_to"];
          const replyToValidation = validations["reply_to"];
          valid = inputValidation(
            replyToValidation,
            replyTovalue,
            newErrors,
            "reply_to"
          );
          if (valid) newErrors["reply_to"] = "";
          break;
        case "message":
          const messageValue = data["message"];
          const messageValidation = validations["message"];
          valid = inputValidation(
            messageValidation,
            messageValue,
            newErrors,
            "message"
          );
          if (valid) newErrors["message"] = "";
          break;
      }
    }

    setErrors(newErrors);
    return;
  };

  const inputValidation = (
    validation = {},
    value = "",
    newErrors = {},
    key = ""
  ) => {
    let valid = true;
    if (validation?.required && !value) {
      valid = false;
      newErrors[key] = validation?.required?.message;
    } else {
      const pattern = validation?.pattern;
      if (pattern?.value && !RegExp(pattern.value).test(value)) {
        valid = false;
        newErrors[key] = pattern.message;
      }

      const custom = validation?.custom;
      if (custom?.isValid && !custom.isValid(value)) {
        valid = false;
        newErrors[key] = custom.message;
      }
    }
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validations) {
      let valid = true;
      const newErrors = {};
      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];
        valid = inputValidation(validation, value, newErrors, key);
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});

    if (onSubmit) {
      onSubmit(data);
      setSubmit(true);
      setData(initialValues || {});
    }
  };

  return {
    data,
    submit,
    handleChange,
    handleOnBlur,
    handleSubmit,
    errors,
  };
};
