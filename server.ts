import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Contact Form API Endpoint
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing in environment variables.");
      return res.status(500).json({ error: "Server configuration error. API key missing." });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      console.log(`Attempting to send email from ${email} to ukashasabir500@gmail.com`);
      const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['ukashasabir500@gmail.com'],
        subject: `New Portfolio Message: ${subject}`,
        replyTo: email,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #0D9488;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend API Error details:", JSON.stringify(error, null, 2));
        return res.status(400).json({ error: error.message || "Resend API error", details: error });
      }

      console.log("Email sent successfully matching Resend ID:", data?.id);
      res.status(200).json({ message: "Email sent successfully!", data });
    } catch (err) {
      console.error("General Catch Error in /api/contact:", err);
      res.status(500).json({ error: "Internal server error. Check server logs." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
