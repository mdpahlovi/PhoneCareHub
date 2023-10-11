import MenuItems from "./MenuItems";
import { MobileMenu } from "@/exports/mui";
import { MenuButton, ModeToggle } from "./Button";
import ThemedLogo from "@/components/Common/ThemedLogo";
import { CollapseMenuItems, StyledMenuBox, StyledMenuItems, StyledNav, StyledNavbar } from "./StyledComponent";

export default function Navbar() {
    return (
        <StyledNav>
            <StyledNavbar>
                <ThemedLogo />
                <StyledMenuBox>
                    <StyledMenuItems>
                        <MenuItems />
                    </StyledMenuItems>
                    <ModeToggle />
                    <MenuButton />
                </StyledMenuBox>
            </StyledNavbar>
            <MobileMenu>
                <CollapseMenuItems>
                    <MenuItems />
                </CollapseMenuItems>
            </MobileMenu>
        </StyledNav>
    );
}
