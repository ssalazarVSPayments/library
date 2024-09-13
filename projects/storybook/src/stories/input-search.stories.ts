import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { SpsInputSearchComponent } from 'spartansLibrary';
import { HttpClientModule } from '@angular/common/http';

/**
 * Storybook metadata for the SpsInputSearchComponent.
 *
 */
const meta: Meta<SpsInputSearchComponent> = {
  title: 'Inputs/InputSearch',
  component: SpsInputSearchComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule],
    }),
  ],
  argTypes: {
    apiUrl: {
      type: 'string',
      description: 'API URL',
      table: {
        category: 'Content',
        defaultValue: { summary: 'https://api.example.com/search' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder for input',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Buscar' },
      },
    },
    iconPosition: {
      type: 'string',
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
      description: 'Icon position',
      table: {
        category: 'Styling',
        defaultValue: { summary: 'right' },
      },
    },
    wFull: {
      type: 'boolean',
      control: 'boolean',
      description: 'Full width',
      table: {
        category: 'Styling',
        defaultValue: { summary: 'false' },
      },
    },
    helperText: {
      type: 'string',
      control: 'text',
      description: 'Helper text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Helper text' },
      },
    },
    error: {
      type: 'boolean',
      control: 'boolean',
      description: 'Error state',
      table: {
        category: 'Styling',
        defaultValue: { summary: 'false' },
      },
    },
    errorMessage: {
      type: 'string',
      control: 'text',
      description: 'Error message',
      table: {
        category: 'Content',
        defaultValue: { summary: '' },
      },
    },
    disabled: {
      type: 'boolean',
      control: 'boolean',
      description: 'Disabled state',
      table: {
        category: 'Styling',
        defaultValue: { summary: 'false' },
      },
    },
    floatLabel: {
      type: 'boolean',
      control: 'boolean',
      description: 'Float label',
      table: {
        category: 'Styling',
        defaultValue: { summary: 'false' },
      },
    },
    changeText: {
      type: 'function',
      description: 'Event emitter',
      action: 'text-changed',
      table: {
        category: 'Events',
        defaultValue: { summary: 'EventEmitter' },
      },
    },
    onChange: {
      type: 'function',
      description: 'Event emitter',
      action: 'input-changed',
      table: {
        category: 'Events',
        defaultValue: { summary: 'EventEmitter' },
      },
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
    changeText: action('text-changed'),
    onChange: action('input-changed'),
    apiUrl: 'https://pokeapi.co/api/v2/pokemon',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Buscar',
    disabled: true,
    apiUrl: 'https://pokeapi.co/api/v2/pokemon',
  },
};

export const FloatLabel: Story = {
  args: {
    placeholder: 'Buscar',
    floatLabel: true,
    apiUrl: 'https://pokeapi.co/api/v2/pokemon',
  },
};

export const FullWidth: Story = {
  args: {
    placeholder: 'Buscar',
    wFull: true,
    apiUrl: 'https://pokeapi.co/api/v2/pokemon',
  },
};

export const PositionIcon: Story = {
  args: {
    placeholder: 'Buscar',
    iconPosition: 'left',
    apiUrl: 'https://pokeapi.co/api/v2/pokemon',
  },
};

export const WithHelperText: Story = {
  args: {
    placeholder: 'Buscar',
    helperText: 'Helper text',
    apiUrl: 'https://pokeapi.co/api/v2/pokemon',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Buscar',
    error: true,
    errorMessage: 'Error message',
    apiUrl: 'https://pokeapi.co/api/v2/pokemon',
  },
};
