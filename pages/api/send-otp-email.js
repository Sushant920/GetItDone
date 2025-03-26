import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, otp } = req.body;

  const msg = {
    to: email,
    from: 'your-verified-sender@domain.com',
    subject: 'Your OTP for GetItDone',
    text: `Your verification code is: ${otp}`,
    html: `<strong>Your verification code is: ${otp}</strong>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('SendGrid error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}