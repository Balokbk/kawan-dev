import { ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    target?: '_blank' | '_self';
    variant?: 'primary' | 'secondary';
}