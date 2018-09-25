import React from 'react';
import propTypes from 'prop-types';
import {List, Avatar, Icon, Skeleton} from 'antd';
import styles from './index.scss'

class TopicBar extends React.Component {

    static contextTypes = {
        topicLists: propTypes.object,
        transferTab:propTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }


    render() {
        const IconText=({type,text})=>{
            return(
                <span>
                <Icon type={type} />
                    {text}
            </span>
            )
        };

        const getDate=str=>{
            let date=new Date(str)
            return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        };

        if (this.context.topicLists) {
            return (
                <List
                    itemLayout={"vertical"}
                    dataSource={this.context.topicLists}
                    renderItem={item => (
                            <List.Item
                                actions={[<IconText type="message" text={item.reply_count} />,<IconText type={"eye"} text={item.visit_count}/>,<IconText type={"tag"} text={this.context.transferTab(item.tab)}/>,<IconText text={getDate(item.create_at)}/>,]}
                                extra={<a href={'#'}><img src={item.author.avatar_url} alt={item.author.loginname} className={styles.avatar}/></a>}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.author.avatar_url} shape={"circle"} size={"small"}/>}
                                    title={<a href={item.url}>{item.title}</a>}
                                    description={item.content.replace(/<[^>]+>/g,'').slice(0,90)+'...'}
                                />
                            </List.Item>
                    )}
                />
            )
        }
        else {
            return (
                <Skeleton active/>
            )
        }
    }
}

export default TopicBar;