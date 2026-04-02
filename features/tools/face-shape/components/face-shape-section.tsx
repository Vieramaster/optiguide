interface FaceShapeSectionProps {
    children: React.ReactNode
}
export const FaceShapeSection = ({ children }: FaceShapeSectionProps) => (
    <section className="p-10 text-center">
        {children}
    </section>
);