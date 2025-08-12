import "./Button.css"

interface Props {
    label: string;
    parentMethod: () => void;
}

// Componente "tonto" -> No tiene lógica interna (un state)
// export const Button = ({label: string, parentMethod: () => void}) => {
export const Button = ({label, parentMethod}: Props) => {
    return (
        // <button style={{ color: 'blue', backgroundColor: 'grey' }} onClick={parentMethod}>
        <button className="custom-button" onClick={parentMethod}>
            {label}
        </button>
    )
}