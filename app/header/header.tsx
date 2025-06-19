import { Link } from "expo-router";
import {
  Container,
  JoinButton,
  JoinText,
  Logo,
  Nav,
  StyledLink,
} from "../header/header.styled";

export default function Header() {
  return (
    <Container>
      <Logo
        source={require("../../assets/images/logo.png")}
        resizeMode="contain"
      />

      <Nav>
        <Link href="./agent-search" asChild>
          <StyledLink>Agent Search</StyledLink>
        </Link>
        <Link href="./how-it-works" asChild>
          <StyledLink>How It Works</StyledLink>
        </Link>
        <Link href="./features" asChild>
          <StyledLink>Features</StyledLink>
        </Link>
      </Nav>

      <JoinButton onPress={() => alert("Join Waitlist!")}>
        <JoinText>Join Waitlist</JoinText>
      </JoinButton>
    </Container>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     paddingHorizontal: 24,
//     paddingVertical: 16,
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "#fff",
//   },
//   logo: {
//     width: 146,
//     height: 24,
//   },
//   nav: {
//     flexDirection: "row",
//     gap: 24,
//   },
//   navItem: {
//     fontSize: 16,
//     color: "#1c1c1c",
//   },
//   button: {
//     borderWidth: 1,
//     borderColor: "#b58f6e",
//     paddingHorizontal: 14,
//     paddingVertical: 6,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: "#b58f6e",
//       fontSize: 16,
//     gap: 12,
//   },
// });
