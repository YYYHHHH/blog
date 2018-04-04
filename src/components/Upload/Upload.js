/**
 * Created by b on 2018/4/3.
 */
import React from 'react';


export default class Upload extends React.Component{
  constructor(){
    super();
    this.state = {
      preImg:[]
    }
  }
  upload(e){
    let accept = this.props.accept||'.jpg,.png';
    let largestSize = this.props.largestSize||'2';
    let { preImg } = this.state;
    let reader  = [],name,index,re,size;
    for(let i = 0;i < e.target.files.length;i++){
      name = e.target.files[i].name;
      size = e.target.files[i].size;
      index = name.lastIndexOf(".");
      re = new RegExp(name.substr(index+1));
      if(re.test(accept)){
        if(size/1024/1021 < largestSize){
          reader[i] = new FileReader();
          if (e.target.files[i]) {
            reader[i].readAsDataURL(e.target.files[i]);
            reader[i].onloadend = ()=>{
              preImg.push(reader[i].result);
              if(this.props.onChange) {
                  this.props.onChange(preImg)
              }
              this.setState({
                preImg:[...new Set(preImg)]
              })
            };
          }
        }else{
          console.error(`请上传小于${largestSize}M的图片！`)
        }
      }else{
          console.error('请上传.png,.jpg,.jpeg格式的图片！')
      }
    }
  }
  ashbin(index){
    let { preImg } = this.state;
    preImg.splice(index,1);
    if(this.props.onChange) {
        this.props.onChange(preImg)
    }
    this.setState({
      preImg
    })
  }
  render(){
    let { accept,multiple } = this.props;
    let style = {
      display:'flex',
      width:80,
      height:80,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      border:'1px dashed #ccc',
      cursor:'pointer',
      fontSize:'18px'
    },
    preImg = {
      marginRight:10,
      position:'relative',
      width:80,
      height:80,
    },
    ashbin = {
      position:'absolute',
      width:'100%',
      paddingTop:'5px',
      textAlign:'center',
      bottom:0,
      color:'white',
      background:'rgba(0,0,0,.6)',
      cursor:'pointer'
    };
    let imgList = this.state.preImg.map((val,index)=>{
      return(
        <div style={preImg} key={index}>
          <img src={val} style={{width:'100%',height:'100%'}}/>
          <div style={ashbin} onClick={()=>{this.ashbin(index)}}>
            <i className="iconfont icon-delete"/>
          </div>
        </div>
      )
    });
    return(
      <div style={{display:'flex'}}>
        {imgList}
        <div style={{display:'inline-block'}}>
          <div style={style} onClick={()=>{this.refs.imgInput.click()}}>
              <i className="iconfont icon-plus"/>
              <span style={{fontSize:'13px'}}>上传图片</span>
          </div>
        </div>
        <input ref="imgInput" type="file" accept={accept||'.jpg,.png,.jpeg'} multiple={multiple} style={{display:'none'}} onChange={(e)=>{this.upload(e)}}/>
      </div>
    )
  }
}
