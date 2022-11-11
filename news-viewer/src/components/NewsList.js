import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-botton: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

function NewsList({ category }) {
    const [articles, setArticles] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //async를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7169c9b12af24019ba0d1a3c9c83a1f4`)
                setArticles(res.data.articles);
            }
            catch (e) {
                console.log(e);
            }
            setLoading(false);
        }

        fetchData();
    }, [category])

    //로딩 중
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }

    // 아직 값이 설정되지 않았을 때
    if (!articles) {
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    )
}

export default NewsList