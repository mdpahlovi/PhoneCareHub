import ThemeRegistry from "./ThemeRegistry/ThemeRegistry";

export default function Provider({ children }: React.PropsWithChildren) {
    return <ThemeRegistry>{children}</ThemeRegistry>;
}
