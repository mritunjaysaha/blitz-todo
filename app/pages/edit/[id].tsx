import { BlitzPage } from "blitz"
import { Form } from "../../core/components/Form"
const EditPage: BlitzPage = () => {
  return (
    <div>
      <Form url={`http://localhost:8000/api/todo${id}`} method="PUT" />
    </div>
  )
}

export default EditPage
