export const getFormData = (form: HTMLFormElement): { [k: string]: FormDataEntryValue } => {
  const formData = new FormData(form)
  const entries = formData.entries()
  const data = Object.fromEntries(entries)

  return data
}
