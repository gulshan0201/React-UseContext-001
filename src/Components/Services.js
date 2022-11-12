import Navbar from "./Navbar"
import ThemeContext from "./Context"
import { useContext } from "react"
import './style.css'

const Services = () => {

  const { isLight } = useContext(ThemeContext)

  return (
    <div className={isLight ? "light" : "dark"}>
      <Navbar />
      <h1>This is Services page which provides us services</h1>
    </div>
  )
}

export default Services