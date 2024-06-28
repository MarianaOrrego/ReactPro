import MyLabel, { Props } from "../components/MyLabel";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<Props> = {
  title: "MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Hello, world!",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All caps",
    size: "h2",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    size: "h3",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom color",
    size: "normal",
  },
};
