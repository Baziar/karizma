import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Container } from './index.styles';

interface ListBoxProps {
  children?: ReactNode;
}

function ListBox({ children }: ListBoxProps) {
  return <Container>{children} </Container>;
}

export { ListBox };
