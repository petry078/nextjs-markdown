import React from 'react';
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Header from '../../components/Header';

function Blog(props) {
    const {data, content} = matter(props.content);

    return (
        <section id="blog-post-page">
                <Header />
                <h1>Spellblog</h1>
                <span className='slogan'>Writings of a web chronicler</span>
            <article>
                <title>{data.title}</title>
                <span className='date'>{data.date}</span>
                <ReactMarkdown children={content}/>
            </article>
        </section>
    );
}

export const getServerSideProps = async context => {

    const fs = require("fs");

    const {blog} = context.params;

    const content = fs.readFileSync(`${process.cwd()}/content/${blog}.md`, 'utf8')

    return {
        props: {
            content
        }
    };
}

export default Blog;