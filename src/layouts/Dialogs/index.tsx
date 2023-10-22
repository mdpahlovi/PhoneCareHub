import PaymentDialog from "./PaymentDialog";
import ReviewDialog from "./CreateReviewDialog";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import ChangePasswordDialog from "./ChangePasswordDialog";

export default function DialogProvider() {
    return (
        <>
            <PaymentDialog />
            <ReviewDialog />
            <ConfirmDeleteDialog />
            <ChangePasswordDialog />
        </>
    );
}
