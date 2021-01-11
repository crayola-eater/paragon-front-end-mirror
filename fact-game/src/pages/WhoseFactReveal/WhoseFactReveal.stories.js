import React from 'react'
import WhoseFactReveal from './index'

export default {
    title: 'WhoseFactReveal',
    component: WhoseFactReveal,
}

const Template = (args) => <WhoseFactReveal {...args} />

export const WhoseFactRevealStory = Template.bind({})
WhoseFactRevealStory.args = {
    displayName: 'Katie',
    roundNumber: 1,
}
