import { getalladmins } from "@/libs/fetch";
import { getServerSession } from "next-auth";
import Table from "@/components/Table/Table";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { TableRow, TableCell, TableBody, Avatar } from "@mui/material";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";
import ChangePasswordButton from "@/components/Dashboard/Components/ChangePasswordButton";

export const metadata = { title: "All Admin" };
export const columns = ["Image", "Name", "Email", "Phone", "Change Password", "Delete"];

export default async function ManageAdmins({ searchParams }: { searchParams: { search?: string; page?: string; size?: string } }) {
    const session = await getServerSession(authOptions);
    const search = searchParams?.search ? searchParams.search : "";
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const admins = await getalladmins(session?.token, search, page, size);

    return (
        <Table columns={columns} pagination={{ total: admins?.meta?.total!, size, page }} search={{ search, label: "Admin" }}>
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
    );
}
