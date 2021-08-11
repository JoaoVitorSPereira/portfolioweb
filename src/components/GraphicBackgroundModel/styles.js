import styled from 'styled-components';

export const Content = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.mdlg} {
    display: none;
  }
`;
