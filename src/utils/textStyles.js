import { scale } from './scaling'
import { fontStyles } from './fontStyles'

export const textStyles = {
  H1: {
    fontSize: scale(35)
  },
  H2: {
    fontSize: scale(24)
  },
  H3: {
    fontSize: scale(22.5)
  },
  H4: {
    fontSize: scale(20)
  },
  H5: {
    fontSize: scale(18.5)
  },
  Normal: {
    fontSize: scale(17)
  },
  Small: {
    fontSize: scale(11),
    
  },
  Smaller: {
    fontSize: scale(12)
  },
  Regular: {
    fontFamily: fontStyles.MuseoSans300
  },
  Bold: {
    fontFamily: fontStyles.MuseoSans500
  },
  Bolder: {
    fontFamily: fontStyles.MuseoSans700
  },
  Center: {
    textAlign: 'center'
  },
  Right: {
    textAlign: 'right'
  },
  UpperCase: {
    textTransform: 'uppercase'
  },
  LineOver: {
    textDecorationLine: 'line-through'
  },
  B700: {
    fontWeight: '700'
  }
}
