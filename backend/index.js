const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables

const app = express();

// ✅ Enable CORS to allow frontend requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://kriyonastudio.com"); // Allow frontend domain
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204); // Respond to preflight request
  }

  next();
});

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ API Route for Sending Emails
app.post("/api/send-email", async (req, res) => {
  console.log("📩 Received email request:", req.body);

  try {
    const { name, email, phone, message } = req.body;

    // ✅ Input Validation
    if (!name || !email  || !message) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    // ✅ Create Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // ✅ Mail Options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    };

    // ✅ Send Email
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

// ✅ Start Express Server (for Local Dev)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

module.exports = app; // ✅ Required for Vercel Deployment
