import React, { useState } from "react";
import Modal from "react-modal";
import "./Contact.css";

Modal.setAppElement("#root");

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const modalStyles = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    clearError(name);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setErrors({ ...errors, [name]: `${name} is required` });
    }
  };

  const clearError = (name) => {
    setErrors({ ...errors, [name]: "" });
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
      setIsModalOpen(true);
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
          <div className="col-lg-4 custom-col">
            <h3>say hello</h3>
          </div>
          <div className="col-lg-8 custom-col form-input">
            <form onSubmit={handleSubmit}>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.name && (
                  <p className="text-danger">{errors.name}</p>
                )}
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.email && (
                  <p className="text-danger">{errors.email}</p>
                )}
              </div>
              <div className="form-group col-md-6">
                <textarea
                  className="form-control mb-3"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.message && (
                  <p className="text-danger">{errors.message}</p>
                )}
              </div>
              <br />
              <div className={`d-flex justify-content-center justify-content-lg-start justify-content-md-start`}>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={() => setIsModalOpen(false)}
              style={modalStyles}
              contentLabel="Message Sent Modal"
            >
              <button
                className="close-button"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
              <div className="modal-content">
                <h3>Sent!</h3>
                <br />
                <p>Thanks for your message.</p>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
