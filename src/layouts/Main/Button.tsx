import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useStateStore from "@/hooks/useStateStore";

export function MenuButton() {
    const { toggleMenu, setToggleMenu } = useStateStore();

    const StyledIconButton = styled(IconButton)(({ theme }) => ({
        display: "none",
        cursor: "pointer",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            display: "flex",
        },
    }));

    return <StyledIconButton onClick={setToggleMenu}>{toggleMenu ? <CloseIcon /> : <MenuIcon />}</StyledIconButton>;
}
