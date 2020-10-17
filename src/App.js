import React, { Component } from "react";

//Global styles
import GlobalStyle from './GlobalStyles';
import NumberColumn from "./components/NumberColumn";
import MainBody from './components/MainBody'

class App extends Component {
    render() {
        return (
            <div className="App">
                <GlobalStyle />
                <NumberColumn/>
                <MainBody/> 
            </div>
        );
    }
}

export default App;
