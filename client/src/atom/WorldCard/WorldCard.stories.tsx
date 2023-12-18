import "../../styles/global.css";

import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { WorldCard } from "./WorldCard";

const meta: Meta<typeof WorldCard> = {
  component: WorldCard,
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
  title: "Atom/WorldCard",
};

export default meta;

type Story = StoryObj<typeof WorldCard>;

export const Docs: Story = {
  args: {
    info: [
      {
        name: "Количество мужчин",
        value: 20,
      },
    ],
    name: "Реальный мир",
  },
};
