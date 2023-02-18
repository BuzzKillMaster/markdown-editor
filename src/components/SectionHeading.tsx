import {ImLoop} from "react-icons/im";
import React from "react";

export default function SectionHeading(props: {
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