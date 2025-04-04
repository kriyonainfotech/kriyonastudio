const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "https://kriyonastudio.com" })); // ✅ Only allow your frontend
// OR allow all origins for testing
// app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://kriyonastudio.com");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());

// ✅ Send Email Route
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
    console.log("Error sending email:", error);
    res.status(500).json({ success: false, message: "Email failed to send." });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
