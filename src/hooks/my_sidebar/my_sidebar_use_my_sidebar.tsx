import { useState } from "react";

export function useMySidebar() {
    const [open, setOpen] = useState(false);
    return {
        open,
        setOpen,
    };
}
