import { useMutation, useQuery } from '@apollo/client'
import React, { memo } from 'react'
import { ARTICLES_QUERY, UPDATE_ARTICLE } from '../query'
import mongoose from 'mongoose'
export default memo(function Articles() {
  const { loading, data, error } = useQuery(
    ARTICLES_QUERY
  )
  const [updateArticle] = useMutation(UPDATE_ARTICLE, {
    refetchQueries: () => [
      {
        query: ARTICLES_QUERY,
      }
    ]
  })
  if (loading) return <h2>loading...</h2>
  if (error) console.log(error)

  return (
    <div>
      <h2>Articles</h2>
      {
        data.articles && data.articles.map((item, index) => {
          let input;
          return (
            <div key={index}>
              <p>title: {item.title}</p>
              <p>body: {item.body}</p>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  updateArticle({
                    variables: { _id: item._id, title: input.value, body: input.value }
                  });
                  input.value = '';
                }}
              >
                <input
                  ref={node => {
                    input = node;
                  }}
                />
                <button type="submit">Add Article</button>
              </form>
            </div>
          )
        })
      }


    </div>
  )
})
