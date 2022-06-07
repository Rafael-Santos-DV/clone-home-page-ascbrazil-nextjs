import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from './style';

type ButtonType = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonComponent: React.FC<ButtonType> = ({
  children,
  ...props
}) => <Button {...props}>{children}</Button>;
