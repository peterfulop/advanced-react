const LeftSideComp = ({ title, children }) => {
    return (
        <>
            <h2 style={{ backgroundColor: 'gray' }}>{title}</h2>
            {children}
        </>
    );
};

export default LeftSideComp;
