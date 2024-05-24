import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import AffectedList from './AffectedList';
import Picture from '../Picture';
import MainButton from '../../Component/Button/MainButton';
import Header1 from '../../Component/Header/Header1';
import DetailAreaList from './DetailAreaList';

import AIDiagnosisFunction from '../function/AIDiagnosisFunction';
import ImageTestFunction from '../function/ImageTestFunction';
import ImageTestFunction2 from '../function/ImageTestFunction2';

function OwnerAIDiagnosis({navigation, route}) {
  const [uuid, setUuid] = useState(null);
  const [area, setArea] = useState('');
  const [detailArea, setDetailArea] = useState('');
  const position = null;
  const type = null;
  const disease = null;

  const uri = route.params;

  async function onClickDiagnosisButton() {
    // let formData = new FormData();

    // formData.append('user_uuid', uuid);
    // formData.append('disease_area', area);
    // formData.append('detail_area', detailArea);
    // formData.append('position', position);
    // formData.append('img', {
    //   name: 'picture',
    //   type: 'image/jpg',
    //   uri: uri.uri,
    // });
    // formData.append('user_type', 'parent');
    // formData.append('type', type);
    // formData.append('disease', disease);

    // console.log(formData);

    // const result = await AIDiagnosisFunction();
    // console.log(result);
    // navigation.navigate('OwnerResult');

    let formData2 = new FormData();

    formData2.append('file', {
      name: uri.uri.filename,
      type: uri.uri.extension,
      uri: uri.uri.uri,
    });

    const result = await ImageTestFunction({formData: formData2});
    // const url = await ImageTestFunction2({postSeq: result.insertId});
    // navigation.navigate('OwnerResult', {result: result});
  }

  function loadUserInfo() {
    AsyncStorage.getItem('userState', (err, result) => {
      const resultData = JSON.parse(result);
      setUuid(resultData.uuid);
    });
  }

  useEffect(() => {
    loadUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Header1 navigation={navigation} />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.smallContainer}>
          {uri ? (
            <Image source={uri.uri} style={styles.picture2} />
          ) : (
            <View style={styles.picture}>
              <Text>사진을 선택해주세요</Text>
            </View>
          )}

          <Picture navigation={navigation} />
          <AffectedList
            area={area}
            setArea={setArea}
            setDetailArea={setDetailArea}
          />
          <DetailAreaList
            area={area === '' ? null : area === 'skin' ? true : false}
            detailArea={detailArea}
            setDetailArea={setDetailArea}
          />
          <View style={styles.buttonDiv}>
            <MainButton
              title="AI 진단하기"
              onPress={() => onClickDiagnosisButton()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default OwnerAIDiagnosis;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  smallContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  picture: {
    width: 300,
    height: 350,
    borderWidth: 1,
    backgroundColor: 'lightgray',
    borderColor: 'lightgray',
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture2: {
    width: '70%',
    height: '65%',
    marginBottom: 30,
  },
  buttonDiv: {
    marginTop: 0,
  },
});
