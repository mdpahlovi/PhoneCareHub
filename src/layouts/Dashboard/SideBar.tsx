"use client";

import { ProfileCard } from "./Client";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/Inbox";
import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";

export default function SideBar() {
    return (
        <Stack minHeight="100vh" display="flex" direction="column" justifyContent="space-between" pt={3}>
            <div>
                <ProfileCard />
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </div>

            <div>
                <Divider />
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </div>
        </Stack>
    );
}
