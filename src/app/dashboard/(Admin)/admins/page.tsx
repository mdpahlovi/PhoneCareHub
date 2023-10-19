import { Column } from "@/types/global";
import { getalladmins } from "@/libs/fetch";
import { getServerSession } from "next-auth";
import Table from "@/components/Table/Table";
import Banner from "@/components/Common/Banner";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { TableRow, TableCell, TableBody, Avatar } from "@mui/material";
import ChangePasswordButton from "@/components/Dashboard/Components/ChangePasswordButton";

type SearchParams = { searchParams: { search?: string; page?: string; size?: string } };

export const metadata = { title: "All Admin" };

const columns: readonly Column[] = [
    { label: "Image" },
    { label: "Name" },
    { label: "Email" },
    { label: "Phone", align: "right" },
    { label: "Change Password", align: "right" },
    { label: "Delete", align: "right" },
];

export default async function ManageAdmins({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const search = searchParams?.search ? searchParams.search : "";
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const admins = await getalladmins(session?.token, search, page, size);
    const total = admins?.meta?.total;

    return (
        <>
            <Banner>All Admin</Banner>
            <Table columns={columns} total={total!} page={page} size={size} search={search} label="Admin">
                <TableBody>
                    {admins?.data?.map(({ id, image, name, email, phone }, idx) => (
                        <TableRow key={idx} hover>
                            <TableCell>
                                <Avatar src={image} alt="" />
                            </TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{email}</TableCell>
                            <TableCell align="right">{phone}</TableCell>
                            <TableCell align="right">
                                <ChangePasswordButton id={id} path="admin" />
                            </TableCell>
                            <TableCell align="right">
                                <DeleteButton id={id} path="admin" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
