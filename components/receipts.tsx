import React from 'react';
import {images, uris} from '../assets/reciepts/re';
import {StyleSheet, Image, View, Button} from 'react-native';
import '@style';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    }
  });
  


const DisplayReceipt = (img) => {
    const [post, setPost] = React.useState("");

  const postData = async(num) => {
    try {
      let res = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uri: uris[num]
        }),
      });
      res = await res.json();
      console.log(res)
      setPost(JSON.stringify(res))
    } catch (e) {
      console.error(e);
    }
  }


    return (
        <View style={styles.container}>
            <Image source={images[img.img]} style={{width: 293, height: 210, marginTop: 50}} alt ="receipt"/>
            <button onClick={() => postData(img.img)}>Send data</button>
            <p>{post}</p>
        </View>
    )
}

export default DisplayReceipt