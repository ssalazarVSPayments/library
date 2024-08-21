import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { SpsPaginationComponent } from 'spartansLibrary';

/**
 * Storybook metadata for the SpsPaginationComponent.
 *
 */
const meta: Meta<SpsPaginationComponent> = {
  title: 'Table/Pagination',
  component: SpsPaginationComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    rows: 10,
    totalRecords: 120,
    changePage: fn(),
  },
};

export default meta;

/**
 * Type definition for a Story of SpsPaginationComponent.
 *
 */
type Story = StoryObj<SpsPaginationComponent>;

/**
 * Pagination basic
 *
 */
export const Basic: Story = {
  args: {},
};

/**
 * Pagination filled
 *
 */
export const Filled: Story = {
  args: {
    filled: true,
  },
};
