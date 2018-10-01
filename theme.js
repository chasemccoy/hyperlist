const colors = {
  black: '#191919',
  white: '#FFF'
}

const space = [0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 128, 256, 512]

const sizes = {
  layout: {
    maxWidth: '38rem',
    offset: '18%'
  },
  timeline: {
    pointWidth: '12px',
    lineWidth: '2px',
    linePadding: '32px',
  }
}

const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  heavy: 800,
}

const fonts = {
  sans: "Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  serif: "Tiempos, SF Serif, Georgia, serif",
  mono: "OperatorMono-Book, Inconsolata, Monaco, monospace"
}

const theme = {
  colors,
  space,
  sizes,
  fontWeights,
  fonts
}

export default theme
