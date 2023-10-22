import Table from "@/components/Table/Table";
import getDateRange from "@/libs/getDateRange";
import { OnlineAppointmentTableProps } from "@/types/global";
import Status from "@/components/Dashboard/Components/Status";
import { TableBody, TableCell, TableRow } from "@mui/material";
import PaymentButton from "@/components/Dashboard/Components/PaymentButton";
import DetailButton from "@/components/Dashboard/Components/DetailButton";

const columns = ["Service Name", "Device Info", "Issue Details", "Status", "Delivery", "See Details"];

export default function AllAppointmentTable({ appointment, pagination }: OnlineAppointmentTableProps) {
    return (
        <Table columns={columns} pagination={pagination}>
            <TableBody>
                {appointment?.map(({ id, service, deviceInfo, issueDescription, status, paymentAmount, deliveryDate }, idx) => (
                    <TableRow key={idx} hover>
                        <TableCell>{service.name}</TableCell>
                        <TableCell>{deviceInfo}</TableCell>
                        <TableCell>{issueDescription}</TableCell>
                        <TableCell align="right">
                            <Status status={status} />
                        </TableCell>
                        <TableCell align="right">
                            {status === "servicing" ? (
                                getDateRange(deliveryDate)
                            ) : (
                                <PaymentButton onlineAppointmentId={id} amount={paymentAmount} status={status} />
                            )}
                        </TableCell>
                        <TableCell align="right">
                            <DetailButton label="See Details" href={`/appointment/${id}`} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
