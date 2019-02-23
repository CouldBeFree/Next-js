import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => (
    <Layout title="Home">
        <Link href="/about">
            <a>About</a>
        </Link>
        I am the home page
    </Layout>
)

export default Home;