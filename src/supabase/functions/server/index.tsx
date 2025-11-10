import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-18b870a9/health", (c) => {
  return c.json({ status: "ok" });
});

// Beta signup endpoint
app.post("/make-server-18b870a9/beta-signup", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, interest } = body;

    // Validate required fields
    if (!name || !email || !interest) {
      console.log("Beta signup validation error: Missing required fields");
      return c.json({ error: "Name, email, and interest are required" }, 400);
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Beta signup validation error: Invalid email format");
      return c.json({ error: "Invalid email format" }, 400);
    }

    // Create a unique key for this signup using email
    const signupKey = `beta_signup:${email.toLowerCase()}`;
    
    // Check if email already exists
    const existing = await kv.get(signupKey);
    if (existing) {
      console.log(`Beta signup: Email ${email} already registered`);
      return c.json({ error: "This email is already registered for the beta" }, 409);
    }

    // Store the signup data
    const signupData = {
      name,
      email: email.toLowerCase(),
      interest,
      timestamp: new Date().toISOString(),
    };

    await kv.set(signupKey, signupData);
    console.log(`Beta signup successful: ${email} as ${interest}`);

    return c.json({ 
      success: true, 
      message: "Successfully registered for beta access!" 
    }, 201);

  } catch (error) {
    console.log(`Beta signup error: ${error}`);
    return c.json({ error: "Failed to process signup. Please try again." }, 500);
  }
});

// Get all beta signups (admin endpoint - you might want to add auth later)
app.get("/make-server-18b870a9/beta-signups", async (c) => {
  try {
    const signups = await kv.getByPrefix("beta_signup:");
    console.log(`Retrieved ${signups.length} beta signups`);
    
    return c.json({ 
      count: signups.length,
      signups: signups.sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )
    });
  } catch (error) {
    console.log(`Error retrieving beta signups: ${error}`);
    return c.json({ error: "Failed to retrieve signups" }, 500);
  }
});

Deno.serve(app.fetch);