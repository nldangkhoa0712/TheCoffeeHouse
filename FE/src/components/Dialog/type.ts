export interface DialogProps {
    open: boolean,
    component: React.ReactNode,
    title: string,
    onClose: () => void,
}