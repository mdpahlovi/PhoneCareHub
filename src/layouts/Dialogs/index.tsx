import CourierDialog from "./CourierDialog";
import PaymentDialog from "./PaymentDialog";
import CreateReviewDialog from "./CreateReviewDialog";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import ChangePasswordDialog from "./ChangePasswordDialog";

export default function DialogProvider() {
    return (
        <>
            <CourierDialog />
            <PaymentDialog />
            <CreateReviewDialog />
            <ConfirmDeleteDialog />
            <ChangePasswordDialog />
        </>
    );
}
