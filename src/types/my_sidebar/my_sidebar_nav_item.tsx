import { ReactElement } from "react";

export interface NavItem {
    title: string;
    icon: JSX.Element;
    isActive?: boolean;
    items: ReactElement;
}
