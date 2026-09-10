import { useState } from "react";
import { ArrowRight, Facebook, Instagram } from "lucide-react";
import { Container, SectionHeader, mailHref, telHref, waHref } from "./primitives";
import { isPlaceholder, site } from "@/content/site";

type Values = { name: string; phone: string; email: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: "", phone: "", email: "", message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "PLEASE ENTER YOUR NAME";
  if (!/^[\d+\-()\s]{7,20}$/.test(v.phone.trim())) e.phone = "PLEASE ENTER A VALID PHONE NUMBER";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "PLEASE ENTER A VALID EMAIL";
  if (v.message.trim().length < 10) e.message = "PLEASE ENTER AT LEAST 10 CHARACTERS";
  return e;
}

export function Contact() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Values) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((p) => ({ ...p, [k]: ev.target.value }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    // No email service is connected yet; the enquiry is captured locally only.
    setSent(true);
    setValues(empty);
  };

  const details = [
    { k: "CALL", v: site.phone, href: telHref(site.phone) },
    { k: "WHATSAPP", v: site.whatsapp, href: waHref(site.whatsapp) },
    { k: "EMAIL", v: site.email, href: mailHref(site.email) },
    { k: "VISIT", v: site.address, href: undefined },
  ];

  return (
    <section id="contact" className="border-b border-foreground py-16 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader index="11" kicker="GET IN TOUCH" heading="Have a question?" />
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
                      <a href={d.href} className="underline-offset-4 hover:underline">
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
                  <span className="flex items-center gap-3">
                    <Instagram size={15} strokeWidth={1.25} aria-hidden /> {site.instagram}
                  </span>
                  <span className="flex items-center gap-3">
                    <Facebook size={15} strokeWidth={1.25} aria-hidden /> {site.facebook}
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7 lg:border-l lg:border-foreground lg:pl-12">
            <h3 className="label text-muted-foreground">CONTACT FORM</h3>

            {sent ? (
              <div role="status" className="mt-6 border border-foreground p-8">
                <p className="font-display text-3xl">Thank you.</p>
                <p className="label mt-4 text-muted-foreground">YOUR ENQUIRY HAS BEEN RECEIVED.</p>
                <p className="mt-6 max-w-[46ch] text-sm text-muted-foreground">
                  Note: no email service is connected yet, so this enquiry is not delivered anywhere.
                  Connect an email service to start receiving enquiries.
                </p>
                <button type="button" className="btn-outline mt-8" onClick={() => setSent(false)}>
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

                <button type="submit" className="btn-solid mt-8 w-full sm:w-auto">
                  SEND ENQUIRY <ArrowRight size={13} strokeWidth={1.25} aria-hidden />
                </button>
                {isPlaceholder(site.email) && (
                  <p className="label mt-4 text-muted-foreground">
                    FORM READY — AWAITING EMAIL SERVICE CONNECTION
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
