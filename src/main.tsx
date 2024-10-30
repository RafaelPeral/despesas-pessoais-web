import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@/hooks/themecontext'
import Sidebar from './components/sidebar/sidebar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Sidebar>
        <App />
      </Sidebar>
    </ThemeProvider>
  </StrictMode>
)
