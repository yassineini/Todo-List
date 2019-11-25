import React,{Component} from 'react';

class TodoList extends Component{
    constructor(){
        super();
        this.state ={
            userInput: "",
            Items:[]
        };
    }
    onChange(event){
        this.setState({
            userInput:event.target.value
        });
    }
    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput:event.target.value,
            Items: [...this.state.Items, this.state.userInput],
            
        });
    }
    render(){
        return(
            <div>
                <h1>Todo List</h1>
                <h1>Hello {this.state.userInput}</h1>
                <form>
                    <input 
                    value={this.state.userInput} 
                    type="text" placeholder="Write"
                    onChange={this.onChange.bind(this)}
                    /> <br/>
                    <button onClick={this.addTodo.bind(this)}>Ajouter</button>
                </form>
            </div>
        )
    }
}

export default TodoList;