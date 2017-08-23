/**
 * Created by b on 2017/8/3.
 */
import React from 'react';
import { Link } from 'react-router-dom'

class Demo extends React.Component{
    render(){
        return(
            <div>
                <Link to="/home">home</Link><br/>
                <Link to="/test/aa">test</Link>
            </div>
        )
    }
}

export default Demo;