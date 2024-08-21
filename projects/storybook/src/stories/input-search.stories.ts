import type { Meta, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions'; // {{ edit_1 }}

import { SpsInputSearchComponent } from 'spartansLibrary';

/**
 * Storybook metadata for the SpsInputSearchComponent.
 *
 */
const meta: Meta<SpsInputSearchComponent> = {
  title: 'Inputs/InputSearch',
  component: SpsInputSearchComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder for input',
    },
    changeText: {
      type: 'function',
      description: 'Event emitter',
    },
  },
  args: {},
};

export default meta;

/**
 * Type definition for a Story of SpsInputSearchComponent.
 *
 */
type Story = StoryObj<SpsInputSearchComponent>;

/**
 * Input search basic
 *
 */
export const Basic: Story = {
  args: {
    placeholder: 'Buscar',
    changeText: action('text changed'),
  },
};
