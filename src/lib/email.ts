import emailjs from '@emailjs/browser';

interface ApplicationData {
  position: string;
  name: string;
  email: string;
  phone: string;
  age: string;
  experience: string;
  portfolio?: string;
  message: string;
}

// Initialize EmailJS with public key
emailjs.init({
  publicKey: "pkqB5fa8prmu8vMsO",
});

export async function sendApplicationEmail(data: ApplicationData) {
  try {
    console.log('Sending application email with data:', data);

    const templateParams = {
      to_name: 'CrossCult HR',
      to_email: 'crosscultemailjs@gmail.com',
      from_name: data.name,
      from_email: data.email,
      position: data.position,
      phone: data.phone,
      age: data.age,
      experience: data.experience,
      portfolio: data.portfolio || 'Not provided',
      message: data.message,
      reply_to: data.email,
      email: data.email,
    };

    console.log('Template parameters:', templateParams);

    const response = await emailjs.send(
      'service_iyzzsio',
      'template_wh2l3on',
      templateParams,
      'pkqB5fa8prmu8vMsO'
    );

    console.log('EmailJS response:', response);

    if (response.status === 200) {
      console.log('Email sent successfully');
      return { success: true };
    } else {
      console.error('Email sending failed with status:', response.status);
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    throw error;
  }
} 