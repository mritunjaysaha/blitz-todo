import { BlitzPage } from "blitz"
import { Form } from "../core/components/Form"

const NewPage: BlitzPage = () => {
  return (
    <div>
      <Form url="http://localhost:8000" method="POST" />
    </div>
  )
}

NewPage.suppressFirstRenderFlicker = true

export default NewPage
