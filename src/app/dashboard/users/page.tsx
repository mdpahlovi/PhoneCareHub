import { Column } from "@/types/global";
import { getallusers } from "@/libs/fetch";
import { format, parseISO } from "date-fns";
import { getServerSession } from "next-auth";
import Table from "@/components/Table/Table";
import Banner from "@/components/Common/Banner";
import DeleteButton from "@/components/Common/DeleteButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { TableRow, TableCell, TableBody, Avatar } from "@mui/material";

type SearchParams = { searchParams: { page: string | null; size: string | null } };

export const metadata = { title: "All User" };

const columns: readonly Column[] = [
    { label: "Image" },
    { label: "Name" },
    { label: "Email" },
    { label: "BirthDate" },
    { label: "Gender", align: "right" },
    { label: "Phone", align: "right" },
    { label: "Created At", align: "right" },
    { label: "Delete", align: "right" },
];

export default async function ManageUsers({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const users = await getallusers(session?.token, page, size);

    return (
        <>
            <Banner>All User</Banner>
            <Table columns={columns} total={users?.meta?.total!} page={page} size={size}>
                <TableBody>
                    {users?.data?.map(({ id, image, name, email, phone, birthdate, gender, createdAt }, idx) => (
                        <TableRow key={idx} hover>
                            <TableCell>
                                <Avatar src={image} alt="" />
                            </TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{email}</TableCell>
                            <TableCell>{birthdate && format(parseISO(birthdate), "PPP")}</TableCell>
                            <TableCell align="right">{gender}</TableCell>
                            <TableCell align="right">{phone}</TableCell>
                            <TableCell align="right">{format(parseISO(createdAt), "PPPp")}</TableCell>
                            <TableCell align="right">
                                <DeleteButton id={id} path="user" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
