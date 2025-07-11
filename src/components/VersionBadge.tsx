import React, {FC, memo} from "react";
import {useZh} from "../util/use-zh";
import Box from "@mui/material/Box";

export const VersionBadge: FC = memo(() => {
    const zh = useZh();

    return (
        <Box style={{display: 'inline-flex', alignItems: 'center'}}>
            <span>{zh ? "当前版本参考: " : "Current version reference: "}</span>
            <a
                href="http://github.com/babyfish-ct/jimmer/releases"
                target="_blank"
                style={{paddingLeft: 5, display: 'inline-flex', alignItems: 'center'}}
            >
                <img
                    src="https://img.shields.io/maven-central/v/org.babyfish.jimmer/jimmer-core"
                    alt="Maven Central Version"
                />
            </a>
        </Box>
    );
});
