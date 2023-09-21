import Container from "./Container";

export default {
  title: "Container",
  component: Container
};

const Template = args => <Container {...args} />
export const BasicContainer = Template.bind({})
BasicContainer.args = {
    containerType: 'dropdownMenu',
}

