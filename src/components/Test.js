/**
 * Created by b on 2017/8/3.
 */
import React from 'react';


class Demo extends React.Component{
    render(){
        return(
            <div>{this.props.match.params.id}</div>
        )
    }
}

export default Demo;