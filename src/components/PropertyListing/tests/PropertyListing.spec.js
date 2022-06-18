import React from 'react';
import {shallow, mount} from 'enzyme';
import PropertyListing from '../PropertyListing';
import { act } from 'react-dom/test-utils';

jest.mock("../../../api/propertyApi", () => {
    // want to use mocked data in future
    // import PropertiesMock from "../../../api/propertiesMock"
    return {
        propertyApi: jest.fn().mockImplementation(() => {
            return Promise.resolve(['1', '2', '3', '4', '5']);
        }),
    };
});

describe('PropertyListing', () => {

    it('should render without crashing', () => {
        const wrapper = shallow(<PropertyListing/>);
        expect(wrapper.find('.PropertyListing')).toHaveLength(1);
    });

    it('should render five property cards', async () => {    
        const wrapper = mount(<PropertyListing/>);         
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 0));
            wrapper.update();
        });
        expect(wrapper.find('PropertyCard')).toHaveLength(5);
    });
});
