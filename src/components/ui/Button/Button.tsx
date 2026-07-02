import { ButtonProps } from './Button.types';
import { Container } from './Button.styles';

export default function Button({ children, href = '#', target = '_self', variant = 'primary' }: ButtonProps) {
    return (
        <Container href={href} target={target} $variant={variant}>
            {children}
        </Container>
    )
}