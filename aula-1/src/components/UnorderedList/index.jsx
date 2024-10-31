const UnorderedList = () => {

    let list = [
        "Use de dados dinâmicos no JSX",
        "Criação de novos componentes",
        "Estilização de componentes",
        "Reutilização de componentes",
        "Uso de props e children",
        "Uso de eventos do JavaScript",
    ];

    return (
    <ul>
        { list.map((item, index) => ( <li key={index}>{item}</li> )) }
    </ul>
    )
}

export default UnorderedList;