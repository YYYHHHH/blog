/**
 * Created by b on 2018/4/4.
 */

import React from 'react';
import {connect} from 'react-redux';
import Button from '../../components/Button/Button'

import './ArticleList.less';


class ArticalList extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let list = [];
        for(let i = 0;i<20;i++){
            list.push(
                <div className='article' key={i}>
                    <div className="title">
                        react中父组件的操作触发的react中父组件的操作触发的函数需要用到子组件内的数据作为参数函数需要用到子组件内的数据作为参数
                    </div>
                    <div className="time">
                        2018-04-04 17:54
                    </div>
                    <div className="method">
                        <Button><i className="iconfont icon-delete"> </i>删除</Button>
                        <Button type="secondary"><i className="iconfont icon-top"> </i>置顶</Button>
                        <Button type="primary"><i className="iconfont icon-cc-lock"> </i>设为私密</Button>
                    </div>
                </div>
            )
        }
        return (
            <div className='ArticleList'>
                <div className='newArticle'>
                    <i className="iconfont icon-bianji">
                    </i>
                    <span>写文章</span>
                </div>
                {list}
                <div className='newArticle'>
                    <span>已经到底啦！</span>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(ArticalList);

