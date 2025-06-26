import { styled } from "styled-components/native";
import { Platform, Pressable } from "react-native";

type StyledLinkProps = {
  screenWidth: number;
  isLast?: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: #ffffff;
  ${Platform.OS === 'web' ? '' : 'padding-top: 40px;'}
`;

export const Logo = styled.Image`
  width: ${Platform.OS === 'web' ? '146px' : '92px'};
  height: ${Platform.OS === 'web' ? '24px' : '16px'};
`;

export const Nav = styled.View`
  flex-direction: row;
${Platform.OS === 'web' ? 'gap: 24px;' : 'display: none;'}  
`;

export const NavItem = styled.Text`
  font-size: 16px;
  color: #1c1c1c;
`;

export const JoinButton = styled.TouchableOpacity`
  border: 1px solid #b58f6e;
  padding: 6px 14px;
  border-radius: 8px;
   ${Platform.OS !== 'web' ? 'display: none;' : ''}
`;

export const JoinText = styled.Text`
  font-size: 16px;
  color: #b58f6e;
`;



export const StyledLink = styled(Pressable)<StyledLinkProps>`
  margin-right: ${({ isLast, screenWidth }) =>
    isLast ? 0 : screenWidth > 768 ? 24 : 12}px;

  justify-content: center;
`;

export const StyledLinkText = styled.Text`
  font-size: 16px;
  color: #1c1c1c;

  ${Platform.OS === "web" && `
    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const BurgerIconWrapper = styled.TouchableOpacity`
  ${Platform.OS === 'web' ? 'display: none;' : ''}
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;




