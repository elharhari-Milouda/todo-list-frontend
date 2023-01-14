import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import moment from "moment";

function TodoForm2(props) {
  const requestUrl = "http://localhost:8080/task/personal";
  const { todoList } = props;
  const [data, setData] = useState({
    name: "",
    deadline: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(
        requestUrl +
          "?name=" +
          data.name +
          "&deadline=" +
          moment(data.deadline).format("DD/MM/YYYY")
      )
      .then((res) => {
        console.log("///////////////////////////////////imposii akkhti");
        console.log(res);
        window.location.reload(false);
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  const [selectedValues, setSelectedValues] = useState([]);

  function handleChange(event) {
    setSelectedValues(event.target.value);
  }

  return (
    <form className="todo-form" onSubmit={(e) => submit(e)}>
      {/* <form className="todo-form" onSubmit={handeleSubmit}></form> */}
      <div class="row">
        <div class="col-md-6 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="add-items d-flex flex-wrap flex-sm-nowrap">
                <input
                  type="text"
                  class="form-control todo-list-input flex-grow"
                  placeholder="Group name"
                  value={data.name}
                  name="name"
                  onChange={(e) => handle(e)}
                  id="name"
                  //ref={inputRef}
                />
                <select
                  multiple={true}
                  value={selectedValues}
                  onChange={handleChange}
                  class="form-control form-control-sm"
                  id="exampleFormControlSelect3"
                >
                  {todoList.map((task) => (
                    <option value={task.taskId}>{task.name}</option>
                  ))}
                </select>

                <button
                  class="add btn btn-primary font-weight-regular text-nowrap"
                  id="add-group"
                >
                  Create group
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default TodoForm2;
