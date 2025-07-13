export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, phone, projectType, message } = req.body

    // In a real application, you would:
    // 1. Validate the data
    // 2. Send an email using a service like SendGrid or Mailgun
    // 3. Store the submission in a database

    console.log('Contact form submission:', {
      name,
      email,
      phone,
      projectType,
      message
    })

    // Simulate delay for email sending
    await new Promise(resolve => setTimeout(resolve, 1000))

    res.status(200).json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Error handling contact form:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}