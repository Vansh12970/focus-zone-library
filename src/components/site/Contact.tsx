import { useState } from "react";
import { ArrowRight, Facebook, Instagram } from "lucide-react";
import { Container, SectionHeader, mailHref, telHref, waHref } from "./primitives";
import { site } from "@/content/site";

type Values = { name: string; phone: string; email: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "sending" | "sent" | "error";

const empty: Values = { name: "", phone: "", email: "", message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "PLEASE ENTER YOUR NAME";
  if (!/^[\d+\-()\s]{7,20}$/.test(v.phone.trim())) e.phone = "PLEASE ENTER A VALID PHONE NUMBER";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "PLEASE ENTER A VALID EMAIL";
  if (v.message.trim().length < 10) e.message = "PLEASE ENTER AT LEAST 10 CHARACTERS";
  return e;
}

/**
 * EmailJS configuration (free tier: https://www.emailjs.com/).
 * Set these in a .env file — see .env.example and docs/EMAIL_SETUP.md.
 * Until all three are present the form shows a setup notice instead of
 * pretending to send.
 */
const EMAILJS_SERVICE_ID = import.meta.env["VITE_EMAILJS_SERVICE_ID"] as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env["VITE_EMAILJS_TEMPLATE_ID"] as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"] as string | undefined;
const emailConfigured = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

async function sendEnquiry(v: Values): Promise<void> {
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        to_email: site.email,
        from_name: v.name.trim(),
        phone: v.phone.trim(),
        reply_to: v.email.trim(),
        message: v.message.trim(),
        submitted_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      },
    }),
  });
  if (!res.ok) throw new Error(`EmailJS responded with ${res.status}`);
}

export function Contact() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof Values) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((p) => ({ ...p, [k]: ev.target.value }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (status === "sending") return;
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setStatus("sending");
    try {
      await sendEnquiry(values);
      setStatus("sent");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  };

  const details = [
    { k: "CALL", v: site.phone, href: telHref(site.phone), external: false },
    { k: "WHATSAPP", v: site.whatsapp, href: waHref(site.whatsapp, site.whatsappMessage), external: true },
    { k: "EMAIL", v: site.email, href: mailHref(site.email), external: false },
    { k: "VISIT", v: `${site.address}, ${site.addressLine2}`, href: undefined, external: false },
  ];

  return (
    <section id="contact" className="border-b border-foreground py-16 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader index="08" kicker="GET IN TOUCH" heading="Have a question?" />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-24">
            <p className="text-muted-foreground">{site.contactIntro}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <dl className="border-t border-foreground">
              {details.map((d) => (
                <div key={d.k} className="border-b py-5">
                  <dt className="label text-muted-foreground">{d.k}</dt>
                  <dd className="mt-1 text-lg">
                    {d.href ? (
                      <a
                        href={d.href}
                        className="underline-offset-4 hover:underline"
                        {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {d.v}
                      </a>
                    ) : (
                      d.v
                    )}
                  </dd>
                </div>
              ))}
              <div className="border-b py-5">
                <dt className="label text-muted-foreground">SOCIAL</dt>
                <dd className="mt-2 flex flex-col gap-2">
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 underline-offset-4 hover:underline"
                  >
                    <Instagram size={15} strokeWidth={1.25} aria-hidden />
                    <span className="label">{site.instagramLabel}</span>
                  </a>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Focus Zone Library on Instagram"
                    className="flex items-center gap-3 underline-offset-4 hover:underline"
                  >
                    <Facebook size={15} strokeWidth={1.25} aria-hidden />
                    <span className="label">{site.instagramLabel}</span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7 lg:border-l lg:border-foreground lg:pl-12">
            <h3 className="label text-muted-foreground">CONTACT FORM</h3>

            {status === "sent" ? (
              <div role="status" className="mt-6 border border-foreground p-8">
                <p className="font-display text-3xl">Thank you!</p>
                <p className="mt-4 max-w-[46ch]">
                  Your enquiry has been sent successfully. We'll get back to you soon.
                </p>
                <button type="button" className="btn-outline mt-8" onClick={() => setStatus("idle")}>
                  SEND ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <form className="mt-6" onSubmit={onSubmit} noValidate>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field id="name" label="NAME" value={values.name} onChange={set("name")} error={errors.name} />
                  <Field
                    id="phone"
                    label="PHONE"
                    type="tel"
                    value={values.phone}
                    onChange={set("phone")}
                    error={errors.phone}
                  />
                </div>
                <div className="mt-6">
                  <Field
                    id="email"
                    label="EMAIL"
                    type="email"
                    value={values.email}
                    onChange={set("email")}
                    error={errors.email}
                  />
                </div>
                <div className="mt-6">
                  <label htmlFor="message" className="label text-muted-foreground">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={values.message}
                    onChange={set("message")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`field mt-2 ${errors.message ? "border-2" : ""}`}
                  />
                  {errors.message && (
                    <p id="message-error" className="label mt-2">
                      ✕ {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || !emailConfigured}
                  className="btn-solid mt-8 w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {status === "sending" ? "SENDING…" : "SEND ENQUIRY"}{" "}
                  <ArrowRight size={13} strokeWidth={1.25} aria-hidden />
                </button>

                {status === "error" && (
                  <p role="alert" className="label mt-4">
                    ✕ SORRY, YOUR MESSAGE COULD NOT BE SENT. PLEASE TRY AGAIN, OR REACH US DIRECTLY
                    ON {site.phone} OR {site.email}.
                  </p>
                )}
                {!emailConfigured && (
                  <p className="label mt-4 text-muted-foreground">
                    FORM READY — EMAIL DELIVERY ACTIVATES ONCE THE EMAILJS KEYS ARE CONFIGURED
                    (SEE .ENV.EXAMPLE)
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | undefined;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="label text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`field mt-2 ${error ? "border-2" : ""}`}
      />
      {error && (
        <p id={`${id}-error`} className="label mt-2">
          ✕ {error}
        </p>
      )}
    </div>
  );
}
