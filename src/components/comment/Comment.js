/**
 * Created by b on 2018/3/28.
 */

import React from 'react';
import {connect} from 'react-redux';


import './Comment.less';


class Comment extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={this.props.border?'Comment border':'Comment'}>
                {this.props.components}
                <div className="commentTop">
                    {this.props.border?<span>168楼</span>:<span>#168</span>}
                    <span>昵称违规了</span>
                </div>
                <div className="commentContent">
                    强行双标，你要明白，在LPL里，这两个人可以说是LPL里粉丝最多的两个人，也是黑粉最多的两个人，两次观众态度不一样，是因为情况本身有区别。
                    说实话，要不是年纪过了挺想黑他的，打的一点斗志都没有，比赛去送5杀，你以为是路人情谊吗？ 这5杀一送再强的队都打不下去了，士气全没了
                </div>
                <div className="commentBottom">
                    <span>2018年3月29日  13:37</span>
                    <span>
                        <i className="quote">引用</i>
                        <i className="iconfont icon-zan">(49)</i>
                    </span>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Comment);

