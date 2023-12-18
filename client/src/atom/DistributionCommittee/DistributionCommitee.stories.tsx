import "../../styles/global.css";

import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Mood } from "../../types";
import { DistibutionCommittee } from "./DistibutionCommittee";

const meta: Meta<typeof DistibutionCommittee> = {
  component: DistibutionCommittee,
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
  title: "Atom/DistributionCommitee",
};

export default meta;

type Story = StoryObj<typeof DistibutionCommittee>;

export const Docs: Story = {
  args: {
    distributors: [
      {
        age: 23,
        distributorSkills: [
          {
            id: 1,
            name: "ABC",
            requiredScreams: 300,
          },
        ],
        id: 1,
        mood: Mood.GOOD,
      },
    ],
  },
};
