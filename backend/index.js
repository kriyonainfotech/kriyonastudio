// import express from "express";
// import cors from "cors";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();
// const app = express();
// app.use(express.json());
// app.use(cors());

// // Setup Nodemailer Transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// // API Endpoint to Send Email
// app.post("/send-email", async (req, res) => {
//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL,
//     subject: `New Contact Form Submission from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res
//       .status(200)
//       .json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ success: false, message: "Email failed to send." });
//   }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Configure CORS - Allow only your frontend domain
app.use(
  cors({
    origin: ["https://kriyonastudio.com", "http://localhost:5173"], // ✅ Fixed quotes
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// ✅ Middleware
app.use(express.json());

// ✅ Setup Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD, // Use Gmail App Password
  },
});

// ✅ Email API Endpoint
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message, phone } = req.body;

    // Validate request data
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `📩 New Inquiry from ${name}`,
      text: `🔹 Name: ${name}
      🔹 Email: ${email}
      🔹 Phone: ${phone}

      📜 Message:
      ${message}

      📅 Submitted on: ${new Date().toLocaleString()}
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Email failed to send." });
  }
});

// ✅ Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
