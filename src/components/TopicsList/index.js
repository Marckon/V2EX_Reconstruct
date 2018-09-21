import React from 'react';
import TopicsListMenu from './TopicsListMenu';
import TopicBar from './TopicBar';
import {Row,Col} from 'antd';

class TopicList extends React.Component{
    render(){
        return (
            <Row>
                <Col span={20} offset={4}>
                    <TopicsListMenu/>
                    <TopicBar/>
                </Col>
            </Row>
        )
    }
}

export default TopicList;