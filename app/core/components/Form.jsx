// import { ReactNode, PropsWithoutRef } from "react"
// import { Form as FinalForm, FormProps as FinalFormProps } from "react-final-form"
// import { z } from "zod"
// import { validateZodSchema } from "blitz"
// export { FORM_ERROR } from "final-form"

// export interface FormProps<S extends z.ZodType<any, any>>
//   extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
//   /** All your form fields */
//   children?: ReactNode
//   /** Text to display in the submit button */
//   submitText?: string
//   schema?: S
//   onSubmit: FinalFormProps<z.infer<S>>["onSubmit"]
//   initialValues?: FinalFormProps<z.infer<S>>["initialValues"]
// }

// export function Form<S extends z.ZodType<any, any>>({
//   children,
//   submitText,
//   schema,
//   initialValues,
//   onSubmit,
//   ...props
// }: FormProps<S>) {
//   return (
//     <FinalForm
//       initialValues={initialValues}
//       validate={validateZodSchema(schema)}
//       onSubmit={onSubmit}
//       render={({ handleSubmit, submitting, submitError }) => (
//         <form onSubmit={handleSubmit} className="form" {...props}>
//           {/* Form fields supplied as children are rendered here */}
//           {children}

//           {submitError && (
//             <div role="alert" style={{ color: "red" }}>
//               {submitError}
//             </div>
//           )}

//           {submitText && (
//             <button type="submit" disabled={submitting}>
//               {submitText}
//             </button>
//           )}

//           <style global jsx>{`
//             .form > * + * {
//               margin-top: 1rem;
//             }
//           `}</style>
//         </form>
//       )}
//     />
//   )
// }

import { useState } from "react"
import { postData } from "../utils/form-methods"

/**
 *
 * @param {url, method} param0
 * @returns
 */
export function Form({ url, method }) {
  const [data, setData] = useState({ title: "post-test", description: "post-test" })
  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.id]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newTodo = {
      title: data.title,
      description: data.description,
    }

    postData(url, newTodo, method).then((data) => console.log({ data }))

    setData({ title: "", description: "" })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" value={data.title} onChange={handleChange} />
      <label htmlFor="description">Description</label>
      <input id="description" type="text" value={data.description} onChange={handleChange} />
      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  )
}

// export {}
