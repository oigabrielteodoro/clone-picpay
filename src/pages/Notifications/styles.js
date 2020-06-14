import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.FlatList.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  padding: 0 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Notification = styled.TouchableOpacity`
  background: #1e222b;
  padding: 16px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const NotificationLabel = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const NotificationDate = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  margin-top: 5px;
  font-size: 12px;
`;
