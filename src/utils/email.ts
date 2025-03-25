import emailjs from 'emailjs-com';

// EmailJS service configuration
// These values should be replaced with actual values when deploying
export const EMAILJS_SERVICE_ID = 'service_id';
export const EMAILJS_TEMPLATE_ID = 'template_id';
export const EMAILJS_USER_ID = 'user_id';

// Define the type for EmailJS response
interface EmailJSResponseStatus {
  status: number;
  text: string;
}

/**
 * Sends an email notification to matt@mxd.digital when a user submits the contact form
 * @param email The email address provided by the user
 * @returns Promise that resolves when the email is sent
 */
export const sendContactFormEmail = async (email: string): Promise<EmailJSResponseStatus> => {
  const templateParams: Record<string, unknown> = {
    email,
    to_email: 'matt@mxd.digital',
    message: `New contact request from ${email}`,
    date: new Date().toLocaleString(),
  };
  
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_USER_ID
  );
};
