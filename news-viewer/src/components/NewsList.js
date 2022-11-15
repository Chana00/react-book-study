import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import usePromise from '../lib/usePromise';

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
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7169c9b12af24019ba0d1a3c9c83a1f4`,);
    }, [category])



    //로딩 중
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }

    // 아직 값이 설정되지 않았을 때
    if (!response) {
        return null;
    }

    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }

    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    )
}

export default NewsList