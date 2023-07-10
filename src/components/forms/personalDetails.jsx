import React from "react";

function PersonalDetails() {
  return (
    <div>
      <h3 className="text-center mb-4">Personal Details</h3>
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputFname">First Name</label>
            <input
              type="text"
              class="form-control"
              id="inputFname"
              placeholder="ex. Raj"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputLname">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="inputLname"
              placeholder="ex. Shinde"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputPhone">Phone</label>
            <input
              type="text"
              class="form-control"
              id="inputPhone"
              placeholder="ex. 1234567890"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="ex. johndoe@gmail.com"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputCity">City</label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="ex. city"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="inputZip">Postal Code</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Next
        </button>
      </form>
    </div>
  );
}

export default PersonalDetails;
