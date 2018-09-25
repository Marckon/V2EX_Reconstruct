import React from 'react';
import {Card,Button} from 'antd';

class LoginPanel extends React.Component{

    render(){
        return (
            <Card
                title={"Cnode：Cnode专业中文社区"}
            >
                <p>您可以 <a href={"#"}>登录</a>或者<a href={"#"}>注册</a>，也可以</p>
                <Button type={"primary"}>通过GitHub登录</Button>
            </Card>
        )
    }
}

export default LoginPanel;