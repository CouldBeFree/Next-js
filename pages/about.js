import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => (
    <Layout title="About">
        <Link href="/">
            <a>Home</a>
        </Link>
        <p>I am the JavaScript developer</p>
    </Layout>
)

export default About