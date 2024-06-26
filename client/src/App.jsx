import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Button from './components/Button'

function App() {
  const [thememode, setThememode] = useState("light")

  const lightmode = () => {
    setThememode("light")
  }

  const darkmode = () => {
    setThememode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(thememode)
  }, [thememode])

  return (
    <ThemeProvider value={{ thememode, lightmode, darkmode }}>
      <div className='bg-gray-100 dark:bg-gray-900 text-slate-900 dark:text-slate-100 max-w-full min-h-svh max-h-full'>
        <div className="header flex justify-between py-4 sm:py-5 px-4 sm:px-8">
          <span className='sm:text-2xl font-semibold'>
            PeerLink - Connect with Peers easily
          </span>
          <div>
            <Button />
          </div>
        </div>

      </div>
    </ThemeProvider>
  )
}

export default App