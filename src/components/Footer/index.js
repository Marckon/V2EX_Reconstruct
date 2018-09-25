import React from 'react';
import {Row, Col} from 'antd';
import styles from './index.scss'

class Footer extends React.Component {

    render() {

        return (
            <Row className={this.props.className}>
                <Col span={20}>
                    <Row className={styles.title}>基于React和Antd的社区重建</Row>
                    <Row>
                        <span>
                            作者Github：
                            <a href="https://github.com/Marckon">https://github.com/Marckon</a>
                        </span>
                    </Row>
                    <Row>
                        <span>
                            邮箱联系：
                            mystric@foxmail.com
                        </span>
                    </Row>
                </Col>
                <Col span={4}>
                    <img src="https://avatars0.githubusercontent.com/u/24504081?s=460&v=4" alt="" className={styles.avatar}/>
                </Col>
            </Row>
        )
    }
}

export default Footer;