/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import FlagSection from '../components/FlagSection.js'


describe('With Enzyme', () => {
  it('Flag Section displays 3 flags with red in it', () => {
    const wrapper = shallow(<FlagSection/>).setProps({query:['red']})

    expect(wrapper.find('img')).toHaveLength(3)

  })

  it('Flag Section displays 2 flags with red and black in it', () => {
    const wrapper = shallow(<FlagSection/>).setProps({query:['red', 'black']})

    expect(wrapper.find('img')).toHaveLength(2)


  })
})