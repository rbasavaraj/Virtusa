import React, {Component} from 'react';

class StateOne extends Component{
    constructor(){
        super();
        this.state={
            loc: "",
            length: 0,
        }
    }

    processInput=(myObj)=>{
        this.setState({
            loc: myObj.target.value,
            length: myObj.target.value.length,
        })
    }

    render(){
        return(
            <div className="center">
                <p>Enter Text: <input type="text" id="cityName" onChange={this.processInput} /></p>
                {/* <h2>TextBox Value: {this.state.loc} </h2> */}
                <h2>Count: {this.state.length} </h2>
            </div>
        )
    }
}

export default StateOne;