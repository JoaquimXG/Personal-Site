import React, { Component } from "react";

//Global styles
import GlobalStyle from "./GlobalStyles";
import NumberColumn from "./components/NumberColumn";
import Body from "./components/Body";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainBodyHeight: 0
        }
    }

    getMainBodyHeight(height) {
        this.setState({mainBodyHeight: height});
    }

    render() {
        return (
            <div className="App">
                <GlobalStyle />
                <NumberColumn height={this.state.mainBodyHeight}/>
                <Body getMainBodyHeight={this.getMainBodyHeight.bind(this)} />
            </div>
        );
    }
}

export default App;
