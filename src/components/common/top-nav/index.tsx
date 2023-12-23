import { ReactNode, memo, useCallback, useEffect } from 'react';
import { Center, Container, Left, Right } from './index.styles';
import BackIcon from '@assets/back.svg';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, onUpdateCoinList } from '@/store';

interface TopNavProps {
  centerComponent?: ReactNode;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  style?: object;
}

const TopNavigation = ({ centerComponent, leftComponent, rightComponent, style }: TopNavProps) => {
  const coinsList = useSelector((state: RootState) => state.coinList);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`/api/tokens?searchStr=All`)
      .then((response) => response.json())
      .then((res) => {
        const prepareCoins: coinActive[] = res.coins.map((id: any) => {
          let item = { ...id, isActive: id.isActive ? id.isActive : false };
          const isDefault = ['BTC', 'ETH', 'ALGO', 'LTC', 'USDT'].includes(id.symbol);
          if (isDefault) {
            item.isActive = true;
          }
          return item;
        });
        coinsList.list.length === 0 && dispatch(onUpdateCoinList(prepareCoins));
      });
  }, []);

  return (
    <Container style={style}>
      <Right>{rightComponent}</Right>
      <Center>{centerComponent}</Center>
      <Left>{leftComponent}</Left>
    </Container>
  );
};
const TopNav = memo(TopNavigation);
export { TopNav };
