import React from 'react';
import ReactDOM from 'react-dom';
import {Menu} from 'antd';

class App extends React.Component{
    render(){
        return (
            <Menu>
                <Menu.Item>
                    home
                </Menu.Item>
            </Menu>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))