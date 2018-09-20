import React from 'react';
import {
    V2Header,
} from '../../components';
import {Layout} from 'antd';
import styles from './index.scss';

const {Header}=Layout;

class  HomePage extends React.Component{

    render(){
        return (
            <Layout>
                <Header className={styles.header}>
                    <V2Header/>
                </Header>
            </Layout>
        )
    }
}

export default HomePage;
