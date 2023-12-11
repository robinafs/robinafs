import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Can I apply to more than one graduate program at Stanford?",
        value: "Can I apply to more than one graduate program at Stanford?"
    },
    { text: "Does my foreign degree qualify me for graduate study at Stanford?", value: "Does my foreign degree qualify me for graduate study at Stanford?" },
    { text: "How much does it cost to attend Stanford?", value: "How much does it cost to attend Stanford?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
