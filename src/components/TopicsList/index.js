import React from 'react';
import TopicsListMenu from './TopicsListMenu';
import {Row,Col} from 'antd';

class TopicList extends React.Component{
    render(){
        return (
            <Row>
                <Col span={20} offset={4}>
                    <TopicsListMenu/>
                </Col>
            </Row>
        )
    }
}

export default TopicList;