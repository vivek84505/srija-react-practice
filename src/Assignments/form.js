function Form(){
    return(
 <form className="registration-form">

  <div className="form-row">
    <label htmlFor="name">Name</label>

    <input
      id="name"
      name="name"
      placeholder="Enter your name"
      type="text"
      required
    />
  </div>

  <div className="form-row">
    <label>Age</label>

    <div className="radio-group">
      <label>
        <input type="radio" name="age" value=">=18" />
        18 or Above
      </label>
      <br></br>
      <label>
        <input type="radio" name="age" value="<18" />
        Below 18
      </label>
    </div>
  </div>

  <div className="form-row">
    <label htmlFor="state">State</label>

    <select id="state" name="state">
      <option value="Hyderabad">Hyderabad</option>
      <option value="Bangalore">Bangalore</option>
    </select>
  </div>

  <div className="form-row">
    <label id="address">Address</label>

    <textarea
      id="address"
      name="address"
      placeholder="Enter your address"
      required
    />
  </div>

  <div className="button-group">
    <button type="submit">Register</button>
    <button type="reset">Reset</button>
    <button type="reset">save</button>
    <button type="reset">Resubmit</button>
   <button type="reset">Reset</button>
    <button type="reset">save</button>
    <button type="reset">Resubmit</button>
        <button type="reset">Resubmit</button>


  </div>

  <div className="grid-container">
    <div>Box 12</div>
    <div>Box 2</div>
    <div>Box 3</div>
    <div>Box 4</div>
    <div>Box 5</div>
    <div>Box 6</div>
  </div>

</form>
    )
}
export default Form;