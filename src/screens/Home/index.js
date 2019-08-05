import React, { useState, useEffect,Fragment } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight
} from 'react-native';
// import axios from 'axios';
import styles from './style.js';
// import { CRISS_PAGE_DETAIL } from '../../api/index';
import PageDetail from '../../mocks/detail';

function ClazzTabList(gradeDetails){
  const [selectedClazz,setSelectedClazz] = useState('');

  selectClazzTab = (index) => {
    console.log(index);
    setSelectedClazz(index);
    console.log(selectedClazz)
  };

  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={gradeDetails}
        renderItem={({ item, index }) => (
          <View style={styles.gradeTabView}>
            <TouchableHighlight 
              onPress={()=>{
                this.selectClazzTab(index)
              }}
              style={[styles.gradeTabArea, selectedClazz === index ? styles.selectedTab:null]}
              underlayColor='#FD494A'
              >
              <Text style={[styles.gradeTabText, selectedClazz === index ? styles.selectedTabText:null]}>
                {item.gradeName}
              </Text>
            </TouchableHighlight>
          </View>
        )}
        numColumns={3}
        keyExtractor={(item) => item.productId}
      />
    </View>
  );
}

const HomePage = () => {
  const {data} = PageDetail;
  const headImage = data.homePicture;
  const gradeDetails = data.gradeDetails;
  // useEffect(()=>{

  // },[selectedClazz])
  return (
    <Fragment>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View>
              <Image source={{uri:headImage}} style={styles.headImage} />
            </View>
            <View>
              <Text style={styles.title}>请选择九月开学要上的年级</Text>
            </View>
          {
            ClazzTabList(gradeDetails)
          }
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default HomePage;