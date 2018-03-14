/**
 * Created by b on 2018/3/8.
 */
import axios from 'axios';

const http = {
    handelError(res) {
        if(res.response){
            if(res.response.status === 500){
                this.showError('服务器返回异常');
            }else{
                this.showError(`请求失败：\n${res.message}`);
            }
        }else{
            this.showError('网络错误，请求失败');
        }
    },
    showError(msg){
        console.log(msg);
    },
    ajax(params) {
        params.headers = {'Content-Type': 'application/x-www-form-urlencoded'};
        return new Promise((resolve,reject)=>{
            axios(params).then((res)=>{
                resolve(res.data)
            }).catch((res)=>{
                reject(res);
                this.handelError(res);
            })
        })
    }
};
export default http;