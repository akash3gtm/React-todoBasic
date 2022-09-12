
import React from 'react';
import Greet from './Greet';
import List from './List';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.arr = [];
    this.state = {list:this.arr};
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.markCheck = this.markCheck.bind(this);
  }

  addTask(e){
    e.preventDefault();
    const task = e.target[0].value;
    e.target[0].value = '';
    if(task){
      this.arr.push([task,0]);
      this.setState({list:this.arr});
    }
  }

  markCheck(index){
    this.arr[index][1] = (this.arr[index][1] + 1)%2 ;
    this.setState({list:this.arr});
  }

  deleteTask(index){
    this.arr.splice(index,1);
    console.log(this.arr);
    this.setState({list:this.arr});
  }
  
  render(){
    return (
      <div className="todo">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Freehand" type="text/css"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise" type="text/css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        < Greet />
        <form id ="inputForm" onSubmit={this.addTask}>
          <input type="text" name="task" id="inputTask" placeholder="What do you want to do?"/>
          <button type="submit">Add Task</button>
        </form>
        <h2 id="head"> ToDo List </h2>
        <div className="list">
          < List list = {this.state.list} del = {this.deleteTask} check = {this.markCheck}/>
        </div>
      </div>
    )
  }
}

export default App;