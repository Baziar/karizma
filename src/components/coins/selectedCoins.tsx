import { RootState, onUpdateCoinList } from '@/store';
import coins from '@/utils/coins';
import { orderBy } from 'lodash';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0%;
  overflow-x: hidden;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  cursor: pointer;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: baseline;
  padding: 1rem;
  width: 100% !important;
  min-width: 100% !important;
  overflow-x: hidden;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  width: 100%;
`;

const Coin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  font-size: 1.2rem;
  font-weight: 900;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.5), -10px -10px 20px 5px rgba(50, 50, 50, 0.3),
    -1px -1px 4px 2px rgba(50, 50, 50, 0.4);
  transition: background 0.1s ease-in-out;
`;

const Border = styled.div`
  width: 100%;
  height: 0.75rem;
  box-shadow: -5px -5px 10px rgba(60, 60, 60, 0.5), inset 5px 5px 10px rgba(0, 0, 0, 0.5),
    inset -5px -5px 10px rgba(60, 60, 60, 0.3), 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

const Button = styled.div`
  display: inline-flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  font-size: 1.5rem;
  border-bottom-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
  overflow-x: hidden;
  cursor: pointer;
  & > span:hover {
    color: yellow !important;
  }
  & > svg {
    height: 2rem;
  }
`;

function SelectedCoins() {
  const coinsList = useSelector((state: RootState) => state.coinList);

  const router = useRouter();

  return (
    <Container>
      {orderBy(coinsList.list, 'name', 'asc')
        .filter((id: { isActive: any }) => id.isActive)
        .map((id: { name: string; symbol: string }) => (
          <Main key={id.name}>
            <Item>
              <Title>
                <Coin>{id.symbol}</Coin>
                <p>{id.name}</p>
              </Title>
              <p>{'1gdQo3HTMTkV8LK4ZnX71'}</p>
            </Item>
            <Border />
          </Main>
        ))}
      <Button onClick={() => router.push('/manage-tokens')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
          />
        </svg>
        <span>مدیریت لیست کوین ها</span>
      </Button>
    </Container>
  );
}

export { SelectedCoins };
