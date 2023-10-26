import CourierDialog from "./CourierDialog";
import PaymentDialog from "./PaymentDialog";
import ReviewDialog from "./ReviewDialog";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import ChangePasswordDialog from "./ChangePasswordDialog";

export default function DialogProvider() {
    return (
        <>
            <CourierDialog />
            <PaymentDialog />
            <ReviewDialog />
            <ConfirmDeleteDialog />
            <ChangePasswordDialog />
        </>
    );
}
