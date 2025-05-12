import ChangePasswordButton from "@/components/Dashboard/Components/ChangePasswordButton";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";
import Table from "@/components/Table/Table";
import prisma from "@/libs/prisma";
import { searchQuery } from "@/libs/searchQuery";
import { Avatar, TableBody, TableCell, TableRow } from "@mui/material";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";

export const metadata = { title: "All User" };
const columns = ["Image", "Name", "Email", "BirthDate", "Gender", "Phone", "Change Password", "Delete"];
type PageProps = Promise<{ searchParams: { search?: string; page?: string; size?: string } }>;

export default async function ManageUsers(props: PageProps) {
    const { searchParams } = await props;
    const search = searchParams?.search ? searchParams.search : "";
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const size = Number(searchParams?.size ? searchParams.size : 5);

    const andConditions = [];
    if (search) andConditions.push(searchQuery(search, ["name", "email"]));
    const where: Prisma.UserWhereInput = { AND: andConditions };

    const users = await prisma.user.findMany({ where, skip: size * page, take: size, orderBy: { createdAt: "desc" } });
    const total = await prisma.user.count({ where });

    return (
        <Table columns={columns} pagination={{ total, size, page }} search={{ search, label: "User" }}>
            <TableBody>
                {users.map(({ id, image, name, email, phone, birthdate, gender }, idx) => (
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
    );
}
