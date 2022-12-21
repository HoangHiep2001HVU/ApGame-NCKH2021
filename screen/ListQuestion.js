import React from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import QuestionsListItem from '../components/QuestionsListItem';


export default class ListQuestion extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      questions:[],
      math: [
        {
          "id": 1,
          "name": "Câu 1: Hình trên có mấy con bạch tuộc?",
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "answer": "4",
          "image": require("../assets/images/math_img/1.gif")
        },
        {
          "id": 2,
          "name": "Câu 2: Hình trên có mấy quả táo?",
          "A": "5",
          "B": "6",
          "C": "3",
          "D": "4",
          "answer": "6",
          "image": require("../assets/images/math_img/2.gif")
        },
        {
          "id": 3,
          "name": "Câu 3: Hình trên có mấy quả cam?",
          "A": "5",
          "B": "6",
          "C": "7",
          "D": "8",
          "answer": "7",
          "image": require("../assets/images/math_img/3.gif")
        },
        {
          "id": 4,
          "name": "Câu 4: Hình trên có mấy con đà điểu?",
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "answer": "3",
          "image": require("../assets/images/math_img/4.gif")
        },
        {
          "id": 5,
          "name": "Câu 5: Hình trên có mấy con nai?",
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "answer": "2",
          "image": require("../assets/images/math_img/5.gif")
        },
        {
          "id": 6,
          "name": "Câu 6: Hình trên có mấy con chim cú mèo?",
          "A": "6",
          "B": "7",
          "C": "8",
          "D": "9",
          "answer": "9",
          "image": require("../assets/images/math_img/6.gif")
        },
        {
          "id": 7,
          "name": "Câu 7: Hình trên có mấy ông mặt trời?",
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "answer": "1",
          "image": require("../assets/images/math_img/7.gif")
        },
        {
          "id": 8,
          "name": "Câu 8: Hình trên có mấy ngôi sao?",
          "A": "6",
          "B": "8",
          "C": "9",
          "D": "7",
          "answer": "9",
          "image": require("../assets/images/math_img/8.gif")
        },
        {
          "id": 9,
          "name": "Câu 9: Hình trên có mấy quyển sách?",
          "A": "9",
          "B": "10",
          "C": "11",
          "D": "12",
          "answer": "10",
          "image": require("../assets/images/math_img/9.gif")
        },
        {
          "id": 10,
          "name": "Câu 10: Điền dấu thích hợp cào ô trống để kết quả bằng 3 bông hoa?",
          "A": "+",
          "B": "-",
          "C": "x",
          "D": ":",
          "answer": "+",
          "image": require("../assets/images/math_img/10.gif")
        },
        {
          "id": 11,
          "name": "Câu 11: 3+5 bằng mấy nhỉ?",
          "A": "7",
          "B": "8",
          "C": "9",
          "D": "10",
          "answer": "8",
          "image": require("../assets/images/math_img/11.gif")
        },
        {
          "id": 12,
          "name": "Câu 12: Điền dấu thích hợp vào ô trống để kết quả bằng 3?",
          "A": "x",
          "B": ":",
          "C": "+",
          "D": "-",
          "answer": "-",
          "image": require("../assets/images/math_img/12.gif")
        },
        {
          "id": 13,
          "name": "Câu 13: Kết quả của phép toán trên bằng mấy?",
          "A": "18",
          "B": "17",
          "C": "16",
          "D": "15",
          "answer": "15",
          "image": require("../assets/images/math_img/14.gif")
        },
        {
          "id": 14,
          "name": "Câu 14: Kết quả của phép toán trên bằng mấy?",
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "answer": "6",
          "image": require("../assets/images/math_img/15.gif")
        },
        {
          "id": 15,
          "name": "Câu 15: Còn lại mấy con thỏ sau phép trừ trên?",
          "A": "5",
          "B": "4",
          "C": "3",
          "D": "6",
          "answer": "5",
          "image": require("../assets/images/math_img/16.gif")
        },
        {
          "id": 16,
          "name": "Câu 17: Sau phép công bé có mấy chiếc kẹo?",
          "A": "2",
          "B": "3",
          "C": "4",
          "D": "5",
          "answer": "5",
          "image": require("../assets/images/math_img/17.gif")
        },
        {
          "id": 17,
          "name": "Câu 18: Hình trên có mấy chú cá?",
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "answer": "5",
          "image": require("../assets/images/math_img/18.gif")
        },
      ],
      riddle: [
        {
          "id": 1,
          "name": "Câu 1: Ở dưới nước tính hài hước thích làm trò đâu phải lợn phì, ngủ kĩ, ăn no sao Trư Bát Giới đến thăm dò bà con? Là con gì?",
          "A": "Cá heo",
          "B": "Cá voi",
          "C": "Cá mập",
          "D": "Cá rô",
          "answer": "Cá heo",
          "image": require("../assets/images/riddle_img/caheo.gif")
        },
        {
          "id": 2,
          "name": "Câu 2: Thường nằm đầu hè giữ cho nhà chủ người lạ nó sủa người quen nó mừng, Là con gì?",
          "A": "Con mèo",
          "B": "Con chó",
          "C": "Con gà",
          "D": "Con lợn",
          "answer": "Con chó",
          "image": require("../assets/images/riddle_img/cho.gif")
        },
        {
          "id": 3,
          "name": "Câu 3: Cổ cao cao, cẳng cao cao chân đen cánh trắng ra vào đồng xanh cảnh quê thêm đẹp bức tranh sao đành chịu tiếng ma lanh nhử mồi? Là con gì?",
          "A": "Con diều",
          "B": "Con quạ",
          "C": "Con công",
          "D": "Con cò",
          "answer": "Con cò",
          "image": require("../assets/images/riddle_img/co.gif")
        },
        {
          "id": 4,
          "name": "Câu 4: Thân em nửa chuột nửa chim ngày treo chân ngủ, tối tìm mồi bay trời cho tai mắt giỏi thay tối đen tối mịt cứ bay vù vù? Là con gì?",
          "A": "Cú mèo",
          "B": "Con dơi",
          "C": "Con chim",
          "D": "Con mèo",
          "answer": "con dơi",
          "image": require("../assets/images/riddle_img/doi.gif")
        },
        {
          "id": 5,
          "name": "Câu 5: Cái mỏ xinh xinh hai chân tí xíu lông vàng mát dịu “”Chiếp! Chiếp!” suốt ngày, là con gì?",
          "A": "Con ngỗng",
          "B": "Gà con",
          "C": "Con vịt",
          "D": "Con chim",
          "answer": "Gà con",
          "image": require("../assets/images/riddle_img/gacon.gif")
        },
        {
          "id": 6,
          "name": "Câu 6: Con gì mào đỏ gáy ò ó o… từ sáng tinh mơ gọi người thức giấc?",
          "A": "Gà trống",
          "B": "Gà mái",
          "C": "Con vịt",
          "D": "Con chó",
          "answer": "Gà trống",
          "image": require("../assets/images/riddle_img/gatrong.gif")
        },
        {
          "id": 7,
          "name": "Câu 7: Con gì ăn no bụng to mắt híp mồm kêu ụt ịt nằm thở phì phò?",
          "A": "Con heo",
          "B": "Con mèo",
          "C": "Con chó",
          "D": "Con gấu",
          "answer": "Con heo",
          "image": require("../assets/images/riddle_img/heo.gif")
        },
        {
          "id": 8,
          "name": "Câu 8: Con gì hai mắt trong veo thích nằm sưởi nắng, thích trèo cây cau?",
          "A": "Con sâu",
          "B": "Con chuột",
          "C": "Con mèo",
          "D": "Con rắn",
          "answer": "Con mèo",
          "image": require("../assets/images/riddle_img/meo.gif")
        },
        {
          "id": 9,
          "name": "Câu 9: Con gì bốn vó ngực nở bụng thon rung rinh chiếc bờm phi nhanh như gió?",
          "A": "con chó",
          "B": "Con bò",
          "C": "Con trâu",
          "D": "Con ngựa",
          "answer": "Con ngựa",
          "image": require("../assets/images/riddle_img/ngua.gif")
        },
        {
          "id": 10,
          "name": "Câu 10: Con gì đuôi ngắn tai dài mắt hồng lông mượt có tài chạy nhanh. Là con gì?",
          "A": "Con thỏ",
          "B": "Con chó",
          "C": "Con mèo",
          "D": "Con heo",
          "answer": "Con thỏ",
          "image": require("../assets/images/riddle_img/tho.gif")
        },
        {
          "id": 11,
          "name": "Câu 11: Con gì ăn cỏ đầu có 2 sừng lỗ mũi buộc thừng kéo cày rất giỏi?",
          "A": "Con lợn",
          "B": "Con mèo",
          "C": "Con trâu",
          "D": "Con thỏ",
          "answer": "Con trâu",
          "image": require("../assets/images/riddle_img/trau.gif")
        },
        {
          "id": 12,
          "name": "Câu 12: Con gì chân ngắn mà lại có màng mỏ bẹt màu vàng hay kêu cạp cạp?",
          "A": "Con vịt",
          "B": "Con ngỗng",
          "C": "Con gà",
          "D": "Con cò",
          "answer": "Con vịt",
          "image": require("../assets/images/riddle_img/vit.gif")
        },
      ]
    }
  }
  
  componentDidMount(){
    // const id = this.props.route.params.categoryId;
    // const a = '/products?category='+id;
    // console.log(a);
    const database = this.props.route.params.database;
    // axios.get('/'+database)
    //   .then(res =>{
    //     this.setState({
    //       questions: res.data
    //     })
    //   })
    //   .catch(error=>{
    //     console.error(error)
    //   })

    if(database=="math"){
      this.setState({
        questions: this.state.math
      })
    }
    else if(database=="riddle"){
      this.setState({
        questions: this.state.riddle
      })
    }
    else {
      console.log("Lỗi data");
    }
  }
  render(){
    const { navigation } = this.props;
    const {questions} = this.state;
    const _data = this.props.route.params.database;
    return (
      <FlatList 
        data={questions}
        contentContainerStyle={styles.container}
        numColumns={5}//số cột hiển thị mong muốn
        renderItem={({item})=> 
          <View style={styles.wrapper}>
            <QuestionsListItem 
              questions={item}
              onPress={()=>navigation.navigate('Answer', {
                id: item.id,
                data: questions,
              })} 
            />
          </View>
        }
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 8,
    paddingBottom: 16
  }
});
