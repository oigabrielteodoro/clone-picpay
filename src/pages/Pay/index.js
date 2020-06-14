import React, { useState } from 'react';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import { 
  Wrapper, 
  Container, 
  Header, 
  SearchContainer, 
  SearchInput,
  TabContainer,
  TabItem,
  TabLabel,
} from './styles';

import Services from '../../components/Services';
import Suggestions from '../../components/Suggestions';

const tabs = [
  {
    key: String(Math.random()),
    label: 'Principais',
  },
  {
    key: String(Math.random()),
    label: 'Locais',
  },
  {
    key: String(Math.random()),
    label: 'Store',
  },
]

export default function Pay() {
  const [search, setSearch] = useState('');
  const [currentTab, setCurrentTab] = useState('Principais');

  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

          <SearchContainer>
            <Feather name="search" size={18} color="rgba(255, 255, 255, 0.8)" />

            <SearchInput 
              placeholder="Quem você quer pagar?" 
              placeholderTextColor="rgba(255, 255, 255, 0.8)" 
              onChangeText={value => setSearch(value)}
              value={search}
            />
          </SearchContainer>
        </Header>

        <Suggestions />

        <Services />
      </Container>
    </Wrapper>
  );
};