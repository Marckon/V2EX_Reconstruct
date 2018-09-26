import React from 'react';
import {Card,Avatar} from 'antd';

const {Meta}=Card;
class AuthorCard extends React.Component{

    render(){
        console.log(this.props)
        return (
            <Card
                title={"作者"}
            >
                <Meta
                    avatar={<Avatar src={this.props.avatar_url} size={"large"}/>}
                    title={<a>{this.props.authorname}</a>}
                    description={"作者的简介尚未公开api"}
                />
            </Card>
        )
    }
}

export default AuthorCard;