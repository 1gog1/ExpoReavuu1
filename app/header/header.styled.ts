import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: #ffffff;
`;

export const Logo = styled.Image`
  width: 146px;
  height: 24px;
`;

export const Nav = styled.View`
  flex-direction: row;
  ${Platform.OS === 'web' ? 'gap: 24px;' : ''}
`;

export const NavItem = styled.Text`
  font-size: 16px;
  color: #1c1c1c;
`;

export const JoinButton = styled.TouchableOpacity`
  border: 1px solid #b58f6e;
  padding: 6px 14px;
  border-radius: 8px;
`;

export const JoinText = styled.Text`
  font-size: 16px;
  color: #b58f6e;
`;

export const StyledLink = styled.Text`
  font-size: 16px;
  color: #1c1c1c;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


