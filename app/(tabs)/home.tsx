import { Dimensions, FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function Home() {
    const reviews = [
      {id: "1223", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "1243", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "125223", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "12523", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "1123", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "133223", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "15243", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "1253", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "1256673", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "1655423", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "1245453", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "12356576", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "176623", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "126753", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "16556723", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "12756563", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "57656756", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "567", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""},
      {id: "567675", content: "lorem ipsummmm", title: "Frutado maravilhoso", photo: ""}

  ];
  return (
    <ThemedView  style={styles.backgoundContainer}>
      <FlatList
        style={{width:"100%"}}
        contentContainerStyle={styles.listContainerItems}
        data={reviews}
        renderItem={({item, index}) => {
          return  (<ThemedView key={index} style={[styles.reviewContainer, styles.shadowProp]}>
                    <ThemedText>{item.content}</ThemedText>
                  </ThemedView>)
        }}
        keyExtractor={item => item.id}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  shadowProp: {
      shadowColor: '#27190E',
      shadowOffset: {width: -4, height: 6},
      shadowOpacity: 0.4,
      shadowRadius: 2,
      elevation: 8,
      zIndex: 999,
  },
  backgoundContainer: {
    backgroundColor: "#5B371D",
    paddingHorizontal: 0,
    flexGrow: 1,
    alignItems: "center",
    flexDirection: 'column',
  },
  listContainerItems: {
    paddingHorizontal: 20,
  },
  reviewContainer: {
  marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#482D1A",
    height: 200
  },
});
