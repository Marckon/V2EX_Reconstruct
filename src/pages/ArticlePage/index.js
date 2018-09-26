import React from 'react';
import {Row, Col,Skeleton,Divider,} from 'antd';
import propTypes from 'prop-types';
import styles from './index.scss';
import {AuthorCard} from '../../components'



class ArticlePage extends React.Component {

    static contextTypes = {
        handleChangeArticle: propTypes.func.isRequired,
        currentArticle: propTypes.object.isRequired,
        transferTab:propTypes.func.isRequired
    };

    componentWillMount(){
        //组件挂载后，根据当前路由改变context 的currentArticle 值
        this.context.handleChangeArticle(this.props.match.params.id)
    }

    render() {
        const articleObj=this.context.currentArticle;

        //思考一下应该如何优化
        const getDiffDate=str=>{
            let date=new Date(str);
            let now=new Date(Date.now());
            let diffYear=now.getFullYear()-date.getFullYear();
            let diffMonth=now.getMonth()-date.getMonth();
            let diffDate=now.getDate()-date.getDate();
            let diffHours=now.getHours()-date.getHours();
            let diffMinutes=now.getMinutes()-date.getMinutes();
            let diffSeconds=now.getSeconds()-date.getSeconds();

            if(diffYear>0) return diffYear+"年";
            if(diffMonth>0) return diffMonth+"月";
            if(diffDate>0) return diffDate+"天";
            if(diffHours>0) return diffHours+"小时";
            if(diffMinutes>0) return diffMinutes + "分钟";
            if(diffSeconds>0) return diffSeconds + "秒";
        };

        if(articleObj){
            return (
                    <Row style={{marginTop:20}}>
                        <Col span={16} offset={1} style={{backgroundColor:"#fcfcfc"}}>
                            <div className={styles["title-card"]}>
                                <span className={styles.titleText}>{articleObj.title}</span>
                                <div className={styles["title-info"]}>
                                    <span>{`发布于 ${getDiffDate(articleObj.create_at)} 前`}</span>
                                    <Divider type={"vertical"}/>
                                    <span>{`作者 ${articleObj.author.loginname}`}</span>
                                    <Divider type={"vertical"}/>
                                    <span>{`${articleObj.visit_count} 次浏览`}</span>
                                    <Divider type={"vertical"}/>
                                    <span>{`上一次编辑于 ${getDiffDate(articleObj.last_reply_at)}`}</span>
                                    <Divider type={"vertical"}/>
                                    <span>{`来自 ${this.context.transferTab(articleObj.tab)}`}</span>
                                </div>
                            </div>
                            <Divider/>
                            <div className={styles.content} dangerouslySetInnerHTML={{__html:articleObj.content}}/>
                        </Col>
                        <Col span={5} offset={1}>
                            <AuthorCard authorname={articleObj.author.loginname} avatar_url={articleObj.author.avatar_url}/>
                        </Col>
                    </Row>
            )
        }
        else{
            return (
                <Skeleton
                    paragraph={{
                        rows:25
                    }}
                    size={"large"}
                    active
                />
            )
        }

    }
}

export default ArticlePage;