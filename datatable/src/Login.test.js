import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from './Login';
import Home from './Home'
import DataTable from './Display-table'

it('Login page should render', () => {
    let wrapper = mount(<Login />)
    expect(wrapper).toMatchSnapshot();
});

it('Should render the login form', () => {
    const wrapper = shallow(<Login />);
    console.log(wrapper.debug());
    expect(wrapper.find('Formik').length).toEqual(1);
});

it('Home page should render ', () => {
    let wrapper = mount(<Home />);
    expect(wrapper).toMatchSnapshot();
});

it('Data Table is rendered', () => {
    let wrapper = mount(<DataTable />);
    expect(wrapper.find('MaterialTable').length).toEqual(1);
});
it('File Input Button is rendered', () => {
    let wrapper = mount(<DataTable />);
    expect(wrapper.find('input.d-none').length).toEqual(1);
});
it('Upload Button is rendered', () => {
    let wrapper = mount(<DataTable />);
    expect(wrapper.find('button.a1').length).toEqual(1);
});
it('Save Button is rendered', () => {
    let wrapper = mount(<DataTable />);
    expect(wrapper.find('button.a2').length).toEqual(1);
});
it('View Button is rendered', () => {
    let wrapper = mount(<DataTable />);
    expect(wrapper.find('button.a3').length).toEqual(1);
});