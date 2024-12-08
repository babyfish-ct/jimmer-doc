import React, { FC, ReactNode, memo } from "react";
import Admonition from '@theme/Admonition';
import { ViewMore } from "../ViewMore";
import { useZh } from "@site/src/util/use-zh";
import { ViewDialog } from "../ViewDialog";
import { Save } from "../Image";

export const SaveCommand: FC = memo(() => {
    const zh = useZh();
    return zh ? 
        <ViewMore buttonText="简要了解" title="保存任意形状的数据结构" large={false}>
            {ZH}
        </ViewMore> : 
        <ViewMore buttonText="A Brief Introduction" title="Save data structure of any shape" large={false}>
            {EN}
        </ViewMore>;
});

export const SaveCommandDialog: FC<{
    readonly open: boolean,
    readonly onClose: () => void
}> = memo((props) => {
    const zh = useZh();
    return zh ? 
        <ViewDialog title="保存任意形状的数据结构" {...props}>
            {ZH}
        </ViewDialog> : 
        <ViewDialog title="Save data structure of any shape" {...props}>
            {EN}
        </ViewDialog>;
});

export const SaveCommandPanel: FC = memo(() => {
    const zh = useZh();
    return zh ? ZH : EN;
});

const ZH: ReactNode = 
    <>
        <p>保存指令允许开发人员保存任意形状的数据结构，而非保存简单的对象。</p>
        
        <p>在默认情况下，即在<i>AssociatedSaveMode</i>为<b>REPLACE</b>情况下，Jimmer会用被保存结构去全量替换数据库中已有的数据结构，如图所示：</p>

        <Save/>

        <ul>
            <li>
                <p>
                    <b>右上角: </b>用户传入一个任意形状的数据结构，让Jimmer写入数据库。 
                </p>
            </li>
            <li>
                <p>
                    <b>左上角: </b>从数据库中查询已有的数据结构，用于和用户传入的新数据结构对比。
                </p>
                <p style={{fontStyle:"italic", color: "gray"}}>
                    用户传入什么形状的数据结构，就从数据查询什么形状的数据结构，新旧数据结构的形状完全一致。所以，查询成本和对比成本由用户传入的数据结构的复杂度决定。
                </p>
            </li>
            <li>
                <p>
                    <b>下方: </b>对比新旧数据结构，找出DIFF并执行相应的SQL操作，让新旧数据一致：
                </p>
                <ul>
                    <li>
                        <span style={{color:"orange"}}>橙色部分</span>：对于在新旧数据结构中存在的实体对象，如果某些标量属性发生变化，修改数据
                    </li>
                    <li>
                        <span style={{color:"blue"}}>蓝色部分</span>：对于在新旧数据结构中存在的实体对象，如果某些关联发生变化，修改关联
                    </li>
                    <li>
                        <span style={{color:"green"}}>绿色部分</span>：对于在新数据结构中存在但在旧数据结构中不存在实体对象，插入数据并建立关联
                    </li>
                    <li>
                        <span style={{color:"red"}}>红色部分</span>：对于在旧数据结构中存在但在新数据结构中不存在实体对象，对此对象进行脱钩，清除关联并有可能删除数据
                    </li>
                </ul>
            </li>
        </ul>
        <Admonition type='tip'>
            <p>
            和其他ORM不同，Jimmer无需在实体模型上描述数据如何保存
            <ul>
                <li>
                    某些标量属性是否需要被保存
                    <div style={{fontStyle: "italic", color: "gray"}}>
                        以JPA为例，通过
                        <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/Column.html#insertable--">Column.insertable</a>和
                        <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/Column.html#updatable--">Column.updatable</a>控制。
                    </div>
                </li>
                <li>
                    某些关联属性是否需要被保存
                    <div style={{fontStyle: "italic", color: "gray"}}>
                        以JPA为例，通过
                        <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/OneToOne.html#cascade--">OneToOne.cascade</a>、
                        <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/ManyToOne.html#cascade--">ManyToOne.cascade</a>、
                        <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/OneToMany.html#cascade--">OenToMany.cascade</a>和
                        <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/ManyToMany.html#cascade--">ManyToOne.cascade</a>控制。
                    </div>
                </li>
            </ul>
            </p>
            <p>
                Jimmer采用完全不同的策略，其实体对象并非POJO，可以灵活地控制数据结构的形状。
            </p>
            <p>
                即，实体对象具备动态性，不为实体对象指定某个属性和将实体的某个属性指定为null，是完全不同的事情。
            </p>
            <p>
                <b>对于任何一个实体对象而言，Jimmer只会保存被指定的属性，而忽略未指定的属性。</b>
            </p>
            <p>
                因此，Jimmer无需在实体建模时考虑数据的保存行为，而是在运行时通过被保存的数据结构自身来描述期望的行为，具备绝对的灵活性。
            </p>
        </Admonition>
    </>;

const EN =
    <>
        <p>Save instructions allow developers to save data structures of any shape, rather than save simple objects.</p>

        <p>By default, when <i>AssociatedSaveMode</i> is set to <b>REPLACE</b>, Jimmer will completely replace the existing data structure in the database with the structure being saved, as shown in the figure:</p>

        <Save/>

        <ul>
            <li>
               <b>Top right:</b>  Users pass in a data structure of any shape for Jimmer to write to the database.
            </li>
            <li>
                <p>
                    <b>Top left:</b> Query the existing data structure from the database to compare with the new data structure passed in by users.
                </p>
                <p style={{fontStyle: "italic", color: "gray"}}>
                    Whatever shape of data structure the user passes in, the same shape will be queried from the database, ensuring the shapes of old and new data structures are identical. Therefore, the querying and comparison costs are determined by the complexity of the user-provided data structure.
                </p>
            </li>
            <li>
                <b>Below:</b>
                Compare the new and old data structures, find the DIFF and execute corresponding SQL operations to make them consistent:
                <ul>
                    <li>
                        <span style={{color:"orange"}}>Orange parts</span>: For entity objects that exist in both new and old data structures, modify data if scalar properties have changed
                    </li>
                    <li>
                        <span style={{color:"blue"}}>Blue parts</span>: For entity objects that exist in both new and old data structures, modify associations if they have changed
                    </li>
                    <li>
                        <span style={{color:"green"}}>Green parts</span>: For entity objects that exist in the old data structure but not in the new one, decouple this object, clear associations and possibly delete data
                    </li>
                    <li>
                        <span style={{color:"red"}}>Red parts</span>: For entity objects that exist in the new data structure but not in the old one, insert data and establish associations
                    </li>
                </ul>
            </li>
        </ul>

        <Admonition type='tip'>
            <p>
            Unlike other ORMs, Jimmer doesn't require describing how data should be saved in the entity model
            <ul>
                <li>
                    Whether certain scalar properties need to be saved
                    <div style={{fontStyle: "italic", color: "gray"}}>
                        Taking JPA as an example, this is controlled through
                        <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/Column.html#insertable--">Column.insertable</a> and
                        <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/Column.html#updatable--">Column.updatable</a>.
                    </div>
                </li>
                <li>
                    Whether certain association properties need to be saved
                    <div style={{fontStyle: "italic", color: "gray"}}>
                        Taking JPA as an example, this is controlled through
                        <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/OneToOne.html#cascade--">OneToOne.cascade</a>, 
                        <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/ManyToOne.html#cascade--">ManyToOne.cascade</a>, 
                        <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/OneToMany.html#cascade--">OenToMany.cascade</a> and
                        <a href="https://docs.oracle.com/javaee/7/api/javax/persistence/ManyToMany.html#cascade--">ManyToOne.cascade</a>.
                    </div>
                </li>
            </ul>
            </p>
            <p>
                Jimmer adopts a completely different strategy - its entity objects are not POJOs and can flexibly control the shape of data structures.
            </p>
            <p>
                That is, entity objects have dynamic properties - not specifying a property for an entity object and setting an entity's property to null are completely different things.
            </p>
            <p>
                <b>For any entity object, Jimmer will only save the specified properties while ignoring unspecified ones.</b>
            </p>
            <p>
                Therefore, Jimmer doesn't need to consider data saving behavior during entity modeling, but rather describes the expected behavior at runtime through the data structure being saved itself, providing absolute flexibility.
            </p>
        </Admonition>
    </>;