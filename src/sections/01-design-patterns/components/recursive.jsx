const isObject = (data) => typeof data === 'object' && data !== null;

export const myNestedObject = {
    key1: 'value',
    key2: {
        innerKey1: 'innerValue1',
        innerKey2: {
            innerInnerKey1: 'innernInnerValue1',
            innerInnerKey2: 'innernInnerValue2',
        },
    },
    key3: 'value3',
};

export const RecursiceComponent = ({ data }) => {
    if (!isObject(data)) {
        return <li>{data}</li>;
    }

    const pairs = Object.entries(data);

    return (
        <>
            {pairs.map(([key, value]) => {
                return (
                    <li key={Math.random()}>
                        {key}:
                        <ul>
                            <RecursiceComponent data={value} />
                        </ul>
                    </li>
                );
            })}
        </>
    );
};
