import React, { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/submit", form);
      setMessage(res.data.message);
      setForm({ name: "", email: "" });
    } catch (err) {
      setMessage("Error submitting form");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg p-4 bg-white rounded"
        style={{
          width: "100%",
          maxWidth: "400px", // Maximum width of the form
        }}
      >
        <div class="">
          <h2 className="mb-4 text-center text-primary">
            React + Express JS Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
          {message && (
            <div className="alert alert-info mt-3 text-center">{message}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
