import React from 'react';
import {Menu} from 'antd';

const {Item,SubMenu,}=Menu;

class TopicsListMenu extends React.Component{

    render(){
        return (
            <Menu mode={"horizontal"}>
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