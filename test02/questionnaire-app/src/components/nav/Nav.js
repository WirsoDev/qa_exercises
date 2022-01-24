import { useState } from "react"
import "./Nav.css"
import moon from "../../assets/img/moon.svg"
import sun from "../../assets/img/sun.svg"

function Nav(props) {

    const [themeIcon, setThemeIcon] = useState(moon)
    const [dark, setDark] = useState(false)

    function changeTheme(){
        if(dark === false){
            setDark(true)
            setThemeIcon(sun)
            document.documentElement.style.setProperty('--background-color', '#141414')
            document.documentElement.style.setProperty('--main-font-color', '#FFFFFF')
            document.documentElement.style.setProperty('--light-gery', '#222222')
            document.documentElement.style.setProperty('--roze', '#5882A8')
        }
        else{
            document.documentElement.style.setProperty('--background-color', '#F5F5F5')
            document.documentElement.style.setProperty('--main-font-color', '#141414')
            document.documentElement.style.setProperty('--light-gery', '#EAEAEA')
            document.documentElement.style.setProperty('--roze', '#EFC3C3')
            setDark(false)
            setThemeIcon(moon)
        }
        props.darkthemne(dark)
        console.log(dark)
    }


  return (
    <div className="nav">
      <h2>QuizApp</h2>
      <img src={themeIcon} alt="light-icon" onClick={changeTheme}/>
    </div>
  )
}

export default Nav
