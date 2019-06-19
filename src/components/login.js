import React, { Component } from 'react'
import { Button, View, TextInput, Image } from 'react-native'
export default class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    saveUsername = (msg) => {
        this.setState({ username: msg });
    }
    savePwd = (msg) => {
        this.setState({ password: msg });
    }
    SubmitHandle = () => {
        var url = `http://laiycoder.com:3000/readbookapi/login?nickname=${
          this.state.username
        }&pwd=${this.state.password}`;
        fetch(url)
            .then((res) => {
                return res.json();
            }).then((result) => {
                if(result.msg==='登录成功'){
                    this.props.navigation.push('main');
                }else{
                    this.setState({username:'',password:''});
                }
               
            });
    }
    render() {
        return <View>
            <Image style={{ width: 100, height: 100, borderRadius: 50, alignSelf: "center" }} source={require('../img/head.jpg')}></Image>
            <TextInput placeholder="用户名" onChangeText={this.saveUsername} value={this.state.username} ></TextInput>
            <TextInput placeholder="密码" secureTextEntry={true} onChangeText={this.savePwd} value={this.state.password} >
            </TextInput>
            <Button title="登录" onPress={this.SubmitHandle} ></Button>
        </View>
    }
}