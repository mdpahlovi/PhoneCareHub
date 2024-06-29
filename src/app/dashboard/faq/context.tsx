"use client";

import FAQCard from "./cards";
import { FAQs } from "@prisma/client";
import { useEffect, useState } from "react";
import { DndContext, DragEndEvent, UniqueIdentifier, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";

export default function Context({ faqs }: { faqs: FAQs[] }) {
    const [items, setItems] = useState<FAQs[]>([]);

    useEffect(() => setItems(faqs), [faqs]);

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
            <SortableContext items={items.map(({ serial }) => ({ id: serial as UniqueIdentifier }))} strategy={verticalListSortingStrategy}>
                {items.map((faq, idx) => (
                    <FAQCard key={idx} faq={faq} firstItem={idx === 0} lastItem={items?.length === idx + 1} />
                ))}
            </SortableContext>
        </DndContext>
    );
}
