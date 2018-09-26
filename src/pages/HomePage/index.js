import React from 'react';
import {
    V2Header,
    FooterComponent
} from '../../components';
import {Layout,BackTop} from 'antd';
import styles from './index.scss';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import TopicPage from '../TopicPage';
import ArticlePage from '../ArticlePage';

const {Header,Footer,Content}=Layout;

class  HomePage extends React.Component{

    render(){
        return (
            <Layout className={styles.layout}>
                <Header className={styles.header}>
                    <V2Header/>
                </Header>
                <Content>
                    <BrowserRouter history={"browserHistory"}>
                        {/*router只能有一个子元素，因此要加上Switch标签*/}
                        <Switch>
                            {/*加上exact 防止匹配失败导致404错误*/}
                            <Route path={"/"} exact component={TopicPage}/>
                            <Route path={"/article/:id"} component={ArticlePage}/>
                        </Switch>
                    </BrowserRouter>
                </Content>
                <Footer className={styles.footer}>
                    <FooterComponent className={styles.footerContent}/>
                </Footer>
                <BackTop/>
            </Layout>
        )
    }
}

export default HomePage;
