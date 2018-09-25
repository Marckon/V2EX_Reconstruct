import React from 'react';
import {Menu} from 'antd';
import propTypes from 'prop-types';

const {Item,SubMenu,}=Menu;

class TopicsListMenu extends React.Component{

    static contextTypes={
      handleChangeTopicsList:  propTypes.func
    };

    render(){
        return (
            <Menu
                mode={"horizontal"}
                onClick={({key})=>this.context.handleChangeTopicsList(key)}
            >
                <Item key={"all"}>全部</Item>
                <Item key={"good"}>精华</Item>
                <Item key={"share"}>分享</Item>
                <Item key={"ask"}>问答</Item>
                <Item key={"job"}>招聘</Item>
                <Item key={"test"}>客户端测试</Item>
                <SubMenu title={"技术"}>
                    <Item>程序猿</Item>
                    <Item>Python</Item>
                    <Item>iDev</Item>
                    <Item>Android</Item>
                    <Item>Linux</Item>
                    <Item>node.js</Item>
                    <Item>云计算</Item>
                    <Item>宽带症候群</Item>
                </SubMenu>
                <SubMenu title={"创意"}>
                    <Item>分享创造</Item>
                    <Item>设计</Item>
                    <Item>奇思妙想</Item>
                </SubMenu>
                <SubMenu title={"好玩"}>
                    <Item>分享发现</Item>
                    <Item>电子游戏</Item>
                    <Item>电影</Item>
                    <Item>剧集</Item>
                    <Item>音乐</Item>
                    <Item>旅游</Item>
                </SubMenu>
                <SubMenu title={"Apple"}>
                    <Item>macOS</Item>
                    <Item>iPhone</Item>
                    <Item>iPad</Item>
                    <Item>MBP</Item>
                    <Item>iMac</Item>
                    <Item>iWatch</Item>
                    <Item>Apple</Item>
                </SubMenu>
            </Menu>
        )
    }
}

export default TopicsListMenu;