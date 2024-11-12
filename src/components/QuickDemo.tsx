import React, { CSSProperties, FC, PropsWithChildren, ReactNode, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useZh } from "../util/use-zh";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import CodeBlock from "@theme/CodeBlock"
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Admonition from "@theme/Admonition";
import { ViewMore } from "./ViewMore";

export const QuickDemo: FC = memo(() => {

    const isZh = useZh();

    const [hoverId, setHoverId] = useState<string | undefined>();
    const onHoverIdChange = useCallback((value: string) => {
        setHoverId(value);
    }, []);
    const [activeId, setActiveId] = useState<string>();
    const onActiveIdChange = useCallback((value: string | undefined) => {
        setActiveId(value);
    }, []);
    const bindProps: BindProps = {
        hoverId,
        onHoverIdChange,
        activeId,
        onActiveIdChange    
    };
    useEffect(() => {
        const onBodyClickCapture = () => {
            setActiveId(undefined);
        };
        document.body.addEventListener("click", onBodyClickCapture, true);
        return () => {
            document.body.removeEventListener("click", onBodyClickCapture, true);
        }
    }, []);

    const matches = useMediaQuery('(min-width:1024px)');
    if (!matches) {
        return (
            <Grid container>
                <Grid item xs={12} style={TITLE}>
                    <h2>{isZh ? "用法1. 查询实体" : "Usage1. Query Entities"}</h2>
                </Grid>
                <Grid item xs={12} style={CELL}>
                    <EntityQuery {...bindProps}/>
                </Grid>
                <Grid item xs={12} style={CELL}>
                    <EntityResult {...bindProps}/>
                </Grid>
                <Grid item xs={12} style={TITLE}>
                    <h2>{isZh ? "用法2. 查询DTO" : "Usage2. Query DTOs"}</h2>
                </Grid>
                <Grid item xs={12} style={CELL}>
                    <DtoQuery {...bindProps}/>
                </Grid>
                <Grid item xs={12} style={CELL}>
                    <DtoResult {...bindProps}/>
                </Grid>
            </Grid>
        );
    }
    return (
        <Grid container>
            <Grid item xs={6} style={TITLE}>
                <h2>{isZh ? "用法1. 查询实体" : "Usage1. Query Entities"}</h2>
            </Grid>
            <Grid item xs={6} style={{...TITLE, borderLeft: "solid 1px white"}}>
                <h2>{isZh ? "用法2. 查询DTO" : "Usage2. Query DTOs"}</h2>
            </Grid>
            <Grid item xs={6} style={{...CELL, borderBottom: "dotted 1px gray"}}>
                <EntityQuery {...bindProps}/>
            </Grid>
            <Grid item xs={6} style={{...CELL, borderLeft: "solid 1px black", borderBottom: "dotted 1px gray"}}>
                <DtoQuery {...bindProps}/>
            </Grid>
            <Grid item xs={6} style={CELL}>
                <EntityResult {...bindProps}/>
            </Grid>
            <Grid item xs={6} style={{...CELL, borderLeft: "solid 1px black"}}>
                <DtoResult {...bindProps}/>
            </Grid>
        </Grid>
    );
});

const EntityQuery: FC<BindProps> = bindProps => {
    const isZh = useZh();
    const fetchByShape = useMemo(() => {
        return isZh ? "按指定的形状查询实体" : "Query entities by specified shape";
    }, [isZh]);
    const allScalarTooltip = useMemo(() => {
        return (
            <div>
                {isZh ? "`Book`的所有标量属性" : "All scalar properties of `Book`"}
                <ul>
                    <li>`Book.id`</li>
                    <li>`Book.name`</li>
                    <li>`Book.edition`</li>
                    <li>`Book.price`</li>
                </ul>
            </div>
        );
    }, [isZh]);

    return (
        <>
            <div><h3>{isZh ? "查询代码" : "Query Code"}</h3></div>
            <Tabs groupId="quckdemo-language">
                <TabItem value="java" label="Java">
                    <div style={CODE}>
                        <Line><Type>BookTable</Type> <Value>table</Value><Op> = </Op><Type>BookTable</Type><Dot/>$;<Comment>Or `Tables.BOOK_TABLE`</Comment></Line>
                        <Line>&nbsp;</Line>
                        <Line><Type>List</Type><Op>&lt;</Op><Type>Book</Type><Op>&gt;</Op> <Value>books</Value><Op> = </Op><Value>sqlClient</Value></Line>
                        <Line mouseId='createQuery' {...bindProps} indent={1}><Dot/>createQuery<Op>(</Op><Value>table</Value><Op>)</Op></Line>
                        <Line mouseId='where' {...bindProps} indent={1}><Dot/>where<Op>(</Op><Value>table</Value><Dot/>name<Op>().</Op>eq<Op>(</Op><Literal>"Learning GraphQL"</Literal><Op>)</Op><Op>)</Op></Line>
                        <Line mouseId='select' {...bindProps} indent={1}><Dot/>select<Op>(</Op></Line>
                        <Line mouseId='fetcher' {...bindProps} indent={2} tooltip={fetchByShape}><Value>table</Value><Dot/>fetch<Op>(</Op></Line>
                        <Line {...bindProps} indent={3}><Type>BookFetcher</Type><Dot/>$<Comment>Or `Fetchers.BOOK_FETCHER`</Comment></Line>
                        <Line mouseId='allScalars' {...bindProps} indent={4} tooltip={allScalarTooltip}><Dot/>allScalarFields<Op>()</Op></Line>
                        <Line mouseId='Book.store' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Book.store', 'MANY-TO-ONE', true)}><Dot/>store<Op>(</Op></Line>
                        <Line {...bindProps} indent={5}><Type>BookStoreFetcher</Type><Dot/>$<Comment>Or `Fetchers.BOOK_STORE_FETCHER`</Comment></Line>
                        <Line mouseId='BookStore.name' {...bindProps} indent={6} tooltip={tooltip(isZh, 'BookStore.name')}><Dot/>name<Op>()</Op></Line>
                        <Line {...bindProps} indent={4}><Op>)</Op></Line>
                        <Line mouseId='Book.authors' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Book.authors', 'MANY-TO-MANY', true)}><Dot/>authors<Op>(</Op></Line>
                        <Line {...bindProps} indent={5}><Type>AuthorFetcher</Type><Dot/>$<Comment>Or `Fetchers.AUTHOR_FETCHER`</Comment></Line>
                        <Line mouseId='Author.firstName' {...bindProps} indent={6} tooltip={tooltip(isZh, 'Author.firstName')}><Dot/>firstName<Op>()</Op></Line>
                        <Line mouseId='Author.lastName' {...bindProps} indent={6} tooltip={tooltip(isZh, 'Author.lastName')}><Dot/>lastName<Op>()</Op></Line>
                        <Line {...bindProps} indent={4}><Op>)</Op></Line>
                        <Line {...bindProps} indent={2}><Op>)</Op></Line>
                        <Line {...bindProps} indent={1}><Op>)</Op></Line>
                        <Line mouseId='execute' {...bindProps} indent={1}><Dot/>execute<Op>()</Op>;</Line>
                    </div>
                </TabItem>
                <TabItem value="kotlin" label="Kotlin">
                    <div style={CODE}>
                        <Line><Keyword>val </Keyword><Value>books</Value><Op> = </Op><Value>sqlClient</Value></Line>
                        <Line mouseId='createQuery' {...bindProps} indent={1}><Dot/>createQuery<Op>(</Op><Type>Book</Type><Op>::</Op><Keyword>class</Keyword><Op>) &#123;</Op></Line>
                        <Line mouseId='where' {...bindProps} indent={2}>where<Op>(</Op><Value>table</Value><Dot/>name eq <Literal>"Learning GraphQL"</Literal><Op>)</Op></Line>
                        <Line mouseId='select' {...bindProps} indent={2}>select<Op>(</Op></Line>
                        <Line mouseId='fetcher' {...bindProps} indent={3} tooltip={fetchByShape}><Value>table</Value><Dot/>fetchBy<Op>&#123;</Op></Line>
                        <Line mouseId='allScalars' {...bindProps} indent={4} tooltip={allScalarTooltip}>allScalarFields<Op>()</Op></Line>
                        <Line mouseId='Book.store' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Book.store', 'MANY-TO-ONE', true)}>store <Op>&#123;</Op></Line>
                        <Line mouseId='BookStore.name' {...bindProps} indent={5} tooltip={tooltip(isZh, 'BookStore.name')}>name<Op>()</Op></Line>
                        <Line {...bindProps} indent={4}><Op>&#125;</Op></Line>
                        <Line mouseId='Book.authors' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Book.authors', 'MANY-TO-MANY', true)}>authors <Op>&#123;</Op></Line>
                        <Line mouseId='Author.firstName' {...bindProps} indent={5} tooltip={tooltip(isZh, 'Author.firstName')}>firstName<Op>()</Op></Line>
                        <Line mouseId='Author.lastName' {...bindProps} indent={5} tooltip={tooltip(isZh, 'Author.lastName')}>lastName<Op>()</Op></Line>
                        <Line {...bindProps} indent={4}><Op>&#125;</Op></Line>
                        <Line {...bindProps} indent={3}><Op>&#125;</Op></Line>
                        <Line {...bindProps} indent={2}><Op>)</Op></Line>
                        <Line {...bindProps} indent={1}><Op>&#125;</Op></Line>
                        <Line mouseId='execute' {...bindProps} indent={1}><Dot/>execute<Op>()</Op></Line>
                    </div>
                </TabItem>
            </Tabs>
        </>
    );
};

const DtoQuery: FC<BindProps> = bindProps => {
    
    const isZh = useZh();
    const fetchByType = useMemo(() => {
        return isZh ? "按指定的类型查询DTO" : "Query DTOs by specified type"
    }, [isZh]);
    const allScalarTooltip = useMemo(() => {
        return (
            <div>
                {isZh ? "`Book`的所有标量属性" : "All scalar properties of `Book`"}
                <ul>
                    <li>`Book.id`</li>
                    <li>`Book.name`</li>
                    <li>`Book.edition`</li>
                    <li>`Book.price`</li>
                </ul>
            </div>
        );
    }, [isZh]);

    return (
        <>
            <div><h3>{isZh ? "DTO代码" : "DTO Code"}</h3></div>
            <div style={CODE}>
                <Line><Keyword>export </Keyword>com<Dot/>yourcompany<Dot/>yourpackage<Dot/>Book</Line>
                <Line {...bindProps} indent={1}><Op>-&gt; </Op><Keyword>package </Keyword>com<Dot/>yourcompany<Dot/>yourpackage<Dot/>dto</Line>
                <Line>&nbsp;</Line>
                <Line mouseId='fetcher' {...bindProps} tooltip={isZh ? "DTO定义形状" : "DTO defines shape"}><Type>BookDetailView</Type><Op> &#123;</Op></Line>
                <Line mouseId='allScalars' {...bindProps} indent={1} tooltip={allScalarTooltip}><Op>#</Op>allScalars</Line>
                <Line mouseId='Book.store' {...bindProps} indent={1} tooltip={tooltip(isZh, 'Book.store', 'MANY-TO-ONE')}>store<Op> &#123;</Op></Line>
                <Line mouseId='BookStore.id' {...bindProps} indent={2} tooltip={tooltip(isZh, 'BookStore.id')}>id</Line>
                <Line mouseId='BookStore.name' {...bindProps} indent={2} tooltip={tooltip(isZh, 'BookStore.name')}>name</Line>
                <Line {...bindProps} indent={1}><Op> &#125;</Op></Line>
                <Line mouseId='Book.authors' {...bindProps} indent={1} tooltip={tooltip(isZh, 'Book.authors', 'MANY-TO-MANY')}>authors<Op> &#123;</Op></Line>
                <Line mouseId='Author.id' {...bindProps} indent={2} tooltip={tooltip(isZh, 'Author.id')}>id</Line>
                <Line mouseId='Author.firstName' {...bindProps} indent={2} tooltip={tooltip(isZh, 'Author.firstName')}>firstName</Line>
                <Line mouseId='Author.lastName' {...bindProps} indent={2} tooltip={tooltip(isZh, 'Author.lastName')}>lastName</Line>
                <Line indent={1}><Op> &#125;</Op></Line>
                <Line>&#125;</Line>
            </div>
            {
                isZh && <Admonition type="info">
                    编译后，自动生成Java/Kotlin类型 <ViewMore buttonText="BookDetailView" title="自动生成的类型`BookDetailView`"><GeneratedDtoType/></ViewMore>
                </Admonition>
            }
            {
                !isZh && <Admonition type="info">
                    After compilation, A new java/kotlin type <ViewMore buttonText="BookDetailView" title="Generated type `BookDetailView`"><GeneratedDtoType/></ViewMore> will be automatically generated.
                </Admonition>
            }
            <div>&nbsp;</div>
            <div><h3>{isZh ? "查询代码" : "Query Code"}</h3></div>
            <Tabs groupId="quckdemo-language">
                <TabItem value="java" label="Java">
                    <div style={CODE}>
                        <Line><Type>BookTable</Type> <Value>table</Value><Op> = </Op><Type>BookTable</Type><Dot/>$;<Comment>Or `Tables.BOOK`</Comment></Line>
                        <Line>&nbsp;</Line>
                        <Line><Type>List</Type><Op>&lt;</Op><Type>BookDetailView</Type><Op>&gt;</Op> <Value>books</Value><Op> = </Op><Value>sqlClient</Value></Line>
                        <Line mouseId='createQuery' {...bindProps} indent={1}><Dot/>createQuery<Op>(</Op><Value>table</Value><Op>)</Op></Line>
                        <Line mouseId='where' {...bindProps} indent={1}><Dot/>where<Op>(</Op><Value>table</Value><Dot/>name<Op>().</Op>eq<Op>(</Op><Literal>"Learning GraphQL"</Literal><Op>)</Op><Op>)</Op></Line>
                        <Line mouseId='select' {...bindProps} indent={1}><Dot/>select<Op>(</Op></Line>
                        <Line mouseId='fetcher' {...bindProps} indent={2} tooltip={fetchByType}><Value>table</Value><Dot/>fetch<Op>(</Op><Type>BookDetailView</Type><Dot/><Keyword>class</Keyword><Op>)</Op></Line>
                        <Line indent={1}><Op>)</Op></Line>
                        <Line mouseId='execute' {...bindProps} indent={1}><Dot/>execute<Op>()</Op>;</Line>
                    </div>
                </TabItem>
                <TabItem value="kotlin" label="Kotlin">
                    <div style={CODE}>
                        <Line><Keyword>val </Keyword><Value>books</Value><Op> = </Op><Value>sqlClient</Value></Line>
                        <Line mouseId='createQuery' {...bindProps} indent={1}><Dot/>createQuery<Op>(</Op><Type>Book</Type><Op>::</Op><Keyword>class</Keyword><Op>) &#123;</Op></Line>
                        <Line mouseId='where' {...bindProps} indent={2}>where<Op>(</Op><Value>table</Value><Dot/>name eq <Literal>"Learning GraphQL"</Literal><Op>)</Op></Line>
                        <Line mouseId='select' {...bindProps} indent={2}>select<Op>(</Op></Line>
                        <Line mouseId='fetcher' {...bindProps} indent={3} tooltip={fetchByType}><Value>table</Value><Dot/>fetch<Op>(</Op><Type>BookDetailView</Type><Op>::</Op><Keyword>class</Keyword><Op>)</Op></Line>
                        <Line indent={2}><Op>)</Op></Line>
                        <Line {...bindProps} indent={1}><Op>&#125;</Op></Line>
                        <Line mouseId='execute' {...bindProps} indent={1}><Dot/>execute<Op>()</Op></Line>
                    </div>
                </TabItem>
            </Tabs>
        </>
    );
};

const EntityResult: FC<BindProps> = bindProps => {
    const isZh = useZh();
    return (
        <>
        <h2>{isZh ? "查询到的实体" : "Entities that was queried"}</h2>
            <div style={CODE}>
                <Line><Op>[</Op></Line>
                <Line {...bindProps} indent={1}><Op>&#123;</Op></Line>
                <Line mouseId='Book.id' {...bindProps} indent={2} tooltip={tooltip(isZh, 'Book.id')}><EntityProp prop="id"/><Literal>1</Literal><Comma/></Line>
                <Line mouseId='Book.name' {...bindProps} indent={2} tooltip={tooltip(isZh, 'Book.name')}><EntityProp prop="name"/><Literal>"Learning GraphQL"</Literal><Comma/></Line>
                <Line mouseId='Book.edition' {...bindProps} indent={2} tooltip={tooltip(isZh, 'Book.edition')}><EntityProp prop="edition"/><Literal>1</Literal><Comma/></Line>
                <Line mouseId='Book.price' {...bindProps} indent={2} tooltip={tooltip(isZh, 'Book.price')}><EntityProp prop="price"/><Literal>50</Literal><Comma/></Line>
                <Line mouseId='Book.store' {...bindProps} indent={2} tooltip={tooltip(isZh, 'Book.store', 'MANY-TO-ONE')}><EntityProp prop="store"/><Op>&#123;</Op></Line>
                <Line mouseId='BookStore.id' {...bindProps} indent={3} tooltip={tooltip(isZh, 'BookStore.id')}><EntityProp prop="id"/><Literal>1</Literal><Comma/></Line>
                <Line mouseId='BookStore.name' {...bindProps} indent={3} tooltip={tooltip(isZh, 'BookStore.name')}><EntityProp prop="name"/><Literal>"O'REILLY"</Literal></Line>
                <Line {...bindProps} indent={2}><Op>&#125;</Op><Comma/></Line>
                <Line mouseId='Book.authors' {...bindProps} indent={2} tooltip={tooltip(isZh, 'Book.authors', 'MANY-TO-MANY')}><EntityProp prop="authors"/><Op>[</Op></Line>
                <Line {...bindProps} indent={3}><Op>&#123;</Op></Line>
                <Line mouseId='Author.id#1' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Author.id')}><EntityProp prop="id"/><Literal>2</Literal><Comma/></Line>
                <Line mouseId='Author.firstName#1' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Author.firstName')}><EntityProp prop="firstName"/><Literal>"Alex"</Literal></Line>
                <Line mouseId='Author.lastName#1' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Author.lastName')}><EntityProp prop="lastName"/><Literal>"Banks"</Literal></Line>
                <Line {...bindProps} indent={3}><Op>&#125;</Op><Comma/></Line>
                <Line {...bindProps} indent={3}><Op>&#123;</Op></Line>
                <Line mouseId='Author.id#2' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Author.id')}><EntityProp prop="id"/><Literal>1</Literal><Comma/></Line>
                <Line mouseId='Author.firstName#2' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Author.firstName')}><EntityProp prop="firstName"/><Literal>"Eve"</Literal></Line>
                <Line mouseId='Author.lastName#2' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Author.lastName')}><EntityProp prop="lastName"/><Literal>"Procello"</Literal></Line>
                <Line {...bindProps} indent={3}><Op>&#125;</Op></Line>
                <Line {...bindProps} indent={2}><Op>]</Op></Line>
                <Line {...bindProps} indent={1}><Op>&#125;,</Op></Line>
                <Line {...bindProps} indent={1}><span style={OMITTED}>{isZh ? "...省略更多数据..." : "...Omit more data..."}</span></Line>
                <Line><Op>]</Op></Line>
            </div>
        </>
    );
};

const DtoResult: FC<BindProps> = bindProps => {
    const isZh = useZh();
    return (
        <>
            <h2>{isZh ? "查询到的DTO" : "DTOs that was queried"}</h2>
            <div style={CODE}>
                <Line><Op>[</Op></Line>
                <Line {...bindProps} indent={1}><Type>BookDetailView</Type><Op>(</Op></Line>
                <Line mouseId='Book.id' {...bindProps} indent={2} tooltip={tooltip(isZh, 'Book.id')}><DtoProp prop="id"/><Literal>1</Literal><Comma/></Line>
                <Line mouseId='Book.name' {...bindProps} indent={2} tooltip={tooltip(isZh, 'Book.name')}><DtoProp prop="name"/><Literal>Learning GraphQL</Literal><Comma/></Line>
                <Line mouseId='Book.edition' {...bindProps} indent={2} tooltip={tooltip(isZh, 'Book.edition')}><DtoProp prop="edition"/><Literal>1</Literal><Comma/></Line>
                <Line mouseId='Book.price' {...bindProps} indent={2} tooltip={tooltip(isZh, 'Book.price')}><DtoProp prop="price"/><Literal>50</Literal><Comma/></Line>
                <Line mouseId='Book.store' {...bindProps} indent={2} tooltip={tooltip(isZh, 'Book.store', 'MANY-TO-ONE')}><DtoProp prop="store"/><Type>BookDetailView.TargetOf_store</Type><Op>(</Op></Line>
                <Line mouseId='BookStore.id' {...bindProps} indent={3} tooltip={tooltip(isZh, 'BookStore.id')}><DtoProp prop="id"/><Literal>1</Literal><Comma/></Line>
                <Line mouseId='BookStore.name' {...bindProps} indent={3} tooltip={tooltip(isZh, 'BookStore.name')}><DtoProp prop="name"/><Literal>O'REILLY</Literal></Line>
                <Line {...bindProps} indent={2}><Op>)</Op><Comma/></Line>
                <Line mouseId='Book.authors' {...bindProps} indent={2} tooltip={tooltip(isZh, 'Book.authors', 'MANY-TO-MANY')}><DtoProp prop="authors"/><Op>[</Op></Line>
                <Line {...bindProps} indent={3}><Type>BookDetailView.TargetOf_authors</Type><Op>(</Op></Line>
                <Line mouseId='Author.id#1' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Author.id')}><DtoProp prop="id"/><Literal>2</Literal><Comma/></Line>
                <Line mouseId='Author.firstName#1' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Author.firstName')}><DtoProp prop="firstName"/><Literal>Alex</Literal></Line>
                <Line mouseId='Author.lastName#1' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Author.lastName')}><DtoProp prop="lastName"/><Literal>Banks</Literal></Line>
                <Line {...bindProps} indent={3}><Op>)</Op><Comma/></Line>
                <Line {...bindProps} indent={3}><Type>BookDetailView.TargetOf_authors</Type><Op>(</Op></Line>
                <Line mouseId='Author.id#2' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Author.id')}><DtoProp prop="id"/><Literal>1</Literal><Comma/></Line>
                <Line mouseId='Author.firstName#2' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Author.firstName')}><DtoProp prop="firstName"/><Literal>Eve</Literal></Line>
                <Line mouseId='Author.lastName#2' {...bindProps} indent={4} tooltip={tooltip(isZh, 'Author.lastName')}><DtoProp prop="lastName"/><Literal>Procello</Literal></Line>
                <Line {...bindProps} indent={3}><Op>)</Op></Line>
                <Line {...bindProps} indent={2}><Op>]</Op></Line>
                <Line {...bindProps} indent={1}><Op>),</Op></Line>
                <Line {...bindProps} indent={1}><span style={OMITTED}>{isZh ? "...省略更多数据..." : "...Omit more data..."}</span></Line>
                <Line><Op>]</Op></Line>
            </div>
        </>
    );
};

const CELL: CSSProperties = {
    padding: '1rem',
    whiteSpace: "nowrap"
};

const TITLE: CSSProperties = {
    ...CELL,
    backgroundColor: "#1976d2", 
    color: 'white'
};

const CODE: CSSProperties = {
    margin: "1rem 0 1rem 0",
    padding: '0.5rem',
    backgroundColor: '#212121',
    color: 'white',
    overflow: 'hidden'
};

const TOOLTIP: CSSProperties = {
    position: 'absolute', 
    backgroundColor: '#212121', 
    opacity: 0.8, 
    transform: "translateY(-50%)",
    padding: "1rem",
    border: "solid 1px white",
    borderRadius: '0.5rem',
    pointerEvents: 'none'
};

const OMITTED: CSSProperties = {
    color: '#c62828',
    fontWeight: 'bold'
};

interface BindProps {
    readonly hoverId?: string,
    readonly onHoverIdChange?: (value: string | undefined) => void,
    readonly activeId?: string,
    readonly onActiveIdChange?: (value: string | undefined) => void
}

const Line: FC<
    PropsWithChildren<{
        readonly indent?: number,
        readonly tooltip?: ReactNode,
        readonly mouseId?: string
    } & BindProps>
> = ({indent = 0, tooltip, children, mouseId, hoverId, onHoverIdChange, activeId, onActiveIdChange}) => {

    const backgroundColor = useMemo(() => {
        if (isMatched(mouseId, activeId)) {
            return ACTIVE_COLOR;
        }
        if (isMatched(mouseId, hoverId)) {
            return HOVER_COLOR;
        }
        return undefined;
    }, [mouseId, hoverId, activeId]);

    const showTooltip = useMemo(() => {
        return mouseId != undefined && 
            (isMatched(mouseId, hoverId) || hoverId === undefined && isMatched(mouseId, activeId)) && 
            tooltip !== undefined;
    }, [mouseId, hoverId, tooltip]);

    const placeHolderRef = useRef<HTMLDivElement>(null);
    const [point, setPoint] = useState<{readonly x: number, readonly y: number}>({x: 0, y: 0});
    useEffect(() => {
        const derterminePoint = () => {
            if (placeHolderRef.current != null) {
                let e: HTMLElement = placeHolderRef.current;
                const point = {x: e.offsetHeight, y: e.offsetHeight / 2};
                while (e) {
                    point.x += e.offsetLeft;
                    point.y += e.offsetTop;
                    if (e.offsetParent && e.offsetParent.nodeType != 1) {
                        break;
                    }
                    e = e.offsetParent as HTMLElement;
                }
                setPoint(point);
            }
        };
        derterminePoint();
        window.addEventListener("resize", derterminePoint);
        return () => {
            window.removeEventListener("resize", derterminePoint);
        }
    }, [placeHolderRef.current]);

    const onMouseEnter = useCallback(() => {
        if (onHoverIdChange !== undefined) {
            onHoverIdChange(mouseId);
        }
    }, [onHoverIdChange]);
    const onMouseLeave = useCallback(() => {
        if (onHoverIdChange !== undefined) {
            onHoverIdChange(undefined);
        }
    }, [onHoverIdChange]);
    const onClick = useCallback(() => {
        if (onActiveIdChange !== undefined) {
            onActiveIdChange(mouseId);
        }
    }, [onActiveIdChange]);

    return (
        <div 
        style={{paddingLeft: `${indent * 1.5}rem`, backgroundColor}}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}>
            {children}
            <div style={{display: 'inline-block'}} ref={placeHolderRef}>
                &nbsp;
                {
                    showTooltip &&<div style={{...TOOLTIP, left: point.x, top: point.y}}>
                        {tooltip}
                    </div>
                }
            </div>
        </div>
    );
};

const Type: FC<{
    readonly children: string
}> = ({children}) => {
    return <span style={{color: '#4db6ac'}}>{children}</span>;
};

const Op: FC<{
    readonly children: string
}> = ({children}) => {
    return <span style={{color: '#9575cd'}}>{children}</span>;
};

const Dot: FC = () => <Op>.</Op>;

const Value: FC<{
    readonly children: string
}> = ({children}) => {
    return <span style={{color: '#dce775'}}>{children}</span>;
};

const Literal: FC<{
    readonly children: string
}> = ({children}) => {
    return <span style={{color: '#81c784'}}>{children}</span>;
};

const Keyword: FC<{
    readonly children: string
}> = ({children}) => {
    return <span style={{color: '#64b5f6', fontWeight: 'bold'}}>{children}</span>;
};

const Comment: FC<{
    readonly children: string
}> = ({children}) => {
    return <span style={{color: '#757575', fontStyle: 'italic'}}> // {children}</span>;
};

const EntityProp: FC<{
    readonly prop: string
}> = ({prop}) => {
    return <><span>"{prop}"</span><Op>: </Op></>;
};

const DtoProp: FC<{
    readonly prop: string
}> = ({prop}) => {
    return <><span>{prop}</span><Op>=</Op></>;
};

const Comma: FC = () => <Op>,</Op>;

function tooltip(isZh: boolean, prop: string, propType: 'SCALAR' | 'MANY-TO-ONE' | 'MANY-TO-MANY' = 'SCALAR', hasImplicitId: boolean = false): ReactNode {
    if (hasImplicitId) {
        return (
            <div>
                {tooltip(isZh, prop, propType, false)}
                <div style={{borderLeft: "solid 10px #81c784", color: '#81c784', paddingLeft: '0.5rem'}}>
                    {isZh ? "注意，关联id被自动抓取" : "Notes: Associated id is fetched automatically"}
                </div>
            </div>
        );
    }
    switch (propType) {
        case 'MANY-TO-ONE':
            return (isZh ? '多对一关联' : 'Many-to-one association') + " `" + prop + '`';
        case 'MANY-TO-MANY':
            return (isZh ? '多对多关联' : 'Many-to-many association') + " `" + prop + '`';
        default:
            return (isZh ? '标量属性' : 'Scalar property') + " `" + prop + '`';
    }
}

function isMatched(mouseId: string | undefined, contextId: string | undefined): boolean {
    if (contextId !== undefined) {
        if (mouseId === contextId) {
            return true;
        }
        const index = contextId.lastIndexOf('#');
        if (index !== -1) {
            const noSuffix = contextId.substring(0, index);
            if (noSuffix === mouseId) {
                return true;
            }
        }
        if (mouseId === "allScalars" && contextId !== undefined) {
            if (ALL_SCALARS.indexOf(contextId) !== -1) {
                return true;
            }
        }
    }
    return false;
}

const GeneratedDtoType: FC = () => {
    const isZh = useZh();
    const java = useMemo(() => {
        return GENERATED_DTO_JAVA.split("<omit>").join(isZh ? "...省略更多成员..." : "...Omit other members...");
    }, [isZh]);
    const kotlin = useMemo(() => {
        return GENERATED_DTO_KOTLIN.split("<omit>").join(isZh ? "...省略更多成员..." : "...Omit other members...");
    }, [isZh]);

    return (
        <Tabs groupId="quckdemo-language">
            <TabItem value="java" label="Java">
                <CodeBlock language="java" title="BookDetailView.java">{java}</CodeBlock>
            </TabItem>
            <TabItem value="kotlin" label="Kotlin">
                <CodeBlock language="kotlin" title="BookDetailView.kt">{kotlin}</CodeBlock>
            </TabItem>
        </Tabs>
    );
}

const ALL_SCALARS: ReadonlyArray<string> = [
    "Book.id",
    "Book.name",
    "Book.edition",
    "Book.price"
];

const ACTIVE_COLOR = "#1a237e";

const HOVER_COLOR = "#7986cb";

const GENERATED_DTO_JAVA = 
`@GeneratedBy(file = "<yourproject>/src/main/dto/Book.dto")
public class BookDetailView implements View<Book> {
    
    private long id;
    
    private String name;

    private int edition;

    private BigDecimal;

    @Nullable
    private TargetOf_store store;

    private List<TargetOf_authors> authors;

    <omit>

    public static class TargetOf_store implements View<BookStore> {

        private long id;

        private String name;

        <omit>
    }

    public static class TargetOf_authors implements View<Author> {

        private long id;

        private String firstName;

        private String lastName;

        <omit>
    }
}`;

const GENERATED_DTO_KOTLIN = 
`@GeneratedBy(file = "<yourproject>/src/main/dto/Book.dto")
open class BookDetailView(
    val id: Long,
    val name: String,
    val edition: Int,
    val price: BigPrice,
    val store: BookDetailView.TargetOf_store? = null,
    val authors: List<BookDetailView.TargetOf_authors> = emptyList()
): View<Book> {

    <omit>

    open class TargetOf_store(
        val id: Long,
        val name: String
    ): View<BookStore> {

        <omit>
    }

    open class TargetOf_authors(
        val id: Long,
        val firstName: String,
        val lastName: String
    ): View<Author> {

        <omit>
    }
}`;