"use client";

import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useField, useFormikContext } from "formik";
import { TextField, IconButton, Button, Stack } from "@mui/material";

export default function FormMultiInput({ name, label }: { name: string; label: string }) {
    const [{ value }, meta] = useField(name);
    const { setFieldValue } = useFormikContext();
    const [fields, setFields] = useState(value);

    const handleAddField = () => {
        setFields([...fields, ""]);
        setFieldValue(name, [...fields, ""]);
    };

    const handleRemoveField = (index: number) => {
        const filteredFields = fields.filter((_: string, i: number) => i !== index);
        setFields(filteredFields);
        setFieldValue(name, filteredFields);
    };

    return (
        <>
            {fields.length
                ? fields.map((field: string, index: number) => (
                      <Stack key={index} direction="row" alignItems="center" gap={3}>
                          <TextField
                              label={label}
                              value={field}
                              onChange={(e) => {
                                  const updatedFields = [...fields];
                                  updatedFields[index] = e.target.value;
                                  setFields(updatedFields);
                                  setFieldValue(name, updatedFields);
                              }}
                          />
                          <IconButton color="error" onClick={() => handleRemoveField(index)}>
                              <DeleteIcon />
                          </IconButton>
                      </Stack>
                  ))
                : null}
            <Button sx={{ width: "max-content" }} onClick={handleAddField}>
                Add {label} Field
            </Button>
        </>
    );
}
