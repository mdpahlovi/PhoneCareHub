"use client";

import { BallTriangle } from "react-loader-spinner";

export default function PageLoader() {
    return (
        <div style={{ height: "calc(100vh - 14rem)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <BallTriangle height={144} width={144} radius={4} color="#4E73B7" visible={true} />
        </div>
    );
}
