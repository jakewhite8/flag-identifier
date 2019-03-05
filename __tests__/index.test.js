/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Home from '../pages/index.js'

describe('With Enzyme', () => {
  it('App shows "Flag Identifier"', () => {
    const app = shallow(<Home />).dive()

    expect(app.find('h1').text()).toEqual('Flag Identifier')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Flag Identifier!"', () => {
    const component = renderer.create(<Home />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
