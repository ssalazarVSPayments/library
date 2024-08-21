import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { SpsTableComponent, TableHeader, TableStatus } from 'spartansLibrary';

const colsMock_profiles: TableHeader[] = [
  { field: 'name', header: 'Nombre del perfil' },
  { field: 'description', header: 'Descripción' },
  { field: 'group', header: 'Grupo al que pertenece' },
];

const itemsMock_profiles: {
  name: string;
  description: string;
  group: string;
}[] = [
  {
    name: 'Delivery',
    description: 'Descripción breve del perfil',
    group: 'PyME',
  },
  {
    name: 'Operación',
    description: 'Descripción breve del perfil',
    group: 'PyME',
  },
  {
    name: 'Logística',
    description: 'Descripción breve del perfil',
    group: 'Restaurantes',
  },
  {
    name: 'Onboarding',
    description: 'Descripción breve del perfil',
    group: 'Gasolineras',
  },
  {
    name: 'Conciliaciones',
    description: 'Descripción breve del perfil',
    group: '',
  },
  { name: 'Cajero', description: 'Descripción breve del perfil', group: '' },
  { name: 'Admin', description: 'Descripción breve del perfil', group: 'PyME' },
  {
    name: 'Admin',
    description: 'Descripción breve del perfil',
    group: 'Restaurantes',
  },
  {
    name: 'Delivery',
    description: 'Descripción breve del perfil',
    group: 'Gasolineras',
  },
  { name: 'Delivery', description: 'Descripción breve del perfil', group: '' },
];

const colsMock_users: TableHeader[] = [
  { field: 'nombre', header: 'Nombre' },
  { field: 'usuario', header: 'Usuario' },
  { field: 'ultima_sesion', header: 'Última Sesión' },
  { field: 'perfil', header: 'Perfil' },
  { field: 'puesto', header: 'Puesto' },
  { field: 'cliente', header: 'Cliente' },
  { field: 'status', header: 'Estatus' },
  { field: 'conexion', header: 'Conexión' },
];

const itemsMock_users: object[] = [
  {
    nombre: 'Susana Navas Herrera',
    usuario: 'susana.navas@mail.com',
    ultima_sesion: '14/08/2024 13:30:32',
    perfil: 'Administrador',
    puesto: 'Supervisor',
    cliente: 'Central Mayorista',
    status: 'activo',
    conexion: 'Desconectado',
  },
  {
    nombre: 'Susana Navas Herrera',
    usuario: 'susana.navas@mail.com',
    ultima_sesion: '14/08/2024 13:30:32',
    perfil: 'Administrador',
    puesto: 'Supervisor',
    cliente: 'Central Mayorista',
    status: 'activo',
    conexion: 'Desconectado',
  },
  {
    nombre: 'Susana Navas Herrera',
    usuario: 'susana.navas@mail.com',
    ultima_sesion: '14/08/2024 13:30:32',
    perfil: 'Administrador',
    puesto: 'Supervisor',
    cliente: 'Central Mayorista',
    status: 'activo',
    conexion: 'Desconectado',
  },
  {
    nombre: 'Susana Navas Herrera',
    usuario: 'susana.navas@mail.com',
    ultima_sesion: '14/08/2024 13:30:32',
    perfil: 'Administrador',
    puesto: 'Supervisor',
    cliente: 'Central Mayorista',
    status: 'pendiente',
    conexion: 'Desconectado',
  },
  {
    nombre: 'Susana Navas Herrera',
    usuario: 'susana.navas@mail.com',
    ultima_sesion: '14/08/2024 13:30:32',
    perfil: 'Administrador',
    puesto: 'Supervisor',
    cliente: 'Central Mayorista',
    status: 'pendiente',
    conexion: 'Desconectado',
  },
  {
    nombre: 'Susana Navas Herrera',
    usuario: 'susana.navas@mail.com',
    ultima_sesion: '14/08/2024 13:30:32',
    perfil: 'Administrador',
    puesto: 'Supervisor',
    cliente: 'Central Mayorista',
    status: 'bloqueado',
    conexion: 'Desconectado',
  },
  {
    nombre: 'Susana Navas Herrera',
    usuario: 'susana.navas@mail.com',
    ultima_sesion: '14/08/2024 13:30:32',
    perfil: 'Administrador',
    puesto: 'Supervisor',
    cliente: 'Central Mayorista',
    status: 'bloqueado',
    conexion: 'Desconectado',
  },
  {
    nombre: 'Susana Navas Herrera',
    usuario: 'susana.navas@mail.com',
    ultima_sesion: '14/08/2024 13:30:32',
    perfil: 'Administrador',
    puesto: 'Supervisor',
    cliente: 'Central Mayorista',
    status: 'bloqueado',
    conexion: 'Desconectado',
  },
  {
    nombre: 'Susana Navas Herrera',
    usuario: 'susana.navas@mail.com',
    ultima_sesion: '14/08/2024 13:30:32',
    perfil: 'Administrador',
    puesto: 'Supervisor',
    cliente: 'Central Mayorista',
    status: 'activo',
    conexion: 'Desconectado',
  },
  {
    nombre: 'Susana Navas Herrera',
    usuario: 'susana.navas@mail.com',
    ultima_sesion: '14/08/2024 13:30:32',
    perfil: 'Administrador',
    puesto: 'Supervisor',
    cliente: 'Central Mayorista',
    status: 'deshabilitado',
    conexion: 'Desconectado',
  },
];
const statusMock_users: TableStatus = {
  activo: {
    severity: 'success',
    icon: 'pi pi-check',
  },
  deshabilitado: {
    severity: 'contrast',
    icon: '',
  },
  pendiente: {
    severity: 'warning',
    icon: 'pi pi-exclamation-triangle',
  },
  bloqueado: {
    severity: 'danger',
    icon: 'pi pi-ban',
  },
};

/**
 * Storybook metadata for the SpsTableComponent.
 *
 */
const meta: Meta<SpsTableComponent> = {
  title: 'Table/Table',
  component: SpsTableComponent,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of objects',
    },
    cols: {
      control: { type: 'object' },
      description: 'Array of Objects<TableHeader>',
    },
    options: {
      type: 'string',
      description: 'Field label',
    },
    optionSelect: {
      type: 'function',
      description: 'Event output',
    },
    statusSelector: {
      control: { type: 'object' },
      type: { name: 'other', value: 'TableStatus' },
      description: 'Object to manage status',
    },
  },
  args: {},
};

export default meta;

/**
 * Type definition for a Story of SpsTableComponent.
 *
 */
type Story = StoryObj<SpsTableComponent>;

/**
 * Table basic
 *
 */
export const Basic: Story = {
  args: {
    items: itemsMock_profiles,
    cols: colsMock_profiles,
  },
};

/**
 * Table with Options
 *
 */
export const Options: Story = {
  args: {
    items: itemsMock_profiles,
    cols: colsMock_profiles,
    options: 'Acciones',
    optionSelect: fn(),
  },
};

/**
 * Table with Status field
 *
 */
export const Status: Story = {
  args: {
    cols: colsMock_users,
    items: itemsMock_users,
    statusSelector: statusMock_users,
  },
};
