"use client";

import { Box, Tab } from "@mui/material";
import useCreateQuery from "@/hooks/useCreateQuery";
import firstWordCapital from "@/libs/firstWordCapital";
import { TabContext as MuiTabs, TabList, TabPanel } from "@mui/lab";

type TabContextProps = { query: string; value: string; values: string[]; tabs: React.ReactNode[] };

export default function TabContext({ query, value, values, tabs }: TabContextProps) {
    const createQuery = useCreateQuery();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        createQuery(query, newValue);
    };

    return (
        <MuiTabs value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                    {values.map((value, idx) => (
                        <Tab key={idx} label={firstWordCapital(value)} value={value} />
                    ))}
                </TabList>
            </Box>
            {tabs.map((tab, idx) => (
                <TabPanel key={idx} value={values[idx]} sx={{ px: 0 }}>
                    {tab}
                </TabPanel>
            ))}
        </MuiTabs>
    );
}
