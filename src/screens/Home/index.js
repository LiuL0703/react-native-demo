import React, { useState, useEffect,useReducer,Fragment } from 'react';
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
import { Spinner } from 'native-base';
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
        extraData={selectedClazz}
      />
      { 
        selectedClazz!== '' 
          ? ImageList(gradeDetails[selectedClazz].imgUrls)
          : ImageList(gradeDetails[0].imgUrls)
      }
    </View>
  );
}

const dataFetchReducer = (state, action) => {
  switch(action.type){
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useGradeDetailApi = () => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: [],
  });

  useEffect(()=>{
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try{
        const result = await axios.post(CRISS_PAGE_DETAIL);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data});
      } catch (error){
        dispatch({ type: 'FETCH_FAILURE' }); 
      }
    }

    fetchData();
  },[]);

  return [state];
}
function JoinNow(props,gradeDetails,selectedClazz){
  function handleJoin(){
    if(gradeDetails.length < 1 || selectedClazz === ''){
      return;
    }
    props.navigation.navigate('BindPhone', {
      productId: gradeDetails[selectedClazz].productId,
      gradeCode: gradeDetails[selectedClazz].gradeCode
    });
  }
  return (
    <View style={{display:"flex", flexDirection: "row", flex: 1, position: 'absolute',bottom: 0, borderTopWidth: 1, borderTopColor: '#ccc'}}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",height: 60, backgroundColor:'#fff' }}>
        <Text style={{fontSize: 25, color:'#fd494a'}}>
        {selectedClazz !== ''
          ? `￥${gradeDetails[selectedClazz].currentPrice}`
          : '请选择年级'
        }
        </Text>
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
  const [headImage, setHeadImage] = useState(null);

  const [{ data, isLoading, isError }] = useGradeDetailApi();

  useEffect(()=>{
    if(data.length !== 0){
      setGradeDetails(data.data.gradeDetails||[]);
      setHeadImage(data.data.homePicture);
    }
  })


  function handleSelectGrade(value){
    setSelectedClazz(value);
  }

  return (
    <Fragment>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {
            isLoading || data.length === 0
              ? <Spinner />
              : <View style={styles.body}>
                  <View>
                    <Image source={{uri: headImage }} style={styles.headImage} />
                  </View>
                  <View>
                    <Text style={styles.title}>请选择九月开学要上的年级</Text>
                  </View>
                  { gradeDetails.length > 0 ? ClazzTabList(gradeDetails,selectedClazz,handleSelectGrade):null}
                </View>
          }
          {
            isError && <Text>Someting went wrong!</Text>
          }
        </ScrollView>
        { isLoading ? null : JoinNow(props,gradeDetails,selectedClazz)}
      </SafeAreaView>
    </Fragment>
  );
};

export default HomePage;
