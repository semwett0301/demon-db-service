import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  title: "Atom/Button",
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Docs: Story = {
  args: {
    children: "Button",
    height: 50,
    width: 300,
  },
};
