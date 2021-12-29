import React from "react";

interface ListProps extends React.ComponentProps<any> {}

export const List = ({ children, ...props }: ListProps) => {
    return (
        <ul {...props}>
            {children.map((child: React.ReactNode, index: number) => (
                <li key={index}>{child}</li>
            ))}
        </ul>
    );
};

export default List