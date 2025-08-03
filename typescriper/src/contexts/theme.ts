// Interface nga nag-define sa structure sa imong theme object
export interface Theme {
  primary: {
    main: string      // main color sa primary
    text: string      // text color sa primary
  }
  secondary: {
    main: string      // main color sa secondary
    text: string      // text color sa secondary
  }
}

// Theme object nga mo-follow sa Theme interface structure
// Mao ni ang value nga i-provide sa atong context
export const theme: Theme = {
  primary: {
    main: '#f50057',
    text: '#fff',
  },
  secondary: {
    main: '#f50057',
    text: '#fff',
  },
}
