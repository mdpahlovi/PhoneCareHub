import { Column } from "@/types/global";
import { getClientFaqs } from "@/libs/fetch";
import Table from "@/components/Table/Table";
import Banner from "@/components/Common/Banner";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";
import CreateFAQForm from "@/components/Dashboard/CreateFAQ/CreateFAQForm";

import { Divider, TableBody, TableCell, TableRow } from "@mui/material";

const columns: readonly Column[] = [
    { label: "Serial" },
    { label: "Question" },
    { label: "Answer", align: "right" },
    { label: "Delete", align: "right" },
];

export const metadata = { title: "FAQs" };

export default async function FAQs() {
    const faqs = await getClientFaqs();

    return (
        <>
            <Banner>All FAQ</Banner>
            <CreateFAQForm />
            <Divider sx={{ mb: 3, border: "none" }} />
            <Table columns={columns}>
                <TableBody>
                    {faqs?.data?.map(({ id, serial, question, answer }, idx) => (
                        <TableRow key={idx} hover>
                            <TableCell>{serial}</TableCell>
                            <TableCell>{question}</TableCell>
                            <TableCell align="right">{answer}</TableCell>
                            <TableCell align="right">
                                <DeleteButton id={id} path="faq" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
