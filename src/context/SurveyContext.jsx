import { createContext , useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const SurveyContext = createContext()

// eslint-disable-next-line react/prop-types
export const SurveyProvider = ({ children }) => {
    const [answers, setAnswers] = useState({})
    const saveAnswers = (newAnswers) => {
      setAnswers({ ...answers, ...newAnswers })
    }
  
    return (
      <SurveyContext.Provider value={{ answers, saveAnswers }}>
        {children}
      </SurveyContext.Provider>
    )
  }