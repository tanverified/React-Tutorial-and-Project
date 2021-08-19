import React from "react";

function TodoInput(props) {
  
  return (
    <div className="card card-body my-3">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book" />
            </div>
          </div>
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add todo item" value={props.value}
            onChange={props.inputHandler}
          />
        </div>
        <button className="btn btn-block btn-primary mt-3 text-uppercase" onSubmit={props.submitHandler}>
          add item
        </button>
    </div>
  );
}

export default TodoInput;
