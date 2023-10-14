import { Column } from "@/types/global";
import { getalladmins } from "@/libs/fetch";
import { format, parseISO } from "date-fns";
import { getServerSession } from "next-auth";
import Table from "@/components/Table/Table";
import Banner from "@/components/Common/Banner";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { TableRow, TableCell, TableBody, Avatar } from "@mui/material";

type SearchParams = { searchParams: { page: string | null; size: string | null } };

export const metadata = { title: "All Admin" };

export default async function ManageAdmins({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const admins = await getalladmins(session?.token, page, size);

    const rows = admins.data?.map(({ id, role, image, ...row }) => ({ image, ...row }));
    const columns: readonly Column[] = [
        { label: "Image" },
        { label: "Name", minWidth: 120 },
        { label: "Email", minWidth: 240 },
        { label: "Phone", minWidth: 170, align: "right" },
        { label: "Created At", minWidth: 170, align: "right" },
    ];

    return (
        <>
            <Banner>All Admins</Banner>
            <Table columns={columns} total={admins?.meta?.total!} page={page} size={size}>
                <TableBody>
                    {rows?.map(({ image, name, email, phone, createdAt }, idx) => (
                        <TableRow key={idx} hover>
                            <TableCell>
                                <Avatar src={image} alt="" />
                            </TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{email}</TableCell>
                            <TableCell align="right">{phone}</TableCell>
                            <TableCell align="right">{format(parseISO(createdAt), "PPPp")}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
