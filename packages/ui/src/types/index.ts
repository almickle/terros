import { HTMLAttributes, ReactNode } from 'react';

export type BaseProps = {
  /** Additional class name for the component */
  className?: string;
  /** React children */
  children?: ReactNode;
};

export type PolymorphicProps<Element extends React.ElementType> = {
  /** Render as a different HTML element or React component */
  as?: Element;
} & Omit<HTMLAttributes<Element>, 'as'>;

export type WithVariant = {
  /** Variant style of the component */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
};

export type WithSize = {
  /** Size of the component */
  size?: 'sm' | 'md' | 'lg';
};

export type WithColor = {
  /** Color of the component */
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
};

export type WithFullWidth = {
  /** Whether the component should take up the full width of its container */
  fullWidth?: boolean;
};
