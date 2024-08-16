import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonSpartanComponent } from 'spartansLibrary';

/**
 * Storybook metadata for the ButtonSpartanComponent.
 *
 * @type {Meta<ButtonSpartanComponent>}
 */
const meta: Meta<ButtonSpartanComponent> = {
  title: 'Buttons/Sample',
  component: ButtonSpartanComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

/**
 * Type definition for a Story of ButtonSpartanComponent.
 *
 * @typedef {Story}
 */
type Story = StoryObj<ButtonSpartanComponent>;

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
