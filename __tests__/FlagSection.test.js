/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import FlagSection from '../components/FlagSection.js'


describe('With Enzyme', () => {
  it('Flag Section displays 196 flags with red in it', () => {

    let queryObject = {
      "colors": ['red'],
      "star": undefined,
      "crest": undefined
    }
    
    const wrapper = shallow(<FlagSection query={queryObject} />)

    expect(wrapper.find('img')).toHaveLength(196)
  })

  it('Flag Section displays 41 flags with red and black in it', () => {

    let queryObject = {
      "colors": ['red', 'black'],
      "star": undefined,
      "crest": undefined
    }
    const wrapper = shallow(<FlagSection query={queryObject}/>).setProps({query:queryObject})

    expect(wrapper.find('img')).toHaveLength(41)
  })

  it('Flag Section displays 15 flags with red, black, and a star', () => {

    let queryObject = {
      "colors": ['red', 'black'],
      "star": true,
      "crest": undefined
    }
    const wrapper = shallow(<FlagSection query={queryObject}/>).setProps({query:queryObject})

    expect(wrapper.find('img')).toHaveLength(15)
  })

  it('Flag Section displays 17 flags with red, green, no crest, and a star', () => {

    let queryObject = {
      "colors": ['red', 'green'],
      "star": true,
      "crest": false
    }
    const wrapper = shallow(<FlagSection query={queryObject}/>).setProps({query:queryObject})

    expect(wrapper.find('img')).toHaveLength(17)
  })
})




