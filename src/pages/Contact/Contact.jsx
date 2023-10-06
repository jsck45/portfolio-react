import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form data submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  return (
    <div className="contact-container">
      <h2 className="title text-start">contact</h2>
      <br />
      <hr />
      <div className="form-container">
      <div className="row mt-4">
        <div className="col-lg-4">
          <h3>say hello</h3>
        </div>
        <div className="col-lg-8 form-input">
          <form onSubmit={handleSubmit}>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>
            <div className="form-group col-md-6">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
            <div className="form-group col-md-6">
              <textarea
                className="form-control mb-3"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              {errors.message && <p className="text-danger">{errors.message}</p>}
            </div>
            <div className={`d-flex justify-content-center justify-content-lg-start justify-content-md-start`}>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
