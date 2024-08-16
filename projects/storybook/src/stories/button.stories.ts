import type { Meta, StoryObj } from '@storybook/angular';

import { SpsButtonComponent } from 'spartansLibrary';

/**
 * Storybook metadata for the SpsButtonComponent.
 *
 * @type {Meta<SpsButtonComponent>}
 */
const meta: Meta<SpsButtonComponent> = {
  title: 'Buttons/Sample',
  component: SpsButtonComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

/**
 * Type definition for a Story of SpsButtonComponent.
 *
 * @typedef {Story}
 */
type Story = StoryObj<SpsButtonComponent>;

/**
 * Primary button story with a solid color.
 *
 * @type {Story}
 * @property {string} label - The label of the button.
 * @property {boolean} disabled - Indicates if the button is disabled.
 * @property {string} backgroundColor - The background color of the button.
 */
export const Primary: Story = {
  args: {
    label: 'Primary',
    disabled: false,
    backgroundColor: '#0764ef',
  },
};

/**
 * Secondary button story with a solid color.
 *
 * @type {Story}
 * @property {string} label - The label of the button.
 * @property {boolean} disabled - Indicates if the button is disabled.
 * @property {string} backgroundColor - The background color of the button.
 */
export const Secondary: Story = {
  args: {
    label: 'Secondary',
    disabled: false,
    backgroundColor: '#d401ff',
  },
};

/**
 * Tertiary button story with a solid color.
 *
 * @type {Story}
 * @property {string} label - The label of the button.
 * @property {boolean} disabled - Indicates if the button is disabled.
 * @property {string} backgroundColor - The background color of the button.
 */
export const Tertiary: Story = {
  args: {
    label: 'Tertiary',
    disabled: false,
    backgroundColor: '#14ff00',
  },
};

/**
 * Disabled button story.
 *
 * @type {Story}
 * @property {string} label - The label of the button.
 * @property {boolean} disabled - Indicates if the button is disabled.
 * @property {string} backgroundColor - The background color of the button.
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    backgroundColor: '#000000',
  },
};
