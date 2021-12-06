import React from 'react';
import SideNav from './SideNav';
import SideNavItem from './SideNavItem';

import SideNavLinkText from './SideNavLinkText';
import SideNavList from './SideNavList';
import SideNavMenu from './SideNavMenu';

export default {
    title: 'Components/SideNav',
    component: SideNav,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
//const Template = (args) => <SideNavLinkText {...args}> Hello </SideNavLinkText>;
const Template = (args) => (
    <SideNav>
        <SideNavList>
            <SideNavItem>
                <SideNavLinkText>Item level 1</SideNavLinkText>
            </SideNavItem>
            <SideNavItem isActive>
                <SideNavLinkText>Item level 1</SideNavLinkText>
            </SideNavItem>
        </SideNavList>
    </SideNav>
);

export const Default = Template.bind({});
export const Collapsed = Template.bind({});
export const WithMenuGroup = Template.bind({});
export const WithCustomSideNavItem = Template.bind({});
export const WithFooter = Template.bind({});
export const WithHeader = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {

};
