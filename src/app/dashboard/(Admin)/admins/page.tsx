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

const columns = ["Image", "Name", "Email", "Phone", "Change Password", "Delete"];

export default async function ManageAdmins({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const search = searchParams?.search ? searchParams.search : "";
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const admins = await getalladmins(session?.token, search, page, size);
    const pagination = { total: admins?.meta?.total!, size, page };
    const searchProps = { search, label: "Admin" };

    return (
        <>
            <Banner>All Admin</Banner>
            <Table columns={columns} pagination={pagination} search={searchProps}>
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
