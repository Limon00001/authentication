/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01/17/2024
 * @copyright 2024 monayem_hossain_limon
 */

// External Dependencies
import dotenv from "dotenv";
import { MailtrapClient } from "mailtrap";

// Configuration
dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;

const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: process.env.MAILTRAP_SENDER_EMAIL,
  name: process.env.MAILTRAP_SENDER_NAME,
};

// Export
export { mailtrapClient, sender };
