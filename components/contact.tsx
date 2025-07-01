"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
  import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  // if you use a toast lib, optional
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          username: formData.firstName,
          message: formData.message,
          subject: formData.subject,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send email");
      }

      // optional toast
      toast.success("Email sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 gradient-warm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Let's discuss your next project or potential collaboration opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-sage-600" />
                <span>k0irala.gaurav21@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-sage-600" />
                <span>9841365752</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-sage-600" />
                <span>New Baneshwor , Kathmandu</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect with me</h4>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                >
                  <a
                    href="https://github.com/k0irala"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                >
                  <a
                    href="https://www.linkedin.com/in/gaurav-koirala-b4b8422a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>

              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your message..."
                    name="message"
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
