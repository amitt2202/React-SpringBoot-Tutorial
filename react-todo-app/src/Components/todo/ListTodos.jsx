import React,{Component} from "react";

class ListTodos extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos : [
                {id:1, description : "Learn React", done: false, targetDate : new Date()},
                {id:2, description : "Become Expert", done: false, targetDate : new Date()},
                {id:3, description : "Teach React to others", done: false, targetDate : new Date()},
            ]
        }
    }
    render(){
        return(
            <div className="ListTodos">
                <h1>Todos List</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                        <th>Description</th>
                        <th>Is Completed?</th>
                        <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(x=>
                    <tr key={x.id}>
                        <td>{x.description}</td>
                        <td>{x.done.toString()}</td>
                        <td>{x.targetDate.toString()}</td>
                    </tr>
                    )}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
export default ListTodos