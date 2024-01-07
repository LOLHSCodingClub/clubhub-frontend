import React, { useState } from "react";
import "./NewClub.css";

const NewClub = (props) => {

  const [clubname, setClubname] = useState("");

  return (
    <div className="auth-form-container">
      <h2>Create a New Club</h2>
      <form className="login-form">
        <label>Club name</label>
        <input placeholder="Enter Club Name"></input>
        <label>Club Description</label>
        <textarea
          rows="5"
          cols="50"
          name="description"
          placeholder="Be brief no more than 500 words"
        ></textarea>
        <label>Club Sponsor</label>
        <select name="dropdown">
          <option value="Ms Hiltz" selected>
            Ms Ashley Hiltz
          </option>
          <option value="Ruilson">Ruilson</option>
        </select>
        <label>Club Officers</label>
        <input placeholder="Officer Email"></input>{" "}
        <select name="dropdown">
          <option value="Ms Hiltz" selected>
            Ms Ashley Hiltz
          </option>
          <option value="Ruilson">Ruilson</option>
        </select>
        <br></br>
        <br></br>
        <input placeholder="Officer Email"></input>
        <select name="dropdown">
          <option value="Ms Hiltz" selected>
            Ms Ashley Hiltz
          </option>
          <option value="Ruilson">Ruilson</option>
        </select>
        <br></br>
        <br></br>
        <input placeholder="Officer Email"></input>
        <select name="dropdown">
          <option value="Ms Hiltz" selected>
            Ms Ashley Hiltz
          </option>
          <option value="Ruilson">Ruilson</option>
        </select>
        <br></br>
        <br></br>
        <input placeholder="Officer Email"></input>
        <select name="dropdown">
          <option value="Ms Hiltz" selected>
            Ms Ashley Hiltz
          </option>
          <option value="Ruilson">Ruilson</option>
        </select>
        <br></br>
        <br></br>
        <input placeholder="Officer Email"></input>
        <select name="dropdown">
          <option value="Ms Hiltz" selected>
            Ms Ashley Hiltz
          </option>
          <option value="Ruilson">Ruilson</option>
        </select>
        <br></br>
        <br></br>
        <label for="myfile">Club Image</label>
        <input type="file" id="myfile" name="myfile"></input>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );

}
export default NewClub;