// import { configure, shallow, mount } from "enzyme";
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });

import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

import StatusFormatter from "../StatusFormatter";
import {Switch} from 'antd';

describe('Status Formatter', () => {

    it ('should have classname wrapper', () => {
        let wrapper = shallow(<StatusFormatter />);
        expect(wrapper.find('.wrapper').exists()).toBe(true);
    })
    
    it ('should have a div', () => {
        let wrapper = shallow(<StatusFormatter />);
        expect(wrapper.find('div').exists()).toBe(true)
    })

    it ('should have switch component', () => {
        let wrapper = shallow(<StatusFormatter />);
        expect(wrapper.find(Switch).exists()).toBe(true);
    })

    it("has onChange that toggles the state",()=>{
		const wrapper = mount(<StatusFormatter/>)
		// wrapper.setState({active:true})
		// console.log(wrapper.instance())
		expect(wrapper.state('active')).toEqual(true)
	})

});

