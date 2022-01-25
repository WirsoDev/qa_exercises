import React from 'react'
import reactDom from 'react-dom'
import Backgroung from '../components/background/Background'


describe('Backgroung component', ()=>{
  it('Renders without crashing', ()=>{
    const div = document.createElement('div')
    reactDom.render(<Backgroung />, div)
  })
})