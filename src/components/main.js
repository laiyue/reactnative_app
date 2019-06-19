import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
export default class MainComponent extends Component {
    constructor() {
        super();
    }
   
    jump = () => {
        //var url=''
        this.props.navigation.push('productlist');
    }
    render() {
        return <View>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.infoCol}>
                    <Text style={{ fontSize: 20, color: 'red' }}>200</Text>
                    <Text>当日PC端PV量</Text>
                </View>
                <View style={styles.infoCol}>
                    <Text style={{ fontSize: 20, color: 'green' }}>230</Text>
                    <Text>移动端PV量</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.infoCol}>
                    <Text style={{ fontSize: 20, color: 'red' }}>1020</Text>
                    <Text>已完成订单数</Text>
                </View>
                <View style={styles.infoCol}>
                    <Text style={{ fontSize: 20, color: 'green' }}>230</Text>
                    <Text>当日APP下载数</Text>
                </View>
            </View>
            <Text>{'\n\n'}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.imgCol}>
                    <Image style={{ width: 80, height: 80 }} source={require('../img/order.png')} ></Image>
                    <Text>订单管理</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imgCol}>
                    <Image style={{ width: 80, height: 80 }} source={require('../img/user.png')}></Image>
                    <Text>用户管理</Text>
                </TouchableOpacity>
            </View>
            <Text>{'\n\n'}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.imgCol} onPress={this.jump}>
                    <Image style={{ width: 80, height: 80 }} source={require('../img/product.png')} ></Image>
                    <Text>商品管理</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imgCol}>
                    <Image style={{ width: 80, height: 80 }} source={require('../img/setting.png')}></Image>
                    <Text>设置</Text>
                </TouchableOpacity>
            </View>
        </View>
    }
}

var styles = StyleSheet.create({
    infoCol: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderColor: 'white',
        borderWidth: 2
    },
    imgCol: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    }

});
