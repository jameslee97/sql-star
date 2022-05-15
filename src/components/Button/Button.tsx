import React from 'react';
import { Button, useColorMode } from '@chakra-ui/react'
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const CustomButton = ({
  primary = true,
  size = 'md',
  label = 'Test Button',
  ...props
}: ButtonProps) => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <Button size={size} colorScheme={mode} {...props}>{label}</Button>
  );
};
