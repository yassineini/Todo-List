import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { truncate } from 'fs';
import TodoList from './Todo/Todolist';

class App extends Component{
   render(){
      return(
         <div>
            <TodoList/>
         </div>
      );
   }
}
export default App;