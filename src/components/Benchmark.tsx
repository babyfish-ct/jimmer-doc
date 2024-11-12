import React, { FC, memo, useCallback, useState } from "react";
import {
	Chart,
	Tooltip,
	Interval,
	Interaction,
    Axis,
    Legend
} from "bizcharts";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import { ScaleOption } from "bizcharts/lib/interface";

export const Benchmark: React.FC<{
    readonly type: "OPS" | "TIME",
    readonly locale?: "zh",
}> = ({type, locale}) => {

    const [showJdbc, setShowJdbc] = useState(type !== "OPS");
    const onShowJdbcChange = useCallback((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setShowJdbc(checked);
    }, []);

    return (
        <Tabs groupId="chart-mode">
            <TabItem value="chart" label={locale === "zh" ? "图表" : "Chart"} default>
                { 
                    type === "OPS" && 
                    <>
                        <FormGroup>
                            <FormControlLabel 
                            control={<Checkbox value={showJdbc} onChange={onShowJdbcChange}/>} 
                            label={locale === "zh" ? "显示原生JDBC指标" : "Show native JDBC metrics"}/>
                        </FormGroup> 
                        <Divider/>
                    </>
                }
                {
                    type == "OPS" ?
                    <BenchmarkChart rows={opsRows} scale={opsScale} showJdbc={showJdbc}/> :
                    <BenchmarkChart rows={timeRows} scale={timeScale} showJdbc={showJdbc}/>
                }
            </TabItem>
            <TabItem value="data" label={locale === "zh" ? "数据" : "Data"}>
                {
                    type === "OPS" ?
                    <BenchmarkTable rows={sortedOpsRows} valueTitle="Ops/s"/> :
                    <BenchmarkTable rows={sortedTimeRows} valueTitle="Time(μs)"/>
                }
            </TabItem>
        </Tabs>
    );
};

const BenchmarkChart: React.FC<{
    readonly rows: ReadonlyArray<Row>,
    readonly scale: {
        readonly [field: string]: ScaleOption
    },
    readonly showJdbc: boolean,
	readonly height?: number
}> = ({rows, scale, showJdbc, height = 400}) => {
    return (
        <Chart 
        filter={showJdbc ? undefined : {"framework": (v: any) => !(v as string).startsWith("JDBC")}}
        height={height} 
        padding="auto" 
        data={rows} 
        scale={scale} 
        autoFit>
			<Interval
				adjust={[
					{
						type: 'dodge',
						marginRatio: 0,
					},
				]}
				color="framework"
				position="dataCount*value"
			/>
            <Axis name="value" title/>
            <Legend position="left"/>
			<Tooltip shared />
			<Interaction type="active-region" />
		</Chart>
    );
}

const BenchmarkTable: React.FC<{readonly rows: ReadonlyArray<Row>, readonly valueTitle: string}> = ({rows, valueTitle}) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Framework</TableCell>
                    <TableCell>Data count</TableCell>
                    <TableCell>{valueTitle}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.map(row => 
                        <TableRow key={`${row.framework}-${row.dataCount}`}>
                            <TableCell>{row.framework}</TableCell>
                            <TableCell>{row.dataCount}</TableCell>
                            <TableCell>{row.value}</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    );
};

const opsScale = {
	dataCount: {
		alias: "Data count"
	},
	value: {
		alias: "Ops/s"
	}
};

const timeScale = {
	dataCount: {
		alias: "Data count"
	},
	value: {
		alias: 'Time(μs)'
	}
};

interface Row {
    readonly framework: string;
    readonly dataCount: string;
    readonly value: number;
};

const rows: ReadonlyArray<Row> = [
    {framework: "JDBC(ColIndex)", dataCount: "10", value: 662071},
	{framework: "JDBC(ColIndex)", dataCount: "20", value: 453226},
	{framework: "JDBC(ColIndex)", dataCount: "50", value: 259484},
	{framework: "JDBC(ColIndex)", dataCount: "100", value: 130991},
	{framework: "JDBC(ColIndex)", dataCount: "200", value: 77725},
	{framework: "JDBC(ColIndex)", dataCount: "500", value: 32109},
	{framework: "JDBC(ColIndex)", dataCount: "1000", value: 16188},
	{framework: "JDBC(ColName)", dataCount: "10", value: 345169},
	{framework: "JDBC(ColName)", dataCount: "20", value: 238107},
	{framework: "JDBC(ColName)", dataCount: "50", value: 125589},
	{framework: "JDBC(ColName)", dataCount: "100", value: 72424},
	{framework: "JDBC(ColName)", dataCount: "200", value: 33068},
	{framework: "JDBC(ColName)", dataCount: "500", value: 16234},
	{framework: "JDBC(ColName)", dataCount: "1000", value: 8346},
	{framework: "Jimmer(Java)", dataCount: "10", value: 315312},
	{framework: "Jimmer(Java)", dataCount: "20", value: 224179},
	{framework: "Jimmer(Java)", dataCount: "50", value: 132673},
	{framework: "Jimmer(Java)", dataCount: "100", value: 77044},
	{framework: "Jimmer(Java)", dataCount: "200", value: 41474},
	{framework: "Jimmer(Java)", dataCount: "500", value: 16371},
	{framework: "Jimmer(Java)", dataCount: "1000", value: 8831},
	{framework: "Jimmer(Kotlin)", dataCount: "10", value: 309029},
	{framework: "Jimmer(Kotlin)", dataCount: "20", value: 230622},
	{framework: "Jimmer(Kotlin)", dataCount: "50", value: 128315},
	{framework: "Jimmer(Kotlin)", dataCount: "100", value: 74499},
	{framework: "Jimmer(Kotlin)", dataCount: "200", value: 36656},
	{framework: "Jimmer(Kotlin)", dataCount: "500", value: 16870},
	{framework: "Jimmer(Kotlin)", dataCount: "1000", value: 7932},
	{framework: "EasyQuery", dataCount: "10", value: 206634},
	{framework: "EasyQuery", dataCount: "20", value: 135063},
	{framework: "EasyQuery", dataCount: "50", value: 92230},
	{framework: "EasyQuery", dataCount: "100", value: 45502},
	{framework: "EasyQuery", dataCount: "200", value: 28085},
	{framework: "EasyQuery", dataCount: "500", value: 11666},
	{framework: "EasyQuery", dataCount: "1000", value: 4427},
	{framework: "MyBatis", dataCount: "10", value: 68743},
	{framework: "MyBatis", dataCount: "20", value: 43940},
	{framework: "MyBatis", dataCount: "50", value: 20050},
	{framework: "MyBatis", dataCount: "100", value: 10541},
	{framework: "MyBatis", dataCount: "200", value: 5310},
	{framework: "MyBatis", dataCount: "500", value: 2137},
	{framework: "MyBatis", dataCount: "1000", value: 1048},
	{framework: "Exposed", dataCount: "10", value: 92494},
	{framework: "Exposed", dataCount: "20", value: 66934},
	{framework: "Exposed", dataCount: "50", value: 26693},
	{framework: "Exposed", dataCount: "100", value: 19483},
	{framework: "Exposed", dataCount: "200", value: 10008},
	{framework: "Exposed", dataCount: "500", value: 3894},
	{framework: "Exposed", dataCount: "1000", value: 2082},
	{framework: "JPA(Hibernate)", dataCount: "10", value: 90542},
	{framework: "JPA(Hibernate)", dataCount: "20", value: 59926},
	{framework: "JPA(Hibernate)", dataCount: "50", value: 25893},
	{framework: "JPA(Hibernate)", dataCount: "100", value: 13096},
	{framework: "JPA(Hibernate)", dataCount: "200", value: 6900},
	{framework: "JPA(Hibernate)", dataCount: "500", value: 2491},
	{framework: "JPA(Hibernate)", dataCount: "1000", value: 1207},
	{framework: "JPA(EclipseLink)", dataCount: "10", value: 64230},
	{framework: "JPA(EclipseLink)", dataCount: "20", value: 33421},
	{framework: "JPA(EclipseLink)", dataCount: "50", value: 13634},
	{framework: "JPA(EclipseLink)", dataCount: "100", value: 6802},
	{framework: "JPA(EclipseLink)", dataCount: "200", value: 3238},
	{framework: "JPA(EclipseLink)", dataCount: "500", value: 1361},
	{framework: "JPA(EclipseLink)", dataCount: "1000", value: 650},
	{framework: "JOOQ", dataCount: "10", value: 69408},
	{framework: "JOOQ", dataCount: "20", value: 39737},
	{framework: "JOOQ", dataCount: "50", value: 18373},
	{framework: "JOOQ", dataCount: "100", value: 8145},
	{framework: "JOOQ", dataCount: "200", value: 4186},
	{framework: "JOOQ", dataCount: "500", value: 1707},
	{framework: "JOOQ", dataCount: "1000", value: 832},
	{framework: "Nutz", dataCount: "10", value: 76904},
	{framework: "Nutz", dataCount: "20", value: 39501},
	{framework: "Nutz", dataCount: "50", value: 16639},
	{framework: "Nutz", dataCount: "100", value: 8903},
	{framework: "Nutz", dataCount: "200", value: 4374},
	{framework: "Nutz", dataCount: "500", value: 2040},
	{framework: "Nutz", dataCount: "1000", value: 957},
	{framework: "ObjectiveSQL", dataCount: "10", value: 56245},
	{framework: "ObjectiveSQL", dataCount: "20", value: 29975},
	{framework: "ObjectiveSQL", dataCount: "50", value: 12455},
	{framework: "ObjectiveSQL", dataCount: "100", value: 6251},
	{framework: "ObjectiveSQL", dataCount: "200", value: 3470},
	{framework: "ObjectiveSQL", dataCount: "500", value: 1259},
	{framework: "ObjectiveSQL", dataCount: "1000", value: 559},
	{framework: "Spring Data JDBC", dataCount: "10", value: 20494},
	{framework: "Spring Data JDBC", dataCount: "20", value: 10704},
	{framework: "Spring Data JDBC", dataCount: "50", value: 4146},
	{framework: "Spring Data JDBC", dataCount: "100", value: 2229},
	{framework: "Spring Data JDBC", dataCount: "200", value: 1025},
	{framework: "Spring Data JDBC", dataCount: "500", value: 447},
	{framework: "Spring Data JDBC", dataCount: "1000", value: 197},
	{framework: "Ktorm", dataCount: "10", value: 19152},
	{framework: "Ktorm", dataCount: "20", value: 9520},
	{framework: "Ktorm", dataCount: "50", value: 4385},
	{framework: "Ktorm", dataCount: "100", value: 2091},
	{framework: "Ktorm", dataCount: "200", value: 1063},
	{framework: "Ktorm", dataCount: "500", value: 427},
	{framework: "Ktorm", dataCount: "1000", value: 168},
];

const opsRows = rows.map(item => ({...item, value: Math.round(item.value)}));

const timeRows = rows.map(item => ({...item, value: Math.round(1000000 / item.value)}));

const HighPerformanceRows =rows.filter(item => !item.framework.startsWith("JDBC("));

function compareByDataCount(a: Row, b: Row) : number {
    return parseInt(a.dataCount) - parseInt(b.dataCount);
}

const sortedOpsRows = opsRows.sort(compareByDataCount);

const sortedTimeRows = timeRows.sort(compareByDataCount);

