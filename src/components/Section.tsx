import { ReactNode, forwardRef } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    overflowhidden?: boolean;
    id?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ children, className = '', id = '', overflowhidden = true }, ref) => (
    <>
        <section
            id={id}
            ref={ref}
            className={`relative container px-2 mx-auto ${overflowhidden && 'overflow-hidden'} ${className}`}
        >
            {children}
        </section>
        <hr className='border-0 border-b-2 border-black/90' />
    </>
));

export default Section;
