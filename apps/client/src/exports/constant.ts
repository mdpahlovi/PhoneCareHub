export const threeCol = { xs: 4, sm: 8, md: 12 };

export const borderRounded = { border: 1, borderColor: "divider", borderRadius: 3 };

export const textAreaDisableColor = { "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "#000000" } };

export const review_props = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
};

export const getStatus = (type: "online" | "offline", completed: boolean) => {
    let status;
    switch (type) {
        case "online":
            status = ["pending", "shipping", "receited", "reviewing", "payment", "repairing"];
            if (completed) status = [...status, "returned", "received"];
            break;
        case "offline":
            status = ["pending"];
            if (completed) status = [...status, "completed"];
            break;
    }

    return status;
};
