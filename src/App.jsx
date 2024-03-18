import { Route, Routes } from 'react-router-dom'
import './App.css'
import View from './Components/View'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './index.css'
import TextEditorView from './Components/TextEditorView'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/view' element={<View/>} />
        <Route path='/textEditorView' element={<TextEditorView/>} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
