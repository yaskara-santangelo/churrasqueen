import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";

export function EventCardAction() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <Button variant='ghost' size='icon' className="h-7 w-7 text-white/70 hover:text-white hover:bg-white/10">
                    <MoreHorizontal className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}