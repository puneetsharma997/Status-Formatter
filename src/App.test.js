
import React from 'react';

import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import App from './App';
import StatusFormatter from './component/StatusFormatter/StatusFormatter';

describe('App ', () => {

    it ('should have classname App', () => {
        let wrapper = shallow(<App />);
        expect(wrapper.find('.App').exists()).toBe(true);
    })

    it ('should have StatusFormatter component', () => {
        let wrapper = shallow(<App />);
        expect(wrapper.find(StatusFormatter).exists()).toBe(true);
    })

    it('should have active property', () => {
        const wrapper = shallow(<App />);
        const statusFormatter = wrapper.find(StatusFormatter);
        expect(statusFormatter.prop('active')).toBeDefined()
      });


})

