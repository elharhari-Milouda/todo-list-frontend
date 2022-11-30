import React from 'react';
import PropTypes from 'prop-types';

GetTodoList.propTypes = {
    todoList: PropTypes.array,
};

GetTodoList.defaultProps = {
    todoList:[],
};

export default function GetTodoList(props) {
    const removeTodo = (status) => {
        if(status == false){
            status = true;
            alert(status);
        }
        //ila dazt true khas matb9ach f tableau
      };
    
    const {todoList} = props;
    return (
        <div className='post-list'>
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
                  {todoList.map(post => ( 
                  <tbody>
                    <tr key={post.id}>
                      <td>{post.name}</td>
                      <td>{post.lastUpdateDesc}</td>
                      <td>{post.lastUpdateDate}</td>
                      <td>{post.deadline}</td>
                      <td>
                        <button type="button" class="btn btn-sm ml-3 btn-success" onClick={() => removeTodo(post.done)}> Done </button> 
                      </td>
                    </tr>
                  </tbody>
                  ))}
                </table>
            </div>
        </div>
    );
}