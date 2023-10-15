import Banner from "@/components/Common/Banner";
import DeleteButton from "@/components/Common/DeleteButton";
import CreateFAQForm from "@/components/Dashboard/CreateFAQ/CreateFAQForm";
import Table from "@/components/Table/Table";
import { getallfaqs } from "@/libs/fetch";
import { Column } from "@/types/global";
import { TableBody, TableCell, TableRow } from "@mui/material";

const columns: readonly Column[] = [
    { label: "Serial" },
    { label: "Question" },
    { label: "Answer" },
    { label: "Edit", align: "right" },
    { label: "Delete", align: "right" },
];

export const metadata = { title: "FAQs" };

export default async function FAQs() {
    const faqs = await getallfaqs();

    return (
        <>
            <Banner>FAQs</Banner>
            <CreateFAQForm />
            <Table columns={columns}>
                <TableBody>
                    {faqs?.data?.map(({ id, serial, question, answer, createdAt }, idx) => (
                        <TableRow key={idx} hover>
                            <TableCell>{serial}</TableCell>
                            <TableCell>{question}</TableCell>
                            <TableCell>{answer}</TableCell>
                            <TableCell align="right">{}</TableCell>
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
