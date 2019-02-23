import Link from 'next/link';

const Home = () => (
    <div>
        <Link href="/about">
            <a>About</a>
        </Link>
        <h1>Home</h1>
        I am the home page
    </div>
)

export default Home;