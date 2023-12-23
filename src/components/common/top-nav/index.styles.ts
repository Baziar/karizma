import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
  position: relative;
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;

  & > p {
    font-size: 2rem;
    white-space: nowrap;
  }
`;

export const Left = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  justify-content: center;

  & > svg {
    fill: ${({ theme }) => theme.colors.icons};
  }
`;

export const Right = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  align-items: center;
  color: white;

  & > svg {
    fill: ${({ theme }) => theme.colors.icons};
  }
`;
