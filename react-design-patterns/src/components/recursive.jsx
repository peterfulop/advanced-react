const isObject = (data) => typeof data === 'object' && data !== null;

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
