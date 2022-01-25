import React from 'react'
import reactDom from 'react-dom'
import Finish from '../components/quiz/Finish'


describe('Finish component', ()=>{
  it('Renders without crashing receiving props', ()=>{
    const div = document.createElement('div')
    reactDom.render(<Finish data='hello'/>, div)
  })
})

