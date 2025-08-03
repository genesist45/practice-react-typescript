import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Box () {
  // Gamit ang useContext aron kuhaon ang value gikan sa ThemeContext
  // Mao ni ang paagi aron ma-access nimo ang theme colors
  const theme = useContext(ThemeContext)

  return (
    <>
      {/* Gigamit ang theme object aron ma-apply sa style sa div */}
      <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>
        This is a theme!
      </div>
    </>
  )
}

export default Box
