import { SessionProvider } from "@/exports";
import ThemeRegistry from "./ThemeRegistry";
import ToastProvider from "./ToastProvider";
import ReviewDialog from "./Dialogs/ReviewDialog";
import CourierDialog from "./Dialogs/CourierDialog";
import ConfirmDeleteDialog from "./Dialogs/ConfirmDeleteDialog";
import ChangePasswordDialog from "./Dialogs/ChangePasswordDialog";

export default function Provider({ children }: React.PropsWithChildren) {
    return (
        <SessionProvider>
            <ThemeRegistry>
                {children}
                <ReviewDialog />
                <ToastProvider />
                <CourierDialog />
                <ConfirmDeleteDialog />
                <ChangePasswordDialog />
            </ThemeRegistry>
        </SessionProvider>
    );
}
