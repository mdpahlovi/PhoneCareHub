import MenuItems from "./MenuItems";
import { MenuButton, ModeToggle } from "./Button";
import { MobileMenu, ThemedLogo } from "@/exports/mui";
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
