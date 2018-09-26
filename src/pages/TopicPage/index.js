import React from 'react';
import {
    TopicsList,
    LoginPanel,
    QRCode,
} from '../../components/index';
import styles from './index.scss';
import {Row,Col} from 'antd';

class TopicPage extends React.Component{

    render(){
        return(
            <Row className={styles.middle} >
                <Col span={16} offset={2}>
                    <TopicsList/>
                </Col>
                <Col span={4} offset={1}>
                    <LoginPanel/>
                    <QRCode className={styles["qr-code"]}/>
                </Col>
            </Row>
        )
    }
}
export default TopicPage;