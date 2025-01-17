/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/17/2024
 * @copyright 2024 monayem_hossain_limon
 */

// Internal Dependencies
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
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
            throw new Error('Error sending verification message');
        });
    } catch (error) {
        throw new Error(error.message);
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
            throw new Error('Error sending welcome message');
        });
    } catch (error) {
        throw new Error(error.message);
    }
}

const sendPasswordResetEmail = async (email, resetUrl) => {
    const recipients = [{ email }];

    try {
        await mailtrapClient.send({
            from: sender,
            to: recipients,
            subject: "Reset Your Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
            category: "Password Reset",
        })
        .then(() => {
            return { 
                success: true, 
                message: "Password reset email sent successfully"
            };
        })
        .catch((error) => {
            throw new Error('Error sending a reset email');
        });
    } catch (error) {
        throw new Error(error.message);
    }
}

const sendPasswordResetSuccessEmail = async (email, resetUrl) => {
    const recipients = [{ email }];

    try {
        await mailtrapClient.send({
            from: sender,
            to: recipients,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset",
        })
        .then(() => {
            return { 
                success: true, 
                message: "Password reset successfully"
            };
        })
        .catch((error) => {
            throw new Error('Error sending an email');
        });
    } catch (error) {
        throw new Error(error.message);
    }
}

// Export
export { sendPasswordResetEmail, sendPasswordResetSuccessEmail, sendVerificationEmail, sendWelcomeEmail };

