import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BackIcon from '@assets/back.svg';
import { ListBox, ListedCoins, TopNav } from '@/components';
import { Container } from '../index.styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, isSearchedCoinList, onSearchedCoinList, onUpdateCoinList } from '@/store';
import coins from '@/utils/coins';
import { orderBy } from 'lodash';

const ManageTokens = () => {
  const router = useRouter();
  const coinsList = useSelector((state: RootState) => state.coinList);

  // const [mainData, setMainData] = useState<any[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(isSearchedCoinList(false));
    };
  }, []);

  function handleCheckCoin(isActive: boolean, id: any) {
    const filterCoinList = coinsList.list?.filter((coin) => coin?.symbol !== id?.symbol);
    let item = { ...id, isActive: isActive };
    dispatch(onUpdateCoinList(orderBy([...filterCoinList, item], 'name', 'asc')));
  }

  function handleSearch(value: string) {
    console.log('value', value);

    if (value.length > 2) {
      dispatch(isSearchedCoinList(true));

      fetch(`/api/tokens?searchStr=${value}`)
        .then((response) => response.json())
        .then((res) => {
          const prepareCoins: coinActive[] = res.coins.map((id: any) => {
            const filterOldData = coinsList.list?.find((item) => item?.symbol === id?.symbol);
            return filterOldData ? filterOldData : id;
          });
          dispatch(onSearchedCoinList(prepareCoins));
        });
    } else {
      dispatch(isSearchedCoinList(false));
    }
  }

  return (
    <Container>
      <TopNav
        rightComponent={
          <div style={{ color: '#929292' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              style={{ height: '2.5rem' }}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        }
        centerComponent={<h4>مدیریت لیست کوین ها</h4>}
        leftComponent={<BackIcon onClick={() => router.push('/')} />}
      />
      <ListBox>
        <ListedCoins onCheckCoin={handleCheckCoin} onSearch={handleSearch} />
      </ListBox>
    </Container>
  );
};

export default ManageTokens;
