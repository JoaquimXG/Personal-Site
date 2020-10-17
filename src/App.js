import React, { Component } from "react";

//Global styles
import GlobalStyle from './GlobalStyles';
import NumberColumn from "./components/NumberColumn";

class App extends Component {
    render() {
        return (
            <div className="App">
                <GlobalStyle />
                <NumberColumn/>
                <div className="mainBody">
                    <p>test</p>
                </div>
            </div>
        );
    }
}

export default App;
