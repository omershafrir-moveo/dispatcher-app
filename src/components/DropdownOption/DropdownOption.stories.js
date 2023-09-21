import DropdownOption from "./DropdownOption";

export default {
  title: "DropdownOption",
  component: DropdownOption
};

const Template = args => <DropdownOption {...args} />
export const inputBoxDropdownOption = Template.bind({})
inputBoxDropdownOption.args = {
    value: 'InputBox',
    isInputBox: true,
    handleClick: () => {}
}

