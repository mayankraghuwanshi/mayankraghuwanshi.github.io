import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script src="js/tagcanvas.min.js" type="text/javascript" key="tag-cloud-canvas"></script>
  ])
}