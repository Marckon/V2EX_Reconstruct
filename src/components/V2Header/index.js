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
                        <img src="https://www.v2ex.com/static/img/v2ex@2x.png" alt="V2EX" className={styles.headerIcon}/>
                        <Search style={{width:160}}/>
                    </Col>
                    <Col span={8}  offset={4} className={styles.menuWrapper}>
                        <Menu mode={"horizontal"} className={styles.menu}>
                            <Item>首页</Item>
                            <Item>注册</Item>
                            <Item>登录</Item>
                        </Menu>
                    </Col>
                </Row>
        )
    }
}

export default V2Header;