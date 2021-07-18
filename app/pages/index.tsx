import { useState, useEffect } from "react"
import { Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/api/todo")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log({ data })
      })
  }, [filteredData])

  async function handleDelete(e) {
    try {
      const res = await fetch(`http://localhost:8000/api/todo/${e.target.id}`, {
        method: "DELETE",
      })
      const processedResponse = await res.json()

      console.log({ processedResponse })
      setFilteredData(data.filter(({ _id }) => processedResponse.data._id !== _id))
      console.log({ data })
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className="container">
      todo
      <Link href="/add-todo">
        <button>Add TODO</button>
      </Link>
      <ul>
        {data.map(({ title, description, _id }) => (
          <li key={_id}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
              <Link href={{ pathname: `/edit/${_id}`, query: { title, description } }}>
                <button>Edit</button>
              </Link>
              <button id={_id} onClick={handleDelete}>
                Delete
              </button>
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
