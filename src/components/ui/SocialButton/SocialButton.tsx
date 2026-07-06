import { Container, Icon, Label } from './SocialButton.styles';
import { SocialButtonProps } from './SocialButton.types';

export default function SocialButton({ icon, href, children }: SocialButtonProps) {
    return(
        <Container href={href} target='_blank' rel='noopener noreferrer'>
            <Icon>
                {icon}
            </Icon>
            <Label>
                {children}
            </Label>
        </Container>
    )
}