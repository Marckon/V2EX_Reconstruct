import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage'
import axios from 'axios';
import propTypes from 'prop-types';
import {BrowserRouter,Link,Route,IndexRoute} from 'react-router-dom';

const http=axios.create({
    baseURL:' https://cnodejs.org/api/v1'
})

class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            topicLists:null
        };
        this.handleChangeTopicsList=this.handleChangeTopicsList.bind(this);
    }

    static childContextTypes={
        topicLists:propTypes.object,
        handleChangeTopicsList:propTypes.func
    };

    handleChangeTopicsList(tab){
        this.setState({
            topicLists:null
        });
        http.get(`topics/?tab=${tab}`)
            .then(res=>{
                this.setState({
                    topicLists:res.data.data
                })
            })
    }

    getChildContext(){
        return {
            topicLists:this.state.topicLists,
            handleChangeTopicsList:this.handleChangeTopicsList
        }
    }

    componentDidMount(){
        http.get('/topics')
            .then(res=>{
                this.setState({
                    topicLists:res.data.data
                })
            })
    }

    render(){
        return (
            <BrowserRouter>
                <Route path={"/"} component={HomePage}/>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <App/>
    ,document.getElementById('root'))