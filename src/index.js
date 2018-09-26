import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage'
import axios from 'axios';
import propTypes from 'prop-types';

const http=axios.create({
    baseURL:' https://cnodejs.org/api/v1'
})

class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            topicLists:null,
            currentArticle:null
        };
        this.handleChangeTopicsList=this.handleChangeTopicsList.bind(this);
        this.transferTab=this.transferTab.bind(this);
        this.handleChangeArticle=this.handleChangeArticle.bind(this);
    }

    static childContextTypes={
        topicLists:propTypes.object,
        handleChangeTopicsList:propTypes.func,
        transferTab:propTypes.func,
        handleChangeArticle:propTypes.func,
        currentArticle:propTypes.object
    };

    transferTab(tab){
        switch (tab){
            case "share":
                return "分享";
            case "all":
                return "全部";
            case "good":
                return "精华";
            case "ask":
                return "问答";
            case "job":
                return "招聘";
            default:
                return "未知";
        }
    }

    handleChangeArticle(id){
        this.setState({
            currentArticle:null
        })
        http.get(`topic/${id}`)
            .then(res=>this.setState({
                currentArticle:res.data.data
            }))
    }

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
            handleChangeTopicsList:this.handleChangeTopicsList,
            transferTab:this.transferTab,
            handleChangeArticle:this.handleChangeArticle,
            ...this.state,
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
            <div>
                <HomePage/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));