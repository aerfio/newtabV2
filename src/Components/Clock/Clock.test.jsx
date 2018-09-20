import React from 'react';
import Clock from './Clock';
import { shallow } from 'enzyme';
const constantDate = new Date('December 17, 1995 03:04:00');
describe('Clock component', () => {
	beforeAll(() => {
		global.Date = class extends Date {
			constructor() {
				super(constantDate.getTime());
			}
		};
	});
	test('should render', () => {
		const wrapper = shallow(<Clock />);
		expect(wrapper.find('.clock')).toHaveLength(1);
	});
	test('should render with proper text', () => {
		const wrapper = shallow(<Clock />);
		expect(wrapper.find('.clock').text()).toEqual('03:04');
	});
});
