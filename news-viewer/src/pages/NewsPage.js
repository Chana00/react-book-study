import React from 'react'
import Categories from '../components/Categories'
import NewsList from '../components/NewsList'
import { useParams } from 'react-router-dom'

function NewsPage() {
    const params = useParams();
    const category = params.category || 'all';

    return (
        <div>
            <Categories />
            <NewsList category={category} />
        </div>
    )
}

export default NewsPage