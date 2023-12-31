import React, {FC, useState} from "react";

export enum CardVariant {
    outlined = 'outlined',
    primary = 'ptimary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({width, height, variant, onClick}) => {

    const [state, setState] = useState(0)

    return(
        <div style={{width, 
                    height, 
                    border: variant === CardVariant.outlined ? '1px solid gray' : '2px dashed red',
                    background: variant === CardVariant.primary ? 'green' : 'purple'}}
                    onClick={() => onClick(state)}
                    >

        </div>
    );
}

export default Card