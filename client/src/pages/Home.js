import React from 'react'

const Home = () => {

  const posts = [
    {
      title: 'What is Lorem Ipsum?',
      article: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
      title: 'What is Lorem Ipsum?',
      article: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
      title: 'What is Lorem Ipsum?',
      article: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.`
    },
  ]

  return (
    <div className='container border mt-3 p-3 rounded shadow'>
      <div className='d-flex float-end gap-3'>
        <h6 className='text-white bg-danger px-3 py-1 rounded'>New Post</h6>
      </div>
      {
        posts.map((ele, i) => (
          <div className='d-flex flex-column'>
            <h1>{ele.title}</h1>
            <p>{ele.article}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Home