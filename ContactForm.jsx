import { useState } from 'react'

const emptyForm = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters.'
    return next
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    setSuccess('')
    if (Object.keys(validationErrors).length === 0) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
      setSuccess('Your details look good. Your email app will open so you can send the message.')
      window.location.href = `mailto:davchristian293@gmail.com?subject=${subject}&body=${body}`
      setForm(emptyForm)
    }
  }

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
    setErrors({ ...errors, [event.target.name]: '' })
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label>Your name<input name="name" value={form.name} onChange={update} placeholder="Enter your name" />{errors.name && <small className="error">{errors.name}</small>}</label>
      <label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" />{errors.email && <small className="error">{errors.email}</small>}</label>
      <label>Message<textarea name="message" rows="5" value={form.message} onChange={update} placeholder="Tell me about your opportunity..." />{errors.message && <small className="error">{errors.message}</small>}</label>
      <button className="button primary" type="submit">Validate & send ↗</button>
      {success && <p className="success" role="status">{success}</p>}
    </form>
  )
}
