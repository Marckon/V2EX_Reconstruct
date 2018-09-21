import React from 'react';
import {
    V2Header,
    TopicsList
} from '../../components';
import {Layout,Row,Col} from 'antd';
import styles from './index.scss';

const {Header,Content,Sider,Footer}=Layout;

class  HomePage extends React.Component{

    render(){
        return (
            <Layout>
                <Header className={styles.header}>
                    <V2Header/>
                </Header>
                <Row className={styles.middle}>
                    <Col span={16} offset={2}>
                            <TopicsList/>
                    </Col>
                    <Col span={6}>

                    </Col>
                </Row>
                <Footer>

                </Footer>
            </Layout>
        )
    }
}

export default HomePage;
