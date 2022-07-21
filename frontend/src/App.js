import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './hocs/Layout'
import Home from './components/Home'
import Detail from './components/Detail'
import Category from './components/Category'


export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/category/:id' element={<Category/>}/>
          <Route path='/:id' element={<Detail/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}
