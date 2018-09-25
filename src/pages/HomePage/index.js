import React from 'react';
import {
    V2Header,
    TopicsList,
    LoginPanel,
    QRCode,
    FooterComponent
} from '../../components';
import {Layout,Row,Col,BackTop} from 'antd';
import styles from './index.scss';

const {Header,Footer}=Layout;

class  HomePage extends React.Component{

    render(){
        return (
            <Layout>
                <Header className={styles.header}>
                    <V2Header/>
                </Header>
                <Row className={styles.middle} >
                    <Col span={16} offset={2}>
                            <TopicsList/>
                    </Col>
                    <Col span={4} offset={1}>
                        <LoginPanel/>
                        <QRCode className={styles["qr-code"]}/>
                    </Col>
                </Row>
                <Footer className={styles.footer}>
                    <FooterComponent className={styles.footerContent}/>
                </Footer>
                <BackTop/>
            </Layout>
        )
    }
}

export default HomePage;
