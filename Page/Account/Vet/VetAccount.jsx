import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BackButton from '../../Component/Button/BackButton';

function LogoutButton({navigation, title}) {
  const styles = StyleSheet.create({
    loginButton: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#00835C',
      backgroundColor: 'white',
      width: 280,
      height: 50,
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 30,
      borderRadius: 8,
    },
    loginButtonText: {
      color: '#00835C',
      fontWeight: '700',
      fontSize: 25,
    },
  });

  async function onPressLogoutnButton() {}

  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPressLogoutnButton}>
      <Text style={styles.loginButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function VetAccount({navigation}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    smallContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    logoutButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 150,
    },
  });

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.smallContainer}>
        <Text>vet account</Text>
      </View>
      <View style={styles.logoutButtonContainer}>
        <LogoutButton title="로그아웃" />
      </View>
    </View>
  );
}

export default VetAccount;
