import { useState, useEffect } from "react"
import "./Background.css"

function Background(props) {
  const [xDir, setXDir] = useState(0)
  const [yDir, setYDir] = useState(0)
  const [backgroundColors, setBackgroundColors] = useState([])

  useEffect(() => {
    if (props.dark === undefined) {
      setBackgroundColors(['#EAEAEA', '#EFC3C3'])
      return
    }
    if (props.dark) {
      setBackgroundColors(['#EAEAEA', '#EFC3C3'])
    } else {
      setBackgroundColors(['#222222', '#5882A8'])
    }
  }, [props.dark])

  useEffect(() => {
    // paralax animation
    window.addEventListener("mousemove", (e) => {
      var mouseX = e.pageX
      var mouseY = e.pageY
      var pageY = document.body.clientHeight
      var pageX = document.body.clientWidth
      var offset = 0.15
      var moveX = (pageX - mouseX - pageX / 2) * offset
      var moveY = (pageY - mouseY - pageY / 2) * offset
      setXDir(moveX)
      setYDir(moveY)
    })
    window.addEventListener("mouseout", () => {
      setXDir(0)
      setYDir(0)
    })
  }, [xDir])

  return (
    <div className="background">
      <svg
        style={{ transform: `translate(${xDir}px, ${yDir}px)` }}
        viewBox="0 0 1440 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-2.93271 -43.7214C77.4455 -84.7316 229.839 60.1621 282.1 144.37C330.198 168.921 421.791 248.054 403.385 368.179C380.378 518.335 232.068 416.273 195.674 344.332C159.28 272.392 -32.2674 323.909 -122.727 255.829C-213.187 187.748 -121.075 135.311 -66.677 113.699C-12.2787 92.0869 -83.3109 -2.71115 -2.93271 -43.7214Z"
          fill={backgroundColors[1]}
        />
        <circle cx="78" cy="879" r="210" fill={backgroundColors[0]} />
        <circle cx="1003" cy="182" r="137" fill={backgroundColors[0]} />
        <circle cx="1281" cy="365" r="110" fill={backgroundColors[1]} />
        <circle cx="574" cy="176" r="48" fill={backgroundColors[1]} />
        <circle cx="855" cy="757" r="48" fill={backgroundColors[1]} />
        <path
          d="M1596.99 742.329C1473.99 587.829 1209.08 716.631 1130.99 773.829C1052.89 831.026 1042.49 921.829 1114.49 958.329C1186.49 994.829 1317.49 943.329 1403.99 896.829C1490.49 850.329 1564.99 960.329 1636.49 943.329C1707.99 926.329 1719.99 896.829 1596.99 742.329Z"
          fill={backgroundColors[1]}
        />
      </svg>
    </div>
  )
}

export default Background
