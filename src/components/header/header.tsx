import { Link } from "expo-router";
import {
  Container,
  JoinButton,
  JoinText,
  Nav,
  Logo,
  StyledLink,
  StyledLinkText,
  BurgerIconWrapper,
} from "../header/header.styled";
import { Dimensions, ActivityIndicator, Image, Platform } from "react-native";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import logoMobile from "../../assets/images/logo (1).png";
import burgerIcon from "../../assets/images/burger.png";

export function Header() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setScreenWidth(window.width);
    });
    return () => subscription.remove();
  }, []);

  return (
    <Container>
      {!isLoaded && (
        <ActivityIndicator
          size="small"
          color="#b58f6e"
          style={{ marginBottom: 10 }}
        />
      )}
      <Logo
        source={Platform.OS === 'web' ? logo : logoMobile}
        resizeMode="contain"
        onLoadEnd={() => setIsLoaded(true)}
      />

      {Platform.OS !== "web" && (
        <BurgerIconWrapper onPress={() => alert("Open mobile menu")}>
          <Image source={burgerIcon} style={{ width: 24, height: 24 }} />
        </BurgerIconWrapper>
      )}

      <Nav>
        <Link href="./agent-search" asChild>
          <StyledLink screenWidth={screenWidth}>
            <StyledLinkText>Agent Search</StyledLinkText>
          </StyledLink>
        </Link>

        <Link href="./how-it-works" asChild>
          <StyledLink screenWidth={screenWidth}>
            <StyledLinkText>How It Works</StyledLinkText>
          </StyledLink>
        </Link>

        <Link href="./features" asChild>
          <StyledLink screenWidth={screenWidth} isLast>
            <StyledLinkText>Features</StyledLinkText>
          </StyledLink>
        </Link>
      </Nav>

      <JoinButton onPress={() => alert("Join Waitlist!")}>
        <JoinText>Join Waitlist</JoinText>
      </JoinButton>
    </Container>
  );
}
