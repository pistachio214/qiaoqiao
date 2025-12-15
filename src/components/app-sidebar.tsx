import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar() {
    return (
        <Sidebar className={'bg-(--color-page) border border-blue-500'}>
            {/* <SidebarHeader children={<>侧边栏</>}/> */}
            <SidebarContent className="bg-(--color-page)">
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            {/* <SidebarFooter children={<>底部栏 Footer</>} /> */}
        </Sidebar>
    )
}