import { ReactNode, ForwardedRef, forwardRef } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(({ children, className = '', id = '' }, ref: ForwardedRef<HTMLDivElement>) => (
    <section id={id} className={`container px-2 mx-auto overflow-hidden ${className}`} ref={ref}>
        {children}
    </section>
));

Section.displayName = 'Section';

export default Section;
