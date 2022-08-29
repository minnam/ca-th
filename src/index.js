/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import ReactDOM from 'react-dom/client'

/* Common ======================================================================================= */
// import reportWebVitals from './reportWebVitals'

/* Components =================================================================================== */
import { Modal } from './components/modal'
import { Pages } from './pages'

/* Styles ======================================================================================= */
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Modal.render />
    <Pages />
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log)
