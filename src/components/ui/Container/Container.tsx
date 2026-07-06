import { Wrapper } from './Container.styles';
import { ContainerProps } from './Container.types';

export default function Container({ children }: ContainerProps) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}