"use server"

import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
})

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    }
  }

  // Simulate sending email
  console.log("Form data:", validatedFields.data)
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In a real app, you would send an email here.
  // For example, using a third-party service like Resend or Nodemailer.

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
    errors: null,
  }
}
