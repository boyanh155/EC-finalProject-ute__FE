import React from "react";
import RSA from "./RSA.js";

import styled from "styled-components";

const Attt = () => {
  return (    <div class="Wrapper">

  {/* <!-- Select key size --> */}
  <label for="cars">Key size :</label>
  <select class="select-key" id="key-size">
      <option value="512">512 bit</option>
      <option value="512">250 bit</option>
      <option value="1024" >1024 bit</option>
      <option value="4096" disabled>4096 bit</option>
  </select>
  {/* <!-- Button --> */}
  <button type="button" class="btn btn-outline-secondary generate-bt">Generate key</button>
  {/* <!-- Generate key --> */}
  <div class="form-floating">
      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
      <label for="floatingTextarea2">Private key</label>
  </div>
  <div class="form-floating">
      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
      <label for="floatingTextarea2">Public key</label>
  </div>
  {/* n d e */}
  <div class="row g-2">
      <div class="col-md">
          <div class="form-floating">
              <input type="text" class="form-control" id="n-box"/>
              <label for="n-box">n</label>
          </div>
      </div>
      <div class="col-md">
          <div class="form-floating">
              <input type="text" class="form-control" id="d-box"/>
              <label for="d-box">d</label>
          </div>
      </div>
      <div class="col-md">
          <div class="form-floating">
              <input type="text" class="form-control" id="e-box"/>
              <label for="e-box">e</label>
          </div>
      </div>
  </div>
</div>
);
};

export default Attt;
