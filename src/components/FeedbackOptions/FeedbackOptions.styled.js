import styled from 'styled-components';

export const ButtonWraper = styled.div`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
`;

export const Button = styled.button`
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: ${p => p.theme.borders.none};

  :hover {
    background-color: tomato;
  }
`;
