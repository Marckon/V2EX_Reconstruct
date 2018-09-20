import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage'

class App extends React.Component{
    render(){
        return (
            <div>
                <HomePage/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))