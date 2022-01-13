import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from 'registerServiceWorker'
import App from 'components/App'

import 'es6-promise/auto'
import 'setimmediate'

// import 'resources/_antd.less' // redefinition AntDesign variables
// import 'bootstrap/dist/css/bootstrap.min.css' // bootstrap styles

import 'resources/AntStyles/AntDesign/antd.cleanui.scss'
import 'resources/CleanStyles/Core/core.cleanui.scss'
import 'resources/CleanStyles/Vendors/vendors.cleanui.scss'

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

//export default history
