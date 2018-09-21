import React from 'react';
import {
    V2Header,
    TopicsList
} from '../../components';
import {Layout,} from 'antd';
import styles from './index.scss';

const {Header,Content,Sider,Footer}=Layout;

class  HomePage extends React.Component{

    render(){
        return (
            <Layout>
                <Header className={styles.header}>
                    <V2Header/>
                </Header>
                <Layout className={styles.middle}>
                    <Content>
                        <TopicsList/>
                    </Content>
                    <Sider>

                    </Sider>
                </Layout>
                <Footer>

                </Footer>
            </Layout>
        )
    }
}

export default HomePage;
