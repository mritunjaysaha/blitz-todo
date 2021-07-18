import { BlitzPage, useParam, useRouterQuery } from "blitz"
import { Form } from "../../core/components/Form"
import Layout from "../../core/layouts/Layout"

const EditPage: BlitzPage = () => {
  const id = useParam("id")
  const query = useRouterQuery()

  console.log(query)

  return (
    <div>
      <Form url={`http://localhost:8000/api/todo/${id}`} method="PUT" prevData={query} />
    </div>
  )
}

EditPage.suppressFirstRenderFlicker = true
EditPage.getLayout = (page) => <Layout title="Edit Todo">{page}</Layout>

export default EditPage
