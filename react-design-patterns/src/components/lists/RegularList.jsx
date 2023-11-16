const RegularList = ({ items, sourceKey, ItemComponent }) => {
    return (
        <>
            {items.map((item, index) => (
                <ItemComponent key={index} {...{ [sourceKey]: item }} />
            ))}
        </>
    );
};

export default RegularList;
