import React, { useState } from "react";
import { Error } from "../error/Error";

export function Form({ addUser }) {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      lastname,
      email,
      phone,
      country,
    };
    if (checkForm() === false) return;
    addUser(user);
    resetForm();
  };

  const checkForm = () => {
    setError({});
    if (name.trim() === "") {
      setError({ name: "Name is required" });
    }
    if (lastname.trim() === "") {
      setError({ lastname: "Lastname is required" });
    }
    if (email.trim() === "") {
      setError({ email: "Email is required" });
    }
    if (
      phone.trim() === "" ||
      phone.trim().length < 6 ||
      isNaN(parseInt(phone))
    ) {
      setError({ phone: "Phone must be a number and have at least 6 digits" });
    }
    if (country.trim() === "") {
      setError({ country: "Country is required" });
    }

    return Object.keys(error).length === 0;
  };

  const resetForm = () => {
    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCountry("");
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ivan"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
          {error.name && <Error error={error.name}></Error>}
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Gonzalez"
            value={lastname}
            onChange={({ target }) => setLastName(target.value)}
            required
          />
          {error.lastname && <Error error={error.lastname}></Error>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="igonzale4@cuc.edu.co"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
          {error.email && <Error error={error.email}></Error>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            minLength="6"
            maxLength="10"
            pattern="[0-9]+"
            placeholder="3012345678"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            required
          />
          {error.phone && <Error error={error.phone}></Error>}
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            className="form-control"
            id="country"
            value={country}
            onChange={({ target }) => setCountry(target.value)}
            required
          >
            <option value="">Choose a Country</option>
            <option value="Colombia">Colombia</option>
            <option value="Mexico">Mexico</option>
            <option value="Peru">Peru</option>
          </select>
          {error.country && <Error error={error.country}></Error>}
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-5">
          Submit
        </button>
      </form>
    </>
  );
}
