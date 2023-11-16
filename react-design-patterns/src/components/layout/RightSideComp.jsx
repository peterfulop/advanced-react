const RightSideComp = ({ children, title }) => {
    return (
        <>
            <h2 style={{ backgroundColor: 'lightGray' }}>{title}</h2>
            {children}
        </>
    );
};

export default RightSideComp;
