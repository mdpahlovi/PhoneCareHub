import dayjs from "dayjs";
import { getallusers } from "@/libs/fetch";
import { getServerSession } from "next-auth";
import Table from "@/components/Table/Table";
import Banner from "@/components/Common/Banner";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { TableRow, TableCell, TableBody, Avatar } from "@mui/material";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";
import ChangePasswordButton from "@/components/Dashboard/Components/ChangePasswordButton";

type SearchParams = { searchParams: { search?: string; page?: string; size?: string } };

export const metadata = { title: "All User" };

const columns = ["Image", "Name", "Email", "BirthDate", "Gender", "Phone", "Change Password", "Delete"];

export default async function ManageUsers({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const search = searchParams?.search ? searchParams.search : "";
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const users = await getallusers(session?.token, search, page, size);
    const pagination = { total: users?.meta?.total!, size, page };
    const searchProps = { search, label: "User" };

    return (
        <>
            <Banner>All User</Banner>
            <Table columns={columns} pagination={pagination} search={searchProps} create="user">
                <TableBody>
                    {users?.data?.map(({ id, image, name, email, phone, birthdate, gender }, idx) => (
                        <TableRow key={idx} hover>
                            <TableCell>
                                <Avatar src={image} alt="" />
                            </TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{email}</TableCell>
                            <TableCell>{birthdate && dayjs(birthdate).format("MMMM D, YYYY")}</TableCell>
                            <TableCell align="right">{gender}</TableCell>
                            <TableCell align="right">{phone}</TableCell>
                            <TableCell align="right">
                                <ChangePasswordButton id={id} path="user" />
                            </TableCell>
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
