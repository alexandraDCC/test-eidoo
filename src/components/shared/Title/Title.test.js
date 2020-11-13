import React from 'react'
import { shallow } from 'enzyme'

import Title from './index'

describe('<Title />', () => {
	it('have a main title', () => {
		const wrapper = shallow(<Title text={'dogs by breeds'}/>);
		const header = 'dogs by breeds';
		expect(wrapper.contains(header)).toEqual(true);
	});
});
