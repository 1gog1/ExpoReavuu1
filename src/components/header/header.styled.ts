import { Platform, Pressable } from "react-native";
import { styled } from "styled-components/native";

type StyledLinkProps = {
  isLast?: boolean;
  isMobile: boolean;
};

type SharedProps = {
  isMobile: boolean;
};

export const Container = styled.View<SharedProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ isMobile }) => (isMobile ? "12px 16px" : "16px 24px")};
  background-color: #ffffff;
  ${Platform.OS !== "web" ? "padding-top: 40px;" : ""}
`;

export const Logo = styled.Image<SharedProps>`
  width: ${({ isMobile }) => (isMobile ? "92px" : "146px")};
  height: ${({ isMobile }) => (isMobile ? "16px" : "24px")};
`;

export const Nav = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const NavItem = styled.Text`
  font-size: 16px;
  color: #1c1c1c;
`;

export const JoinButton = styled.TouchableOpacity<SharedProps>`
  border: 1px solid #b58f6e;
  padding: 6px 14px;
  border-radius: 8px;
  ${({ isMobile }) => (isMobile ? "display: none;" : "")}
`;

export const JoinText = styled.Text`
  font-size: 16px;
  color: #b58f6e;
`;

export const StyledLink = styled(Pressable)<StyledLinkProps>`
  margin-right: ${({ isLast, isMobile }) => {
    return isLast ? "0" : isMobile ? "24" : "12px";
  }};

  justify-content: center;
`;

export const StyledLinkText = styled.Text`
  font-size: 16px;
  color: #1c1c1c;

  ${Platform.OS === "web" &&
  `
    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const BurgerIconWrapper = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;
