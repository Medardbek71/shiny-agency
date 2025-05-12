import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Error from './components/Error'
import Home from './pages/Home/'
import Survey from './pages/Survey/'
import Header from './components/Header/'
import Result from './pages/Results'
import Freelances from './pages/Freelances'
import GlobalStyle from './utils/style/GlobalStyle'
import Footer from './components/Footer/index'
import { ThemeProvider } from './context/ThemeContext'
import { SurveyProvider } from './context/SurveyContext'

createRoot(document.getElementById('root')).render(
    <Router>
      <SurveyProvider>
        <ThemeProvider>
          <Header/>
          <GlobalStyle/>  
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/survey/:questionNumber' element={<Survey/>}/>
                <Route path='/result' element={<Result/>}/>
                <Route path='/freelances' element={<Freelances/>}/>
                <Route path='*' element={<Error/>}/>
              </Routes>
          <Footer/>
        </ThemeProvider>
      </SurveyProvider>
    </Router>
)