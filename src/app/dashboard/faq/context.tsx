"use client";

import FAQCard from "./cards";
import { useState } from "react";
import { FAQ } from "@/types/response";
import { DndContext, DragEndEvent, UniqueIdentifier, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";

export default function Context({ faqs }: { faqs?: FAQ[] | null }) {
    const [items, setItems] = useState(faqs ? faqs : []);

    const handleDragEnd = ({ active, over }: DragEndEvent) => {
        if (active.id !== over?.id) {
            setItems((items) => {
                const activeItem = items.findIndex(({ serial }) => serial == active.id);
                const overItem = items.findIndex(({ serial }) => serial == over?.id);
                return arrayMove(items, activeItem, overItem);
            });
        }
    };

    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext
                items={items.map(({ serial }) => {
                    return { id: serial as UniqueIdentifier };
                })}
                strategy={verticalListSortingStrategy}
            >
                {items.map((faq, idx) => (
                    <FAQCard key={idx} faq={faq} lastItem={items?.length === idx + 1} />
                ))}
            </SortableContext>
        </DndContext>
    );
}
