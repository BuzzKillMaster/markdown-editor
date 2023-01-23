import Head from 'next/head'
import ReactMarkdown from "react-markdown";
import React, {useState} from "react";
import {ImLoop} from "react-icons/im";

export default function Home() {
    const [markdownValue, setMarkdownValue] = useState(initialMarkdown)
    const [showPreview, setShowPreview] = useState(false)

    const togglePreview = () => setShowPreview(!showPreview)

    return (
        <>
            <Head>
                <title>Markdown Editor</title>
                <meta name="description"
                      content="Tired of plain text or so-called 'smart' text editors and just want to go back to the basics? Then this editor is for you."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={"h-screen flex flex-col"}>
                <header className={"px-4 py-6 bg-stone-700 text-white"}>
                    <h1 className={"text-xl font-bold uppercase tracking-widest"}>Markdown</h1>
                </header>

                <main className={"grid grid-cols-2 flex-grow overflow-hidden relative"}>
                    <section className={(showPreview ? "opacity-0 " : "") + "bg-stone-900 text-white flex lg:opacity-100 flex-col overflow-hidden absolute inset-0 lg:relative"}>
                        <SectionHeading title={"Editor"} callback={togglePreview}/>
                        <textarea onChange={event => setMarkdownValue(event.target.value)} value={markdownValue} placeholder={initialMarkdown} className={"flex-grow resize-none outline-none bg-transparent p-8"}></textarea>
                    </section>

                    <section className={(!showPreview ? "opacity-0 pointer-events-none " : "") + "lg:pointer-events-auto bg-stone-900 text-white overflow-hidden flex lg:opacity-100 flex-col absolute inset-0 lg:relative"}>
                        <SectionHeading title={"Preview"} callback={togglePreview}/>
                        <div id={"preview"} className={"p-8 overflow-scroll flex-grow"}>
                            <ReactMarkdown>{markdownValue.trim().length !== 0 ? markdownValue : "Use the editor to begin writing."}</ReactMarkdown>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

function SectionHeading(props: {
    title: string
    callback: () => void
}) {
    return (
        <header className={"bg-stone-800 p-4 font-semibold flex items-center justify-between"}>
            <h2>{props.title}</h2>

            <ImLoop onClick={props.callback} className={"text-lg cursor-pointer lg:hidden"}/>
        </header>
    )
}


const initialMarkdown = `# Welcome to Markdown!
Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

## How to use this?
1. Write markdown in the editor window
2. See the rendered markdown in the preview window

### Features
- Create headings, paragraphs, links, block quotes, inline-code, code blocks, and lists
- Name and save the document to access again later
- Choose between Light or Dark mode depending on your preference

> This is an example of a block quote. If you would like to learn more about Markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).

#### Headings
To create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.

##### Lists
You can see examples of ordered and unordered lists above.

###### Code Blocks
This markdown editor allows for inline-code snippets, like this \`<p>I'm inline</p>\`. It also allows for larger code blocks like this:
    
\`\`\`
<main>
    <h1>This is a larger code block</h1>
</main>
\`\`\``