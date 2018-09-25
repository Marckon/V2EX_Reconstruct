import React from 'react';
import {Card} from 'antd';
import styles from './index.scss';

class QRCode extends React.Component{

    render(){
        return(
            <Card title={"客户端下载及源码"} className={this.props.className}>
                <div className={styles["card-body"]}>
                    <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="" />
                    <a href="https://github.com/soliury/noder-react-native">客户端源码地址</a>
                </div>
            </Card>
        )
    }
}

export default QRCode