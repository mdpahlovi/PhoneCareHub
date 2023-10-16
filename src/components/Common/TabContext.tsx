"use client";

import { Box, Tab } from "@mui/material";
import { TabContext as MuiTabs, TabList, TabPanel } from "@mui/lab";
import useCreateQuery from "@/hooks/useCreateQuery";

export default function TabContext({ value, values, tabs }: { value: string; values: string[]; tabs: React.ReactNode[] }) {
    const createQuery = useCreateQuery();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        createQuery("type", newValue);
    };

    return (
        <MuiTabs value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                    {values.map((value, idx) => (
                        <Tab key={idx} label={value.charAt(0).toUpperCase() + value.slice(1)} value={value} />
                    ))}
                </TabList>
            </Box>
            {tabs.map((tab, idx) => (
                <TabPanel key={idx} value={values[idx]}>
                    {tab}
                </TabPanel>
            ))}
        </MuiTabs>
    );
}
