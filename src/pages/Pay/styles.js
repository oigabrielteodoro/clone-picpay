import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
`;
 
export const SearchContainer = styled.View`
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.86);
  width: 340px;
  height: 35px;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  margin-left: 15px;
`;
  
export const SearchInput = styled.TextInput`
  color: #fff;
  font-size: 14px;
  margin-left: 10px;
  width: 340px;
`;

 
