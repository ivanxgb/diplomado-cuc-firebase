import React, { useState } from "react";

export function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, lastName, email, phone, country);
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
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Gonzalez"
            value={lastName}
            onChange={({ target }) => setLastName(target.value)}
            required
          />
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
            <option value="Colombia">Colombia</option>
            <option value="Mexico">Mexico</option>
            <option value="Peru">Peru</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-5">
          Submit
        </button>
      </form>
    </>
  );
}
