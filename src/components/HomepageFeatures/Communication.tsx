import React, { FC, memo } from "react";
import { ViewMore } from "../ViewMore";
import Admonition from "@theme/Admonition";
import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { useZh } from "@site/src/util/use-zh";
import { ViewDialog } from "../ViewDialog";
import { OpenApi, OpenApiSimple, OpenApiComplex } from "../Image";

export const Communication: FC = memo(() => {
    const zh = useZh();
    return zh ? 
        <ViewMore buttonText="简要了解" title="服务端和客户端使用不同编程模型的前后端对接">
            {ZH}
        </ViewMore> : 
        <ViewMore buttonText="A Brief Introduction" title="The docking of the server and the client using different programming models">
            {EN}
        </ViewMore>;
});

export const CommunicationDialog: FC<{
    readonly open: boolean,
    readonly onClose: () => void
}> = memo(props => {
    const zh = useZh();
    return zh ? 
        <ViewDialog title="服务端和客户端使用不同编程模型的前后端对接" {...props}>
            {ZH}
        </ViewDialog> : 
        <ViewDialog title="The docking of the server and the client using different programming models" {...props}>
            {EN}
        </ViewDialog>;
});

export const CommunicationPanel: FC = memo(() => {
    const zh = useZh();
    return zh ? ZH : EN;
});

const JAVA = 
`
@RestController
public class BookController {

    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/books")
    public List<
        @FetchBy("SIMPLE_FETCHER") Book ❶
    > findBooks() {
        return bookRepository.findAll(
            SIMPLE_FETCHER ❷
        );
    }

    @GetMapping("book/{id}/detail")
    @Nullable
    public 
    @FetchBy("COMPLEX_FETCHER") Book ❸
    findBookById(
            @PathVariable("id") long id
    ) {
        return bookRepository.findNullable(
            id, 
            COMPLEX_FETCHER ❹
        );
    }

    private static final Fetcher<Book> SIMPLE_FETCHER = ❺
        Fetchers.BOOK_FETCHER
            .name();

    private static final Fetcher<Book> COMPLEX_FETCHER = ❻
        Fetchers.BOOK_FETCHER
            .allScalarFields()
            .store(
                Fetchers.BOOK_STORE_FETCHER
                    .name()
            )
            .authors(
                Fetchers.AUTHOR_FETCHER
                    .firstName()
                    .lastName()
            );
}
`;

const KOTLIN = 
`
@GetMapping("/books")
fun findBooks(): List<
    @FetchBy("SIMPLE_FETCHER") Book ❶
> =
    bookRepository.findAll(
        SIMPLE_FETCHER ❷
    )

@GetMapping("/book/{id}")
fun findBookById(
    @PathVariable id: Long,
): @FetchBy("COMPLEX_FETCHER") Book? = ❸
    bookRepository.findNullable(
        id, 
        COMPLEX_FETCHER ❹
    )

companion object {

    private val SIMPLE_FETCHER = ❺
        newFetcher(Book::class).by {
            name()
        }

    private val COMPLEX_FETCHER = ❻
        newFetcher(Book::class).by {
            allScalarFields()
            store {
                name()
            }
            authors {
                firstName()
                lastName()
            }
        }
}
`;

const TS_ZH =
`
export type BookDto = {
    // highlight-next-line
    'BookController/SIMPLE_FETCHER': {
        readonly id: number, 
        readonly name: string
    }, 
    // highlight-next-line
    'BookController/COMPLEX_FETCHER': {
        readonly id: number, 
        readonly name: string, 
        readonly edition: number, 
        readonly price: number, 
        readonly store?: {
            readonly id: number, 
            readonly name: string
        }, 
        readonly authors: ReadonlyArray<{
            readonly id: number, 
            readonly firstName: string, 
            readonly lastName: string
        }>
    }
}
export class BookService {
    
    async findBooks(): Promise<
        ReadonlyArray<
            // highlight-next-line
            BookDto['BookService/SIMPLE_FETCHER']
        >
    > {
        ...省略代码...
    }

    async findBookById(
        options: { readonly id: number }
    ): Promise<
        // highlight-next-line
        BookDto['BookService/COMPLEX_FETCHER'] | 
        undefined
    > {
        ...省略代码...
    }

    ...省略其他代码...
}
`;

const ZH = 
    <>
        <h1>1. 即使服务端选择不使用DTO</h1>
        <Tabs groupId="language">
            <TabItem value="java" label="Java">
                <CodeBlock language="java">{JAVA}</CodeBlock>
            </TabItem>
            <TabItem value="kotlin" label="Kotlin">
                <CodeBlock language="kotlin">{KOTLIN}</CodeBlock>
            </TabItem>
        </Tabs>
        <ul>
            <li>❶ `@FetchBy`对外承诺，GET <code>/books</code>返回的集合对象中的每一个Book对象的形状为静态常量SIMPLE_FETCHER所表达的形状</li>
            <li>
                ❷ 内部实现，GET <code>/books</code>内部使用静态常量SIMPLE_FETCHER查询数据
                <Admonition type="caution">
                    作为对外承诺的❶和作为内部实现的❷必须一致
                </Admonition>
            </li>
            <li>❸ `@FetchBy`对外承诺，如果GET <code>/book/{"{id}"}</code>返回非null, 其形状为静态常量COMPLEX_FETCHER所表达的形状</li>
            <li>
                ❹ 内部实现，GET <code>/book/{"{id}"}</code>内部使用静态常量COMPLEX_FETCHER查询数据
                <Admonition type="caution">
                    作为对外承诺的❸和作为内部实现的❹必须一致
                </Admonition>
            </li>
            <li>
                <p>❺和❻，以静态常量的方式声明对象的形状。</p>

                <p>通过@FetchBy的修饰，Jimmer就明白每个对象对外返回的数据的具体形状了，它就可以为客户端生成代码了，包括TypeScript</p>
            </li>
        </ul>
        <h1>2. 仍然能为客户端生成DTO</h1>
        <h2>2.1. 自动生成的Openapi</h2>
        <OpenApi/>
        <div>其中</div>
        <ul>
            <li><div><code>/books</code></div>的DTO: <OpenApiSimple/></li>
            <li><div><code>/book/{"{id}"}</code></div>的DTO: <OpenApiComplex/></li>
        </ul>
        <h2>2.2. 自动生成TypeScript</h2>
        <CodeBlock language="ts">{TS_ZH}</CodeBlock>
        <Admonition type="tip">
            对于客户端而言，每一个业务场景的API都精确定义了返回数据的DTO类型，任何调用都能得到良好的编译时检查和流畅的IDE智能提示。
        </Admonition>
    </>;

const EN = 
    <>
        <h1>1. Even if the server chooses not to use DTOs</h1>
        <Tabs groupId="language">
            <TabItem value="java" label="Java">
                <CodeBlock language="java">{JAVA}</CodeBlock>
            </TabItem>
            <TabItem value="kotlin" label="Kotlin">
                <CodeBlock language="kotlin">{KOTLIN}</CodeBlock>
            </TabItem>
        </Tabs>
        <ul>
            <li>❶ As external promise of `@FetchBy`, the shape of each <code>Book</code> object in the list object returned by GET <code>/books</code> is the shape expressed by the static constant <code>SIMPLE_FETCHER</code></li>
            <li>
                ❷ Internal implementation, GET <code>/books</code> internally uses the static constant SIMPLE_FETCHER to query data
                <Admonition type="caution">
                    ❶ as an external promise and ❷ as an internal realization must be consistent
                </Admonition>
            </li>
            <li>❸ As external promise of `@FetchBy`, if GET <code>/book/{"{id}"}</code> returns non-null, its shape is the shape expressed by the static constant <code>COMPLEX_FETCHER</code></li>
            <li>
                ❹ Internal implementation, GET <code>/book/{"{id}"}</code> internally uses the static constant COMPLEX_FETCHER to query data
                <Admonition type="caution">
                    ❸ as an external promise and ❹ as an internal realization must be consistent
                </Admonition>
            </li>
            <li>
                <p>❺ and ❻, declare the shape of the object in the form of static constants. </p>

                <p>Through the decoration of <code>@FetchBy</code>, Jimmer understands the specific shape of the data returned by dynamic object, and it can generate code for the client, including TypeScript</p>
            </li>
        </ul>
        <h1>2. DTOs can still be generated for the client</h1>
        <h2>2.1. Auto-generated Openapi</h2>
        <OpenApi/>
        <div>Wherein</div>
        <ul>
            <li>The DTO of <div><code>/books</code></div>: <OpenApiSimple/></li>
            <li>The DTO of <div><code>/book/{"{id}"}</code></div>: <OpenApiComplex/></li>
        </ul>
        <h2>2.2. Auto-generated TypeScript</h2>
        <CodeBlock language="ts">{TS_ZH}</CodeBlock>
        <Admonition type="tip">
            For the client, the API of each business scenario precisely defines the DTO type of the returned data, and any invocation can get good compile-time checks and smooth IDE intelligent prompts.
        </Admonition>
    </>;

