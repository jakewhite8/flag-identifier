/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import FlagSection from '../components/FlagSection.js'


describe('With Enzyme', () => {
  it('Flag Section displays 77 flags with red in it', () => {

    let queryObject = {
      "colors": ['red'],
      "star": undefined,
      "crest": undefined
    }
    
    const wrapper = shallow(<FlagSection query={queryObject} />)

    expect(wrapper.find('img')).toHaveLength(77)
  })

  it('Flag Section displays 16 flags with red and black in it', () => {

    let queryObject = {
      "colors": ['red', 'black'],
      "star": undefined,
      "crest": undefined
    }
    const wrapper = shallow(<FlagSection query={queryObject}/>).setProps({query:queryObject})

    expect(wrapper.find('img')).toHaveLength(16)
  })

  it('Flag Section displays 5 flags with red, black, and a star', () => {

    let queryObject = {
      "colors": ['red', 'black'],
      "star": true,
      "crest": undefined
    }
    const wrapper = shallow(<FlagSection query={queryObject}/>).setProps({query:queryObject})

    expect(wrapper.find('img')).toHaveLength(5)
  })

  it('Flag Section displays 7 flags with red, green, no crest, and a star', () => {

    let queryObject = {
      "colors": ['red', 'green'],
      "star": true,
      "crest": false
    }
    const wrapper = shallow(<FlagSection query={queryObject}/>).setProps({query:queryObject})

    expect(wrapper.find('img')).toHaveLength(7)
  })
})




