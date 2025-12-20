import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between py-3">
          <Logo />
          <HeaderMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
