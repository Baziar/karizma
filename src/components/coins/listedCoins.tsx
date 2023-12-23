import { RootState, onUpdateCoinList } from '@/store';
import coins from '@/utils/coins';
import { orderBy } from 'lodash';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

function ListedCoins(props: {
  onCheckCoin: (value: boolean, id: any) => void;
  onSearch: (value: string) => void;
}) {
  const { onCheckCoin, onSearch } = props;
  const coinsList = useSelector((state: RootState) => state.coinList);
  const dispatch = useDispatch();

  return (
    <Container>
      <input placeholder="جستجو کنید" onChange={(e) => onSearch(e.target.value)} />

      {orderBy(coinsList.isSearched ? coinsList.searched : coinsList.list, 'name', 'asc')?.map(
        (id: any) => (
          <Main key={id?.name}>
            <Item>
              <Title>
                <Coin>{id?.symbol}</Coin>
                <p>{id?.name}</p>
              </Title>

              <label className="switch">
                <input
                  type="checkbox"
                  onChange={(e) => onCheckCoin(e.target.checked, id)}
                  defaultChecked={id?.isActive}
                />
                <span className="slider round"></span>
              </label>
            </Item>
            <Border />
          </Main>
        )
      )}
    </Container>
  );
}

export { ListedCoins };
