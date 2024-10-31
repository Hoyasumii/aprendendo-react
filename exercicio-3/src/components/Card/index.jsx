import module from "./.module.css";

export default function Card({ children }) {
    return (
        <div className={ module.card }>
            { children }
        </div>
    );
}