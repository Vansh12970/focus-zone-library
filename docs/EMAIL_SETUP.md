# Contact form email setup (EmailJS, free tier)

The contact form sends enquiries to **focuszonelibrary1@gmail.com** via
EmailJS (free tier: 200 emails/month — plenty for a local library).

## Setup (about 10 minutes)

1. Sign up free at https://www.emailjs.com/
2. **Add an email service**: Email Services → Add New Service → Gmail →
   connect the `focuszonelibrary1@gmail.com` account. Note the **Service ID**.
3. **Create a template**: Email Templates → Create New Template.
   - Set **To Email** to `focuszonelibrary1@gmail.com`
   - Use these variables in the subject/body:
     `{{from_name}}`, `{{phone}}`, `{{reply_to}}`, `{{message}}`, `{{submitted_at}}`
   - Example body:
     ```
     New enquiry from the website
     Name: {{from_name}}
     Phone: {{phone}}
     Email: {{reply_to}}
     Sent: {{submitted_at}}

     Message:
     {{message}}
     ```
   - Note the **Template ID**.
4. **Copy your Public Key** from Account → General.
5. Create a `.env` file in the project root (copy `.env.example`) and fill in:
   ```
   VITE_EMAILJS_SERVICE_ID=...
   VITE_EMAILJS_TEMPLATE_ID=...
   VITE_EMAILJS_PUBLIC_KEY=...
   ```
6. Restart the dev server / republish the site.

## Testing

Open the contact section, fill in the form and submit. On success you will
see "Thank you! Your enquiry has been sent successfully." and the email
arrives at focuszonelibrary1@gmail.com. If sending fails, the form keeps
the visitor's text and shows an error with the phone/email fallback.

Until the three keys are configured, the submit button stays disabled with
a setup notice — the form never pretends to send.
