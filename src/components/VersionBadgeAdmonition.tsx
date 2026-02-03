import React, {FC, memo} from "react";
import Admonition from '@theme/Admonition';
import {VersionBadge} from "./VersionBadge";


export const VersionBadgeAdmonition: FC = memo(() => {
    return (
        <Admonition type="info">
            <VersionBadge/>
        </Admonition>
    );
});
