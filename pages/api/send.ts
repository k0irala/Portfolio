import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {email,username,subject,message} = req.body;
  const { data, error } = await resend.emails.send({
    from: 'gaurav@koiralagaurav.com.np',
    to: [email],
    subject: 'Thank you',
    react: EmailTemplate({ firstName: username , message: message, subject: subject }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};