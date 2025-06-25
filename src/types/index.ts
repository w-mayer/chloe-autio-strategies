// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Button component types
export interface ButtonProps extends BaseComponentProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'default' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

// Card component types
export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
}

// Form input types
export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
} 