import React from 'react';
import {Menu, Row, Col, Input} from 'antd';
import styles from './index.scss';

const Search = Input.Search;
const Item = Menu.Item;

class V2Header extends React.Component {
    render() {
        return (
                <Row type={"flex"} justify={"center"} align={"center"}>
                    <Col span={8} offset={4}>
                        <Row type={"flex"} justify={"center"}>
                            <Col span={8}>
                                <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="Cnode" className={styles.headerIcon}/>
                            </Col>
                            <Col span={14} offset={2}>
                                <Search/>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}  offset={4} className={styles.menuWrapper}>
                        <Menu mode={"horizontal"} className={styles.menu} theme={"dark"}>
                            <Item>首页</Item>
                            <Item>新手入门</Item>
                            <Item>注册</Item>
                            <Item>登录</Item>
                        </Menu>
                    </Col>
                </Row>
        )
    }
}

export default V2Header;