/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/17/2024
 * @copyright 2024 monayem_hossain_limon
 */

// Internal Dependencies
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

// Send Verification Email
const sendVerificationEmail = async (email, verificationToken) => {
    const recipients = [{ email }];

    try {
        await mailtrapClient.send({
            from: sender,
            to: recipients,
            subject: "Verify Your Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationToken}", verificationToken),
            category: "Email Verification",
        })
        .then(() => {
            return { 
                success: true, 
                message: 'Verification email sent successfully' 
            };
        })
        .catch((error) => {
            throw new Error(error.message);
        });
    } catch (error) {
        throw new Error('Error sending verification message');
    }
};

// Send Welcome Email
const sendWelcomeEmail = async (email, name) => {
    const recipients = [{ email }];

    try {
        await mailtrapClient.send({
            from: sender,
            to: recipients,
            template_uuid: process.env.MAILTRAP_TEMPLATE_UUID,
            template_variables: {
                "name": name
            }
        })
        .then(() => {
            return { 
                success: true, 
                message: 'Email sent successfully' 
            };
        })
        .catch((error) => {
            throw new Error(error.message);
        });
    } catch (error) {
        throw new Error('Error sending welcome message');
    }
}

// Export
export { sendVerificationEmail, sendWelcomeEmail };
