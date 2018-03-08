/**
 * Created by b on 2017/8/3.
 */
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../redux/actions/test';
import http from '../tools/ajax';


class Demo extends React.Component{

    handleClick() {

        const { dispatch,  test} = this.props;
        dispatch(actions.addText(`文本${test.list.length + 1}`));
    }
    handleClick1() {
        let params = {
            method: 'get',
            url: 'http://127.0.0.1:8081/addUser',
            data: {},
        };
        http.ajax(params).then(res=>{
            console.log(res)
        },(err)=>{
            console.log(err)
        })
    }
    render(){
        console.log(this.props.test)
        return(
            <div>
                <button onClick={()=>{this.handleClick1()}}>增加文本</button>
                <div>
                    { this.props.test.list.map((item, index) => {
                        return <span className="result" key={index}>{item}</span>;
                    })}
                </div>
                <Link to="/home">home</Link><br/>
                <Link to="/test/aa">test</Link>
            </div>
        )
    }
}

export default connect((state)=> {
        return {
            test: state.test
        };
    }
)(Demo);