import React from 'react';
// import { ReactComponent } from '*.svg';

// const Notfound = () => <h1>Not found</h1>

// export default Notfound
class Test extends React.Component{
    constructor(){
        super()
        this.state ={
            name:"test"
        }
    }
      handleClick(){
        console.log("clique")
      }
    render() {
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default Test;