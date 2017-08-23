/**
 * Created by b on 2017/8/3.
 */
import React from 'react';


class Demo extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>params:{this.props.match.params.id}</div>
        )
    }
}

export default Demo;