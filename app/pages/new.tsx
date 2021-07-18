import { BlitzPage } from "blitz"
import { Form } from "../core/components/Form"
import Layout from "../core/layouts/Layout"

const NewPage: BlitzPage = () => {
  return (
    <div>
      <Form url="http://localhost:8000/api/todo" method="POST" />
    </div>
  )
}

NewPage.suppressFirstRenderFlicker = true
NewPage.getLayout = (page) => <Layout title="New Todo">{page}</Layout>

export default NewPage
