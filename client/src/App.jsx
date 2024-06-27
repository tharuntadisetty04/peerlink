import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Button from './components/Button'
import { SocketProvider } from './context/SocketContext'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'

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
      <SocketProvider>
        <div className='bg-gray-100 dark:bg-gray-900 text-slate-900 dark:text-slate-100 max-w-full min-h-svh max-h-full'>
          <div className="header flex justify-between py-4 sm:py-5 px-4 sm:px-8">
            <span className='sm:text-2xl font-semibold'>
              PeerLink - Connect with Peers easily
            </span>
            <div>
              <Button />
            </div>
          </div>

          <div className='flex flex-col items-center gap-8 p-4'>
            <VideoPlayer />

            <Options>
              <Notifications />
            </Options>
          </div>
        </div>
      </SocketProvider>
    </ThemeProvider>
  )
}

export default App