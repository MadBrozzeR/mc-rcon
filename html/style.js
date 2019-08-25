var style = {
  '@keyframes notification': {
    '0%': {
      left: '100%',
      opacity: 0
    },
    '10%': {
      left: '0%',
      opacity: 1
    },
    '90%': {
      left: '0%',
      opacity: 1
    },
    '100%': {
      left: '100%',
      opacity: 0
    }
  },

  '*': {
    boxSizing: 'border-box'
  },
  'html,body': {
    height: '100%',
    margin: 0,
    background: '#002'
  },
  'input': {
    width: '100%',
    height: '32px',
    lineHeight: '32px',
    border: '1px solid #779',
    padding: '0 10px'
  },
  'button': {
    height: '32px',
    lineHeight: '32px',
    verticalAlign: 'top',
    border: '1px solid #779',
    background: '#ccf',
    cursor: 'pointer'
  },
  '.main': {
    width: '100%',
    height: '100%',
    margin: '0 auto',
    textAlign: 'center',
    padding: '12px 0'
  },
  '.curtain': {
    position: 'fixed',
    top: '10%',
    left: '70%',
    width: '0%',
    height: '0%',
    opacity: 0,
    overflow: 'hidden',
    background: 'rgba(128, 128, 128, 0.7)',
    transition: [
      '.3s top ease-in-out',
      '.3s left ease-in-out',
      '.3s width ease-in-out',
      '.3s height ease-in-out',
      '.3s opacity ease-in-out'
    ].join(', '),

    '-table': {
      width: '100%',
      height: '100%'
    },

    '-body': {
      verticalAlign: 'middle',
      textAlign: 'center'
    },

    '.active': {
      top: '0%',
      left: '0%',
      width: '100%',
      height: '100%',
      opacity: 1
    }
  },
  '.auth': {
    display: 'inline-block',
    width: '250px',
    background: '#ddf',
    border: '1px solid #779',
    padding: '24px',
    overflow: 'hidden',

    '-submit': {
      width: '100%'
    }
  },

  '.form': {
    display: 'inline-block',
    maxWidth: '1000px',
    width: '100%',
    background: '#ddf',
    padding: 24 * 2 + 30 + 35 + 'px 24px 24px',
    height: '100%'
  },
  '.command': {
    '-row': {
      paddingRight: '150px',
      marginTop: -24 - 30 - 35 + 'px',
      marginBottom: '24px'
    },
    '-input': {
    },
    '-submit': {
      width: '150px',
      marginRight: '-150px'
    }
  },
  '.output': {
    height: '100%',
    background: '#eef',
    border: '1px solid #779',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    padding: '12px',
    overflow: 'auto'
  },
  '.toolbar': {
    textAlign: 'left',

    '-button': {
      display: 'inline-block',
      lineHeight: '30px',
      border: '1px solid #779',
      background: '#ccf',
      width: '100px',
      margin: '0 3px 3px 0',
      padding: '0 5px',
      cursor: 'pointer'
    }
  },
  '.notifications': {
    position: 'fixed',
    right: '10px',
    top: '10px',

    '-item': {
      position: 'relative',
      width: '300px',
      padding: '12px',
      minHeight: '64px',
      animationName: 'notification',
      animationDuration: '7s',
      marginBottom: '4px',

      '.error': {
        background: '#f33',
        border: '1px solid #a00'
      },
      '.normal': {
        background: '#080',
        border: '1px solid #030'
      }
    }
  }
};
