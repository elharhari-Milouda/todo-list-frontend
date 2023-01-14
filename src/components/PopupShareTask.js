import React from "react";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import "./Popup.css";

function PopupShareTask(props) {
  const [todoList, setTodoList] = useState([]);
  const [data, setData] = useState({
    username: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  //const id = "";

  async function shareTodo() {
    try {
      const requestUrl = "http://localhost:8080/user/search?username=";

      const response = await axios(requestUrl + data.username, {
        method: "GET",
      });
      //const responseJSON = response.data;
      //alert(props.task_id);
      submit(response.data.id);
      //   const id = response.data.id;
      //   console.log("Username", response.data.id);
      //   setTodoList(responseJSON);
      //   alert(id);
    } catch (e) {
      console.log("errooor");
      console.log(e);
    }
  }

  function submit(user_id) {
    const shareUrl = "http://localhost:8080/user/add_task";
    const task_id = 6;
    axios
      .post(shareUrl + "?task_id=" + task_id + "&user_id=" + user_id)
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        alert("User not found");
      });
  }

  return props.trigger ? (
    <div className="popup">
      <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Partager avec:</h4>
              <form class="forms-sample">
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
                    onChange={(e) => handle(e)}
                  ></input>
                  {/*  */}
                </div>
                <button
                  //type="submit"
                  class="btn btn-primary mr-2"
                  onClick={() => shareTodo()}
                >
                  Share
                </button>
                <button
                  class="btn btn-light"
                  onClick={() => props.setTrigger(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopupShareTask;
