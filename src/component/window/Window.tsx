import React from "react";

interface IProps {
    name: string,
    age: number
}

interface IState {
    count: number
}

class Window extends React.Component<IProps, IState> {

    state = {
        count: 20
    }

    add = () => this.setState({count: this.state.count + 1})


    render(): React.ReactNode {
        const result = (<div>
            <p> i am Window {this.state.count}</p>
            <p> i am Window props name: {this.props.name}</p>
            <p> i am Window props age: {this.props.age}</p>
            <br/>
            <hr/>
            <button className={'button_click'} onClick={this.add}> add</button>
            <button className={'button_click'} onClick={() => this.setState({count: this.state.count - 1})}> sub
            </button>
        </div>)
        return result
    }
}

export default Window;
