import { Skeleton } from "@/components/ui"

import { FaceShapeSection } from "./face-shape-section";

const SKELETON_ITEMS = Array.from({ length: 3 });

export const FaceShapeSkeletons = () => (
    <FaceShapeSection>
        {SKELETON_ITEMS.map((_, index) => (
            <Skeleton
                key={index}
                className=" w-72 lg:w-160 h-60"
            />
        ))}
    </FaceShapeSection>
);