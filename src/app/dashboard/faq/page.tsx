import { getAllFAQ } from "@/libs/fetch";
import Table from "@/components/Table/Table";
import Banner from "@/components/Common/Banner";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";
import CreateFAQForm from "@/components/Dashboard/CreateFAQ/CreateFAQForm";

import { Divider, TableBody, TableCell, TableRow } from "@mui/material";

const columns = ["Serial", "Question", "Answer", "Delete"];

export const metadata = { title: "FAQs" };

export default async function FAQs() {
    const faqs = await getAllFAQ();

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
                            <TableCell sx={{ minWidth: 224 }}>{question}</TableCell>
                            <TableCell align="right" sx={{ minWidth: 560 }}>
                                {answer}
                            </TableCell>
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
