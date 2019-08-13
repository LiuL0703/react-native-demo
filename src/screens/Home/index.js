import React, { useState, useEffect,Fragment } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
  Button,
} from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image'
import axios from 'axios';
import styles from './style.js';
import { CRISS_PAGE_DETAIL } from '../../api/index';

function ClazzTabList(gradeDetails,selectedClazz,handleSelectGrade){
  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={gradeDetails}
        renderItem={({ item, index }) => (
          <View style={styles.gradeTabView}>
            <TouchableHighlight 
              onPress={()=>{
                handleSelectGrade(index);
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
      { 
        selectedClazz!== '' 
          ? ImageList(gradeDetails[selectedClazz].imgUrls)
          : ImageList(gradeDetails[0].imgUrls)
      }
    </View>
  );
}

function JoinNow(props){
  function handleJoin(){
    props.navigation.navigate('BindPhone', {
      productId: 3396283866842112,
      gradeCode: '06'
    });
  }
  return (
    <View style={{display:"flex", flexDirection: "row", flex: 1, position: 'absolute',bottom: 0, borderTopWidth: 1, borderTopColor: '#ccc'}}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",height: 60, backgroundColor:'#fff' }}>
        <Text style={{fontSize: 30, color:'#fd494a'}}>￥35</Text>
      </View>
      <View style={{backgroundColor: '#fd494a', width: 150 ,flex: 1, justifyContent: "center", alignItems: "center",}}>
        <Button 
          onPress={handleJoin}
          title="立即报名"
          color="#fff"
          disabled={false}
          accessibilityLabel="立即报名"
        />
      </View>
    </View>
  )
}

function ImageList(gradeImageList){
  return (
    <View>
      {gradeImageList.map((image)=>{
        return <FullWidthImage key={image} source={{uri:image}} style={styles.clazzImage} />
      })}
    </View>
  );
}

const HomePage = (props) => {
  const [gradeDetails, setGradeDetails] = useState([]);
  const [selectedClazz,setSelectedClazz] = useState('');
  const [headImage, setHeadImage] = useState('');


  useEffect(()=>{
    axios.post(CRISS_PAGE_DETAIL,{}).then((res)=>{
      let data = res.data;
      setGradeDetails(data.data.gradeDetails||[]);
      setHeadImage(data.data.homePicture);
    });
  },[]);


  function handleSelectGrade(value){
    setSelectedClazz(value);
  }

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
            { gradeDetails.length > 0 ? ClazzTabList(gradeDetails,selectedClazz,handleSelectGrade):null}
          </View>
        </ScrollView>
        {JoinNow(props)}
      </SafeAreaView>
    </Fragment>
  );
};

export default HomePage;
