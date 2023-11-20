const RegularList = ({ items, parameterKey, ItemComponent }) => {
    return (
        <>
            {items.map((item, index) => (
                <ItemComponent key={index} {...{ [parameterKey]: item }} />
            ))}
        </>
    );
};

export default RegularList;
