import { useState } from "react";

export function useMySidebar() {
    const [open, setOpen] = useState(true);
    return {
        open,
        setOpen,
    };
}
