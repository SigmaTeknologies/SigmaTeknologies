import i18n from '../../../i18n'
import { BackButton } from '../../components/Header/HeaderIcons/HeaderIcons'
import { scale } from '../../utils/scaling'
import { HeaderBackButton } from '@react-navigation/elements'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import navigationService from '../../routes/navigationService'
import { StatusBar } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import styles from './style'

const navigationOptions = headerText => ({
  headerTitle: i18n.t('titleOrders'),
  headerTitleAlign: 'center',
  headerRight: null,
  headerTitleContainerStyle: {
    marginTop: '1%',
    paddingLeft: scale(25),
    paddingRight: scale(25),
    height: '75%',
    borderRadius: scale(10),
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white'
  },
  headerStyle: {
    backgroundColor: '#F5F5F5'
  },

  headerLeft: () => (
    <HeaderBackButton
      backImage={() => (
        <View
          style={styles().backBtnContainer}>
          <MaterialIcons name="arrow-back" size={30} color="black" />
        </View>
      )}
      onPress={() => {
        navigationService.goBack()
      }}
    />
  )
})
export default navigationOptions
