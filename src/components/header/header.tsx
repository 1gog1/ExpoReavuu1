import { isMobileView } from "@/src/helpers/layoutHelper";
import { Link } from "expo-router";
import { useMemo, useState } from "react";
import { ActivityIndicator, Image, Platform } from "react-native";
import burgerIcon from "../../assets/images/burger.png";
import logoMobile from "../../assets/images/logo (1).png";
import logo from "../../assets/images/logo.png";
import {
  BurgerIconWrapper,
  Container,
  JoinButton,
  JoinText,
  Logo,
  Nav,
  StyledLink,
  StyledLinkText,
} from "../header/header.styled";

export function Header() {
  const [isLoaded, setIsLoaded] = useState(false);

  const isNativeMobile = Platform.OS === "ios" || Platform.OS === "android";

  const isMobile = useMemo(() => isMobileView(), []);

  return (
    <Container isMobile={isMobile}>
      {!isLoaded && (
        <ActivityIndicator
          size="small"
          color="#b58f6e"
          style={{ marginBottom: 10 }}
        />
      )}
      <Logo
        source={isMobile ? logoMobile : logo}
        isMobile={isMobile}
        resizeMode="contain"
        onLoadEnd={() => setIsLoaded(true)}
      />

      {isMobile ? (
        <BurgerIconWrapper onPress={() => alert("Open mobile menu")}>
          <Image source={burgerIcon} style={{ width: 24, height: 24 }} />
        </BurgerIconWrapper>
      ) : (
        <Nav>
          <Link href="./agent-search" asChild>
            <StyledLink isMobile={isMobile}>
              <StyledLinkText>Agent Search</StyledLinkText>
            </StyledLink>
          </Link>

          <Link href="./how-it-works" asChild>
            <StyledLink isMobile={isMobile}>
              <StyledLinkText>How It Works</StyledLinkText>
            </StyledLink>
          </Link>

          <Link href="./features" asChild>
            <StyledLink isLast isMobile={isMobile}>
              <StyledLinkText>Features</StyledLinkText>
            </StyledLink>
          </Link>
        </Nav>
      )}

      {!isNativeMobile && (
        <JoinButton isMobile={isMobile} onPress={() => alert("Join Waitlist!")}>
          <JoinText>Join Waitlist</JoinText>
        </JoinButton>
      )}
    </Container>
  );
}
