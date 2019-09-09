import React from 'react'
import Axios from 'axios'
import '../css/Section.scss'
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            phone:'',
            password:''
        };
        this.handleChange=this.handleChange.bind(this);

        this.handleOnclick=this.handleOnclick.bind(this);
    }
    handleChange(event){
        const target = event.target
        const name=target.name
        const value=target.value
        this.setState({
            [name]:value
        },function(){
            console.log(this.state);
        })
    }
    handleOnclick(e){
        if(this.state.phone==''||this.state.password==''){
            return (
                alert('手机号和密码不能为空')
            )
        }else{
            Axios.post('http://api.bk.bank-tech.cn/api-bank/app/login',{
                phone:this.state.phone,
                password:this.state.password
            }).then((res)=>{
                console.log('====================================');
                console.log(res);
                console.log('====================================');
                alert(res.data.msg)
            })
        }
    }
    render(){
        return (
        <div className="contentBody">
            <h1>欢迎回来！</h1>
            <div className="form-group">
            <label>手机号</label>
                <input type="text" placeholder="请输入手机号" name="phone" className="form-control" value={this.state.phone}  onChange={this.handleChange}/>
            </div>
            <div className="form-group">
            <label >密码</label>
                <input type="password" placeholder="请输入登录密码" name="password" className="form-control" value={this.state.password}  onChange={this.handleChange}/>
            </div>
            <div className="form-group">
            <ul>
                <li><a href="#" >验证码登录</a></li>
                <li><a href="#">短信登录</a></li>
            </ul>
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-success" onClick={this.handleOnclick} value="登录"/>
            </div>
            <div className="barText">
            还没有账号？<a href="#">马上注册</a>
            </div>
        </div>
        )
    }
}