import { grey } from '@material-ui/core/colors'
import createPalette from '@material-ui/core/styles/createPalette'

export const defaultPalette = createPalette({
  primary: {
    main: '#303f9f',
  },
  secondary: {
    main: '#ffc107',
  },
  error: {
    main: '#f44336',
  },
  warning: {
    main: '#ffeb3b',
  },
  info: {
    main: '#2196f3',
  },
  success: {
    main: '#4caf50',
  },
  type: 'light',
  text: {
    primary: '#222',
    secondary: '#676c72',
    disabled: grey[200],
    hint: grey[100],
  },
  background: {
    default: '#f5f5f6',
  },
})
