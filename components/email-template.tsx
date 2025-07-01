import * as React from 'react';

type EmailTemplateProps = {
  firstName: string;
  message: string;
  subject: string;
};

export function EmailTemplate({ firstName, message ,subject }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <h5>Hello {firstName},</h5>
      <h1>Thank you for your message!</h1>
      <p>Here is a copy of what you sent:</p>
      <blockquote style={{ borderLeft: '4px solid #ccc', marginLeft: 0, paddingLeft: 10, color: '#555' }}>
        Subject: "{subject}" <br></br>
        Message: "{message}"
      </blockquote>
      <p>We will get back to you shortly.</p>
    </div>
  );
}
