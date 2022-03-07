import * as React from 'react';
import { Text, View, SafeAreaView, TextInput, Image, StyleSheet, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CategoriesData from "../assets/data/CategoriesData";
import PopularData from '../assets/data/PopularData';
import colors from '../assets/colors/color'





function Home() {

    const renderCategoriesItem = ({ item }) => {
        return (
            <View style={{ borderWidth: 1, backgroundColor: item.selected ? colors.primary : colors.white, marginLeft: 20, marginTop: 15 }}>
                <Image source={item.image} />
                <Text style={{ alignSelf: 'center' }}>{item.title}</Text>
                <View>
                    <AntDesign name={'rightcircleo'} size={20} style={{ alignSelf: 'center' }} />
                </View>
            </View>

        )
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text>fdfddfdfdfdfdf</Text>

            </SafeAreaView>
            <View>
                <Text style={styles.text_food}>Food</Text>
                <Text style={styles.text_delivery}>Delivery</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 30, paddingHorizontal: 20 }}>
                <EvilIcons name={'search'} size={20} color={'#313234'} style={{ marginRight: 12 }} />
                <TextInput placeholder={'Search...'} />
            </View>
            <View>
                <View style={{ borderBottomWidth: 2, marginTop: 4.97, marginLeft: 46, marginRight: 20, borderColor: '#bfbfbf' }} />
            </View>
            <View>
                <Text style={styles.text_categories}>Categories</Text>
            </View>
            <View>
                <FlatList data={CategoriesData}
                    renderItem={renderCategoriesItem}
                    keyExtractor={item => item.id}
                    horizontal={true} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imagePro: {
        height: 40,
        width: 40,
        borderRadius: 40,
        paddingTop: 20
    },
    viewimg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingTop: 20
    },
    text_food: {
        paddingHorizontal: 20,
        paddingTop: 30,
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
    },
    text_delivery: {
        paddingHorizontal: 20,
        paddingTop: 5,
        fontSize: 32,
        fontFamily: 'Montserrat-Bold'
    },
    text_categories: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        paddingHorizontal: 20,
        marginTop: 30
    }
})



export default Home;

