// eslint-disable-next-line simple-import-sort/imports
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/Login'
import HomePage from '@/pages/Home'

function root () {
  return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/home' element={<HomePage />} />
        </Routes>
  )
}

export default root
