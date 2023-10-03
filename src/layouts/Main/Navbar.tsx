import MenuItems from "./MenuItems";
import { MobileMenu } from "@/exports/mui";
import { MenuButton, ThemedLogo } from "./Button";
import { CollapseMenuItems, StyledMenuBox, StyledMenuItems, StyledNav, StyledNavbar } from "./StyledComponent";

export default function Navbar() {
    return (
        <StyledNav>
            <StyledNavbar>
                <ThemedLogo />
                <StyledMenuBox>
                    <MenuButton />
                    <StyledMenuItems>
                        <MenuItems />
                    </StyledMenuItems>
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
