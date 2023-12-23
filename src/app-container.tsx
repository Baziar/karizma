import styled from 'styled-components';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from '@/store';
import GlobalStyle from './global.styles';
import { darkTheme } from './theme';

interface AppContainerProps {
  children: any;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_main};
  color: ${({ theme }) => theme.colors.primary_text};
  direction: rtl;
  overflow: hidden;
  padding: 2.4rem;

  body {
    background-color: ${({ theme }) => theme.colors.background_main};
  }
`;

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Container>{children}</Container>
      </ThemeProvider>
    </Provider>
  );
};

export default AppContainer;
