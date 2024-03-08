import React, { CSSProperties, FC, memo, MouseEvent, PropsWithChildren, useCallback, useState } from "react";
import Button  from "@mui/material/Button";
import { ViewDialog } from "./ViewDialog";
import { Breakpoint } from "@mui/material";

export const ViewMore: FC<
    PropsWithChildren<{
        readonly buttonText: string,
        readonly fullScreen?: boolean,
        readonly title?: string,
        readonly variant?: 'text' | 'outlined' | 'contained'
        readonly maxWidth?: Breakpoint,
        readonly useOriginalText?: boolean
    }>
> = memo(({buttonText, fullScreen = false, title = buttonText, variant='outlined', maxWidth, useOriginalText = true, children}) => {
    
    const [open, setOpen] = useState(false);

    const onButtonClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        setOpen(true);
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            (e as any).cancelBubble = true;
        }
    }, []);
    
    const onClose = useCallback(() => {
        setOpen(false);
    }, []);

    const style: CSSProperties = useOriginalText ? { textTransform: 'none' } : {};

    return (
        <>
            <Button data-is-view-more-button="true" onClick={onButtonClick} variant={variant} size="small" style={style}>{buttonText}</Button>
            <ViewDialog open={open} onClose={onClose} title={title} maxWidth={maxWidth} fullScreen={fullScreen}>
                {children}
            </ViewDialog>
        </>
    );
});

