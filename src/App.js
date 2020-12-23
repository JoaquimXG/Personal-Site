import React, { Component } from "react";

//Global styles
import GlobalStyle from './GlobalStyles';
import NumberColumn from "./components/NumberColumn";
import Body from './components/Body'

class App extends Component {
    render() {
        return (
            <div className="App">
                <GlobalStyle />
                <NumberColumn/>
                <Body/> 
            </div>
        );
    }
}

export default App;
