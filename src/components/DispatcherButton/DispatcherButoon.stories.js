import DispatcherButton from "./DispatcherButton";

export default {
  title: "DispatcherButton",
  component: DispatcherButton,
  argTypes : {
    handleClick: {action: "handleClick"}
  }
};
const Template = args => <DispatcherButton {...args} />
export const BasicButton = Template.bind({})
BasicButton.args = {
  text: 'Basic Button',
  handleClick: () => {console.log("basic Click")}
}

 
export const CoolButton = Template.bind({})
CoolButton.args = {
  text: 'CoolButton',
  handleClick: () => {console.log("cool Click")}
}