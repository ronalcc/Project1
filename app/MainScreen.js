/**
 * Created by lenovo on 2016/8/1.
 */
import TabNavigator from 'react-native-tab-navigator';
import  {
    Image,
    TextInput,
    View,
    StyleSheet,
    Platform,
Text
} from 'react-native';
import React,{ Component } from 'react';
import  Header from './Header'
import  HomePage from './HomePage'

const HOME = 'home';
const HOME_NORMAL = require('../images/tab/home_normal.png');
const HOME_FOCUS = require('../images/tab/home_focus.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('../images/tab/category_normal.png');
const CATEGORY_FOCUS = require('../images/tab/category_focus.png');
const FAXIAN = 'faxian';
const FAXIAN_NORMAL = require('../images/tab/faxian_normal.png');
const FAXIAN_FOCUS = require('../images/tab/faxian_focus.png');
const CART = 'cart';
const CART_NORMAL = require('../images/tab/cart_normal.png');
const CART_FOCUS = require('../images/tab/cart_focus.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('../images/tab/personal_normal.png');
const PERSONAL_FOCUS = require('../images/tab/personal_focus.png');

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: CATEGORY}
    }
    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: tag })}>
                {childView}
            </TabNavigator.Item>
        );
    }

    static _createChildView(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }






    render() {
        return (
            <View style={{flex:1}}>
                <Header />

                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, <HomePage nav={this.props.nav}/>)}
                    {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, MainScreen._createChildView(FAXIAN))}
                    {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, MainScreen._createChildView(CART))}
                    {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, MainScreen._createChildView(PERSONAL))}
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: '#303030',
        alignItems: 'center',
    },
    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 12.5
    }
});



export default MainScreen;