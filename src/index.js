import React from 'react'
import ReactDOM from 'react-dom'


const App = () => <div className="app">Hello Azure World</div>

ReactDOM.render(<App />, document.getElementById('app'))

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => { // 로딩 완료되고 캐싱 되게
        navigator.serviceWorker.register('/service-worker.js')
    })
}
