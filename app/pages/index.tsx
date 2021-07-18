import { useState, useEffect } from "react"
import { Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/api/todo")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log({ data })
      })
  }, [])
  return (
    <div className="container">
      todo
      <ul>
        {data.map(({ title, description, _id }) => (
          <li key={_id}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Todo">{page}</Layout>

export default Home
