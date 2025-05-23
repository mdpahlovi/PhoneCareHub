import ChangePasswordButton from "@/components/Dashboard/Components/ChangePasswordButton";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";
import Table from "@/components/Table/Table";
import prisma from "@/libs/prisma";
import { searchQuery } from "@/libs/searchQuery";
import { Avatar, TableBody, TableCell, TableRow } from "@mui/material";
import { Prisma } from "@prisma/client";

export const metadata = { title: "All Admin" };
const columns = ["Image", "Name", "Email", "Phone", "Change Password", "Delete"];
type PageProps = { searchParams: Promise<{ search?: string; page?: string; size?: string }> };

export default async function ManageAdmins(props: PageProps) {
    const searchParams = await props.searchParams;

    const search = searchParams?.search ? searchParams.search : "";
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const size = Number(searchParams?.size ? searchParams.size : 5);

    const andConditions = [];
    if (search) andConditions.push(searchQuery(search, ["name", "email"]));
    const where: Prisma.AdminWhereInput = { AND: andConditions };

    const admins = await prisma.admin.findMany({ where, skip: size * page, take: size, orderBy: { createdAt: "desc" } });
    const total = await prisma.admin.count({ where });

    return (
        <Table columns={columns} pagination={{ total, size, page }} search={{ search, label: "Admin" }}>
            <TableBody>
                {admins.map(({ id, image, name, email, phone }, idx) => (
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
