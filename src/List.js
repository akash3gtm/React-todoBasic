import React from "react";

class List extends React.Component{
    constructor(props){
        super(props);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.i = 0;
    }

    handleCheck(e){
        const id = e.target.id;
        const index = id[id.length - 1];
        this.props.check(index);
    }

    handleClick(e){
        const classname = e.currentTarget.className;
        const index = classname[classname.length-1];
        const checkIfEdit = classname[0];
        if(checkIfEdit === "e")
        {
            document.getElementById("inputTask").value = this.props.list[index][0];
        }
        this.props.del(index);
    }

    render(){
        // this.i ++;
        // console.log(this.i);
        return(
                this.props.list.map( (task,i)=>{
                    return (
                        <div className="row" id={"row"+i} key={"row"+i}>
                            <input type="checkbox" key="isCompleted" id={"complete"+i} onChange={this.handleCheck} />
                            <span className={"task task"+task[1]} key = {"task"+i} > {task[0]} </span>
                            <button className={"edit edit"+i} key = {"edit"+i} onClick={this.handleClick}><i className="fa-solid fa-eraser"></i></button>
                            <button className={"del del"+i} key={"del"+i} onClick={this.handleClick}><i className="fa-solid fa-ban"></i></button>
                        </div> )
                })
        )}

}

export default List;