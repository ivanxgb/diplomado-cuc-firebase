import React from "react";

export function Form() {
  return (
    <>
      <h1 className="text-center">Diplomado CUC Taller 3</h1>
      <form className="container">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ivan"
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender" />
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="male"
              name="gender"
              value="male"
              required
            />
            <label className="form-check" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="female"
              name="gender"
              value="female"
              required
            />
            <label className="form-check" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select className="form-control" id="country" required>
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
