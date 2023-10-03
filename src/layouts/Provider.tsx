import { SessionProvider } from "@/exports";
import ThemeRegistry from "./ThemeRegistry/ThemeRegistry";

export default function Provider({ children }: React.PropsWithChildren) {
    return (
        <SessionProvider>
            <ThemeRegistry>{children}</ThemeRegistry>
        </SessionProvider>
    );
}
