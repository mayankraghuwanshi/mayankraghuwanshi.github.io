import React, { useEffect } from "react"
import PropTypes from "prop-types"


const Canvas = (props) => {
  const {
    skills,
    width,
    height,
    dragControl,
    noMouse,
    textColour,
    textHeight
  } = props

  useEffect(() => {
    window.TagCanvas.Start("skills-globe", "", {
      dragControl,
      noMouse,
      textColour,
      textHeight,
      initial: [0.2, -0.2]
    })
  })

  return (
    <canvas id="skills-globe" width={width} height={height}>
      <ul>
        {
          skills.map(skill => {
            return (
              <li>
                <a href={`#${skill}`}>{skill}</a>
              </li>
            )
          })
        }
      </ul>
    </canvas>
  )
}

Canvas.defaultProps = {
  noMouse: true,
  dragControl: true
}

Canvas.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  dragControl: PropTypes.bool,
  noMouse: PropTypes.bool,
  textColour: PropTypes.string,
  textHeight: PropTypes.number
}


export default Canvas