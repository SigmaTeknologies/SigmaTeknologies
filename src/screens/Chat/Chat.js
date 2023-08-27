import React, { useLayoutEffect, useContext, useEffect } from 'react'
import { WebView } from 'react-native-webview'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { StatusBar, Platform, View } from 'react-native'
import i18n from '../../../i18n'
import ThemeContext from '../../ui/ThemeContext/ThemeContext'
import { theme } from '../../utils/themeColors'
import Analytics from '../../utils/analytics'
import { HeaderBackButton } from '@react-navigation/elements'
import { MaterialIcons } from '@expo/vector-icons'
import navigationService from '../../routes/navigationService'
import { scale } from '../../utils/scaling'

function Chat() {
  const navigation = useNavigation()
  const themeContext = useContext(ThemeContext)
  const currentTheme = theme[themeContext.ThemeValue]
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: null,
      headerTitle: i18n.t('titleChat'),
      headerTitleContainerStyle: {
        marginTop: '1%',
        paddingLeft: scale(25),
        paddingRight: scale(25),
        height: '75%',
        borderRadius: scale(10),
        backgroundColor: currentTheme.black,
        borderWidth: 1,
        borderColor: currentTheme.white,
        marginLeft: 0
      },
      headerStyle: {
        backgroundColor: currentTheme.firstHeaderBackground
      },
      headerTitleAlign: 'center',
      headerRight: null,
      headerLeft: () => (
        <HeaderBackButton
          backImage={() => (
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 50,
                marginLeft: 10,
                width: 55,
                alignItems: 'center'
              }}>
              <MaterialIcons name="arrow-back" size={30} color="black" />
            </View>
          )}
          onPress={() => {
            navigationService.goBack()
          }}
        />
      )
    })
  }, [navigation])

  useFocusEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(currentTheme.firstHeaderBackground)
    }
    StatusBar.setBarStyle('light-content')
  })
  useEffect(() => {
    async function Track() {
      await Analytics.track(Analytics.events.NAVIGATE_TO_CHAT)
    }
    Track()
  }, [])
  return (
    <WebView
      startInLoadingState={true}
      source={{
        uri: 'https://sharangoharkhan.github.io/multivendor-chat/'
      }}
      onNavigationStateChange={data => {
        if (data.url.indexOf('enatega') > 0) {
          navigation.navigate({
            name: 'Main',
            merge: true
          })
        }
      }}
    />
  )
}

export default Chat