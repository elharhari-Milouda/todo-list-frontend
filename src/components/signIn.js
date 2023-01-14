import React from "react";
import Template from "./Template";

import { Link } from "react-router-dom";

export default function signIn() {
  return (
    <div className="popup">
      <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">S'authentifier:</h4>

              <div class="form-group">
                <label for="exampleInputUsername1">Username</label>
                {/* <select
                    class="form-control form-control-sm"
                    id="exampleFormControlSelect3"
                  >
                    {todoList.map((task) => (
                      <option>{task.name}</option>
                    ))}
                  </select> */}
                {/*  */}
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  name="username"
                  placeholder="Username"
                  //value={data.name}
                  // onChange={(e) => handle(e)}
                ></input>
                {/*  */}
                <label for="exampleInputUsername1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  placeholder="password"
                  //value={data.name}
                  // onChange={(e) => handle(e)}
                ></input>
              </div>
              <button
                //type="submit"
                class="btn btn-primary mr-2"
                component={Link}
                to="/dashboard"
              >
                S'authentifier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
