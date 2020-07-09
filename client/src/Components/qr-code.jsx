import React from 'react'
import QRCode from 'qrcode.react'

class QrCode extends React.Component {
  render() {
    return (
      <div>
        <QRCode
          id='123456'
          value='https://i.redd.it/54ss55ix0vwy.jpg'
          size={400}
          level={'H'}
          includeMargin={true}
        />
      </div>
    )
  }
}

export default QrCode
