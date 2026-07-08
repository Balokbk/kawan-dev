import styled from "styled-components";
import device from '@/style/breakpoints'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  
  margin: 0 auto;
  padding: 0 2rem;
  
  @media ${device.mobile}{
    max-width: 480px;
    padding: 0 1rem;
  } 
`;