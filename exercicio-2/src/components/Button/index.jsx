import module from "./component.module.css";

export default function Card(props) {
    return (
        <button className={ module.button }>
            { props?.text }
        </button>
    )
}