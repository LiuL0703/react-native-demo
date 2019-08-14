import { StyleSheet,Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;

export default StyleSheet.create({
  scrollView: {

  },
  
  body: {
    minHeight: dimensions.height,
    flex: 1,
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    // color: Colors.black,
  },
  headImage:{ 
    width: imageWidth,
    height: 250 
  },
  title:{
    textAlign:"center",
    fontSize: 18,
    marginVertical: 15,
    fontWeight: 'bold'
  },
  gradeTabView:{ 
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  gradeTabArea:{
    borderWidth: 1, 
    borderColor: '#FD494A',
    padding: 10,
    backgroundColor: "#FEECEC",
  },
  gradeTabText:{
    textAlign: "center",
    color:'#FD494A',
  },

  selectedTab:{
    backgroundColor: '#FD494A',
  },
  selectedTabText:{
    color: '#FFF',
    fontWeight: 'bold'
  },
  clazzImage:{
    width: imageWidth,
  }
});
