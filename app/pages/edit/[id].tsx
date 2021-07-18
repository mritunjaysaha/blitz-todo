import { BlitzPage, useParam } from "blitz"
import { Form } from "../../core/components/Form"
const EditPage: BlitzPage = () => {
  const id = useParam("id")

  return (
    <div>
      <Form url={`http://localhost:8000/api/todo/${id}`} method="PUT" />
    </div>
  )
}

EditPage.suppressFirstRenderFlicker = true

export default EditPage
