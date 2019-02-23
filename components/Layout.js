export default ({children, title}) => (
    <div>
        <header>Header</header>

        <h1>{title}</h1>
        {children}

        <footer>Footer</footer>
    </div>
)