import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import PopupShareTask from "./PopupShareTask";
import { useEffect, useState } from "react";
// import ButtonState from "./ButtonState"

GetGroupList.propTypes = {
    todoList: PropTypes.array,
};

GetGroupList.defaultProps = {
    todoList:[],
};

class ButtonState extends React.Component {
  state = {
    buttonValue: "In Progress",
  };

  handleButtonClick = () => {
    this.setState({ buttonValue: "Done" });
  };

  render() {
    return (
      <button class="btn btn-sm ml-3 btn-success" onClick={this.handleButtonClick}>{this.state.buttonValue}</button>
    );
  }
}


export default function GetGroupList(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  // const [task_id, setTaskId] = useState();
  
  const requestUrl = "http://localhost:8080/task/done";
    const todoDone = (taskId, done) => {
     //  alert(done);
    axios
      .post(
        requestUrl +
          "?task_id=" +
          taskId +
          "&done=" +
          !done
      )
      .then((res) => {
        console.log("task updated");
        console.log(res);
      })
      .catch(function (error) {
        alert("task already done");
      });

      };
      const todoShare = (taskId) => {
        
        };
    const {todoList} = props;
    return (
        <div className='post-list'>
          
          {/* //////////////// */}
            <div class="table-responsive">
                <table class="table">
                  <thead class="bg-light">
                    <tr>
                      <th>name</th>
                      <th>lastUpdateDesc</th>
                      <th>lastUpdateDate</th>
                      <th>deadline</th>
                      <th>done</th>
                    </tr>
                  </thead>
                  {todoList.map(task => ( 
                  <tbody>
                    <tr key={task.taskId}>
                      <td>{task.name}</td>
                      <td>{task.lastUpdateDesc}</td>
                      <td>{task.lastUpdateDate}</td>
                      <td>{task.deadline}</td>
                      <td>
                        {/* <button type="button" class="btn btn-sm ml-3 btn-success" onClick={() => todoDone(task.taskId, task.done)}>  </button>  */}
                        <ButtonState onClick={() => alert(1)}></ButtonState>
                        <button type="button" class="btn btn-sm ml-3 btn-primary" onClick={() => setButtonPopup(true)}> Share task </button> 
                      </td>
                    </tr>
                  </tbody>
                  ))}
                </table>
                <PopupShareTask trigger={buttonPopup} setTrigger= {setButtonPopup} />
            </div>
        </div>
    );
}