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
  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={gradeDetails}
        renderItem={({ item, index }) => (
          <View style={styles.gradeTabView}>
            <TouchableHighlight 
              onPress={()=>{
                setSelectedClazz(index);
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

function ImageList(gradeImageList){
  console.log({gradeImageList});
  return (
    <View>
      {gradeImageList.map((image)=>{
        return <Image key={image} source={{uri:image}} style={styles.clazzImage} />
      })}
    </View>
  );
}

const HomePage = () => {
  const { data } = PageDetail;
  const headImage = data.homePicture;
  const GRADE_DETAILS =  [
    {
      "productId": "3396178358528512",
      "gradeCode": "02",
      "gradeName": "幼升小",
      "currentPrice": "27",
      "oldPrice": "1099",
      "imgUrls": [
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/小学老师修改_01.jpg",
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/小学老师修改_02.jpg",
        "https://imgs.genshuixue.com/0baijiatools/ff2cb0c1258c340385c76c8a4f5c0a88/2-2.png",
        "https://imgs.genshuixue.com/0baijiatools/ff2cb0c1258c340385c76c8a4f5c0a88/2-4.png",
        "https://imgs.genshuixue.com/0baijiatools/3891bddf0a431eb792d84d6cbac7b7bb/2-5.png",
        "https://imgs.genshuixue.com/0baijiatools/b8904e65fce2ba662cfd9ee6d3312d5e/6.jpg",
        "https://imgs.genshuixue.com/0baijiatools/4f1d52856ddd50274ece2c091936c429/page-brand.jpg"
      ],
      "classDescripe": "幼升一年级暑假强化班",
      "trackCode": "43982807"
    },
    {
      "productId": "3396182238521856",
      "gradeCode": "03",
      "gradeName": "小学一升二",
      "currentPrice": "27",
      "oldPrice": "1099",
      "imgUrls": [
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/小学老师修改_01.jpg",
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/小学老师修改_02.jpg",
        "https://imgs.genshuixue.com/0baijiatools/ff2cb0c1258c340385c76c8a4f5c0a88/2-2.png",
        "https://imgs.genshuixue.com/0baijiatools/ff2cb0c1258c340385c76c8a4f5c0a88/2-4.png",
        "https://imgs.genshuixue.com/0baijiatools/3891bddf0a431eb792d84d6cbac7b7bb/2-5.png",
        "https://imgs.genshuixue.com/0baijiatools/b8904e65fce2ba662cfd9ee6d3312d5e/6.jpg",
        "https://imgs.genshuixue.com/0baijiatools/4f1d52856ddd50274ece2c091936c429/page-brand.jpg"
      ],
      "classDescripe": "一年级升二年级暑假强化班",
      "trackCode": "43982832"
    },
    {
      "productId": "3396187418273792",
      "gradeCode": "04",
      "gradeName": "小学二升三",
      "currentPrice": "27",
      "oldPrice": "1099",
      "imgUrls": [
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/小学老师修改_01.jpg",
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/小学老师修改_02.jpg",
        "https://imgs.genshuixue.com/0baijiatools/ff2cb0c1258c340385c76c8a4f5c0a88/2-2.png",
        "https://imgs.genshuixue.com/0baijiatools/ff2cb0c1258c340385c76c8a4f5c0a88/2-4.png",
        "https://imgs.genshuixue.com/0baijiatools/3891bddf0a431eb792d84d6cbac7b7bb/2-5.png",
        "https://imgs.genshuixue.com/0baijiatools/b8904e65fce2ba662cfd9ee6d3312d5e/6.jpg",
        "https://imgs.genshuixue.com/0baijiatools/4f1d52856ddd50274ece2c091936c429/page-brand.jpg"
      ],
      "classDescripe": "二年级升三年级暑假强化班",
      "trackCode": "43982910"
    },
    {
      "productId": "3396274712291328",
      "gradeCode": "05",
      "gradeName": "小学三升四",
      "currentPrice": "27",
      "oldPrice": "1099",
      "imgUrls": [
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/小学老师修改_01.jpg",
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/小学老师修改_02.jpg",
        "https://imgs.genshuixue.com/0baijiatools/ff2cb0c1258c340385c76c8a4f5c0a88/2-2.png",
        "https://imgs.genshuixue.com/0baijiatools/ff2cb0c1258c340385c76c8a4f5c0a88/2-4.png",
        "https://imgs.genshuixue.com/0baijiatools/3891bddf0a431eb792d84d6cbac7b7bb/2-5.png",
        "https://imgs.genshuixue.com/0baijiatools/b8904e65fce2ba662cfd9ee6d3312d5e/6.jpg",
        "https://imgs.genshuixue.com/0baijiatools/4f1d52856ddd50274ece2c091936c429/page-brand.jpg"
      ],
      "classDescripe": "三年级升四年级暑假强化班",
      "trackCode": "40589536"
    },
    {
      "productId": "3396286941719040",
      "gradeCode": "06",
      "gradeName": "小学四升五",
      "currentPrice": "27",
      "oldPrice": "1099",
      "imgUrls": [
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/小学老师修改_01.jpg",
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/小学老师修改_02.jpg",
        "https://imgs.genshuixue.com/0baijiatools/ff2cb0c1258c340385c76c8a4f5c0a88/2-2.png",
        "https://imgs.genshuixue.com/0baijiatools/ff2cb0c1258c340385c76c8a4f5c0a88/2-4.png",
        "https://imgs.genshuixue.com/0baijiatools/3891bddf0a431eb792d84d6cbac7b7bb/2-5.png",
        "https://imgs.genshuixue.com/0baijiatools/b8904e65fce2ba662cfd9ee6d3312d5e/6.jpg",
        "https://imgs.genshuixue.com/0baijiatools/4f1d52856ddd50274ece2c091936c429/page-brand.jpg"
      ],
      "classDescripe": "四年级升五年级暑假强化班",
      "trackCode": "40589570"
    },
    {
      "productId": "3396294544943616",
      "gradeCode": "07",
      "gradeName": "小学五升六",
      "currentPrice": "27",
      "oldPrice": "1099",
      "imgUrls": [
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/小学老师修改_01.jpg",
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/小学老师修改_02.jpg",
        "https://imgs.genshuixue.com/0baijiatools/ff2cb0c1258c340385c76c8a4f5c0a88/2-2.png",
        "https://imgs.genshuixue.com/0baijiatools/ff2cb0c1258c340385c76c8a4f5c0a88/2-4.png",
        "https://imgs.genshuixue.com/0baijiatools/3891bddf0a431eb792d84d6cbac7b7bb/2-5.png",
        "https://imgs.genshuixue.com/0baijiatools/b8904e65fce2ba662cfd9ee6d3312d5e/6.jpg",
        "https://imgs.genshuixue.com/0baijiatools/4f1d52856ddd50274ece2c091936c429/page-brand.jpg"
      ],
      "classDescripe": "五年级升六年级暑假强化班",
      "trackCode": "40589579"
    },
    {
      "productId": "3362469349898240",
      "gradeCode": "08",
      "gradeName": "小升初",
      "currentPrice": "36",
      "oldPrice": "1099",
      "imgUrls": [
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/初中老师_01.jpg",
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/初中老师02.jpg",
        "https://imgs.genshuixue.com/0baijiatools/91fd6bf153890c0cd00c578c535c4976/初一_03.jpg",
        "https://imgs.genshuixue.com/0baijiatools/91fd6bf153890c0cd00c578c535c4976/初一_04.jpg",
        "https://imgs.genshuixue.com/0baijiatools/91fd6bf153890c0cd00c578c535c4976/初一_05.jpg",
        "https://imgs.genshuixue.com/0baijiatools/2584be5c05fdf6f98274313d77ab72a7/初二_06(1).jpg",
        "https://imgs.genshuixue.com/0baijiatools/91fd6bf153890c0cd00c578c535c4976/初一_06-07.jpg",
        "https://imgs.genshuixue.com/0baijiatools/db98a59ffa66ab2d1e169862ad683102/高二的副本_10.jpg",
        "https://imgs.genshuixue.com/0baijiatools/7a5afeca48e06ffa32d14150a4ddbfeb/初二_10.jpg",
        "https://imgs.genshuixue.com/0baijiatools/469dae32939971dbd088ecfaecf46fb8/高二的副本_12.jpg",
        "https://imgs.genshuixue.com/0baijiatools/4f1d52856ddd50274ece2c091936c429/page-brand.jpg"
      ],
      "classDescripe": "六年级升七暑假强化班",
      "trackCode": "43982980"
    },
    {
      "productId": "3362486260144128",
      "gradeCode": "09",
      "gradeName": "初一升初二",
      "currentPrice": "36",
      "oldPrice": "1099",
      "imgUrls": [
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/初中老师_01.jpg",
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/初中老师02.jpg",
        "https://imgs.genshuixue.com/0baijiatools/91fd6bf153890c0cd00c578c535c4976/初一_03.jpg",
        "https://imgs.genshuixue.com/0baijiatools/91fd6bf153890c0cd00c578c535c4976/初一_04.jpg",
        "https://imgs.genshuixue.com/0baijiatools/91fd6bf153890c0cd00c578c535c4976/初一_05.jpg",
        "https://imgs.genshuixue.com/0baijiatools/2584be5c05fdf6f98274313d77ab72a7/初二_06(1).jpg",
        "https://imgs.genshuixue.com/0baijiatools/91fd6bf153890c0cd00c578c535c4976/初一_06-07.jpg",
        "https://imgs.genshuixue.com/0baijiatools/db98a59ffa66ab2d1e169862ad683102/高二的副本_10.jpg",
        "https://imgs.genshuixue.com/0baijiatools/7a5afeca48e06ffa32d14150a4ddbfeb/初二_10.jpg",
        "https://imgs.genshuixue.com/0baijiatools/469dae32939971dbd088ecfaecf46fb8/高二的副本_12.jpg",
        "https://imgs.genshuixue.com/0baijiatools/4f1d52856ddd50274ece2c091936c429/page-brand.jpg"
      ],
      "classDescripe": "初一升初二暑假强化班",
      "trackCode": "40589615"
    },
    {
      "productId": "3362477727864320",
      "gradeCode": "10",
      "gradeName": "初二升初三",
      "currentPrice": "36",
      "oldPrice": "1099",
      "imgUrls": [
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/初中老师_01.jpg",
        "https://imgs.genshuixue.com/0baijiatools/69ac5dc43436d248f6eb38c3a7b7f66e/初中老师02.jpg",
        "https://imgs.genshuixue.com/0baijiatools/91fd6bf153890c0cd00c578c535c4976/初一_03.jpg",
        "https://imgs.genshuixue.com/0baijiatools/91fd6bf153890c0cd00c578c535c4976/初一_04.jpg",
        "https://imgs.genshuixue.com/0baijiatools/91fd6bf153890c0cd00c578c535c4976/初一_05.jpg",
        "https://imgs.genshuixue.com/0baijiatools/2584be5c05fdf6f98274313d77ab72a7/初二_06(1).jpg",
        "https://imgs.genshuixue.com/0baijiatools/91fd6bf153890c0cd00c578c535c4976/初一_06-07.jpg",
        "https://imgs.genshuixue.com/0baijiatools/db98a59ffa66ab2d1e169862ad683102/高二的副本_10.jpg",
        "https://imgs.genshuixue.com/0baijiatools/7a5afeca48e06ffa32d14150a4ddbfeb/初二_10.jpg",
        "https://imgs.genshuixue.com/0baijiatools/469dae32939971dbd088ecfaecf46fb8/高二的副本_12.jpg",
        "https://imgs.genshuixue.com/0baijiatools/4f1d52856ddd50274ece2c091936c429/page-brand.jpg"
      ],
      "classDescripe": "初二升初三暑假强化班",
      "trackCode": "40589623"
    },
    {
      "productId": "3390982390187008",
      "gradeCode": "11",
      "gradeName": "初三升高一",
      "currentPrice": "36",
      "oldPrice": "1099",
      "imgUrls": [
        "https://imgs.genshuixue.com/0baijiatools/acc96054b9c5ee39d97885b680adf97d/gzt1.jpg",
        "https://imgs.genshuixue.com/0baijiatools/360e0f7b85c271c0a0edbc464141aa69/gzt2.jpg",
        "https://imgs.genshuixue.com/0baijiatools/acc96054b9c5ee39d97885b680adf97d/gzt3.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/4.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/5.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/6.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/7.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/8.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/9.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/11.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/12.jpg",
        "https://imgs.genshuixue.com/0baijiatools/4f1d52856ddd50274ece2c091936c429/page-brand.jpg"
      ],
      "classDescripe": "初升高暑假强化班",
      "trackCode": "43983048"
    },
    {
      "productId": "3396865275947520",
      "gradeCode": "12",
      "gradeName": "高一升高二",
      "currentPrice": "36",
      "oldPrice": "1099",
      "imgUrls": [
        "https://imgs.genshuixue.com/0baijiatools/acc96054b9c5ee39d97885b680adf97d/gzt1.jpg",
        "https://imgs.genshuixue.com/0baijiatools/360e0f7b85c271c0a0edbc464141aa69/gzt2.jpg",
        "https://imgs.genshuixue.com/0baijiatools/acc96054b9c5ee39d97885b680adf97d/gzt3.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/4.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/5.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/6.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/7.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/8.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/9.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/11.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/12.jpg",
        "https://imgs.genshuixue.com/0baijiatools/4f1d52856ddd50274ece2c091936c429/page-brand.jpg"
      ],
      "classDescripe": "高一升高二暑假强化班",
      "trackCode": "40589636"
    },
    {
      "productId": "3391001489730048",
      "gradeCode": "13",
      "gradeName": "高二升高三",
      "currentPrice": "36",
      "oldPrice": "1099",
      "imgUrls": [
        "https://imgs.genshuixue.com/0baijiatools/acc96054b9c5ee39d97885b680adf97d/gzt1.jpg",
        "https://imgs.genshuixue.com/0baijiatools/360e0f7b85c271c0a0edbc464141aa69/gzt2.jpg",
        "https://imgs.genshuixue.com/0baijiatools/acc96054b9c5ee39d97885b680adf97d/gzt3.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/4.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/5.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/6.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/7.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/8.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/9.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/11.jpg",
        "https://imgs.genshuixue.com/0baijiatools/3b62a7f12c3987350f225b770f1bc22a/12.jpg",
        "https://imgs.genshuixue.com/0baijiatools/4f1d52856ddd50274ece2c091936c429/page-brand.jpg"
      ],
      "classDescripe": "高二升高三暑假强化班",
      "trackCode": "40589647"
    }
  ]
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
            {ClazzTabList(GRADE_DETAILS)}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default HomePage;