import React, { Component } from 'react'
import { Text, FlatList, Image, View } from 'react-native'
export default class ProductListComponent extends Component {
    constructor() {
        super();
        this.state = { list: [], pageindex: 1, pagesize: 10, pagecount: 3 };
    }
    componentDidMount() {
        var url = `http://laiycoder.com:3000/readbookapi/getBykindname?kindname=历史&pageindex=${this.state.pageindex}&pagesize=${this.state.pagesize}`;
        fetch(url).then((response) => {
            return response.json();
        }).then((result) => {
            if (result.msg === "请登录") {
                this.props.navigation.push('login');
            } else {
                this.setState({
                    list: result.data,
                    pagecount: result.pagecount
                });
            }

        })
    }
    showItem = (info) => {
        return <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, padding: 10 }}>
            <Image source={{ uri: info.item.img_url }} style={{ width: 100, height: 150 }} ></Image>
            <View>
                <Text style={{ marginLeft: 20 }}>{info.item.id}</Text>
                <Text style={{ marginLeft: 20 }}>{'书名：' + info.item.book_title}</Text>
                <Text style={{ marginLeft: 20 }}>{'作者：' + info.item.book_author_names}</Text>
            </View>
        </View>
    }

    loadMore() {
        let num = this.state.pageindex;
        if (this.state.pageindex <= this.state.pagecount) {
            num++;
            this.setState({ pageindex: num });
            let url = `http://laiycoder.com:3000/readbookapi/getBykindname?kindname=历史&pageindex=${num}&pagesize=10`;
            fetch(url).then((response) => {
                return response.json();
            }).then((result) => {
                if (result.data.length > 0) {
                    let newlist = this.state.list.concat(result.data);
                    this.setState({
                        list: newlist,
                        pagecount: result.pagecount
                    });
                }
            });
        }

    }

    render() {
        return <FlatList
            onEndReachedThreshold={0.1}
            onEndReached={() => this.loadMore()}
            data={this.state.list}
            extraData={this.state}
            renderItem={this.showItem}>
        </FlatList>
    }
}