
import { useState } from "react";
import { ArrowRight, Facebook, Instagram } from "lucide-react";
import {
  Container,
  SectionHeader,
  mailHref,
  telHref,
  waHref,
} from "./primitives";
import { site } from "@/content/site";

type Values = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "sent";

const empty: Values = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

function validate(v: Values): Errors {
  const e: Errors = {};

  if (v.name.trim().length < 2) {
    e.name = "PLEASE ENTER YOUR NAME";
  }

  if (!/^[\d+\-()\s]{7,20}$/.test(v.phone.trim())) {
    e.phone = "PLEASE ENTER A VALID PHONE NUMBER";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) {
    e.email = "PLEASE ENTER A VALID EMAIL";
  }

  if (v.message.trim().length < 10) {
    e.message = "PLEASE ENTER AT LEAST 10 CHARACTERS";
  }

  return e;
}

export function Contact() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set =
    (k: keyof Values) =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((p) => ({ ...p, [k]: ev.target.value }));
      setErrors((p) => ({ ...p, [k]: undefined }));
    };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const e = validate(values);
    setErrors(e);

    if (Object.keys(e).length > 0) return;

    const subject = "New Enquiry - Focus Zone Library";

    const body = [
      "New enquiry from the Focus Zone Library website",
      "",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Email: ${values.email.trim()}`,
      "",
      "Message:",
      values.message.trim(),
    ].join("\n");

    const mailtoUrl =
      `mailto:${site.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    // Open the visitor's configured email application.
    window.location.href = mailtoUrl;

    // Show instructions, not a false claim that the email was sent.
    setStatus("sent");
  };

  const details = [
    {
      k: "CALL",
      v: site.phone,
      href: telHref(site.phone),
      external: false,
    },
    {
      k: "WHATSAPP",
      v: site.whatsapp,
      href: waHref(site.whatsapp, site.whatsappMessage),
      external: true,
    },
    {
      k: "EMAIL",
      v: site.email,
      href: mailHref(site.email),
      external: false,
    },
    {
      k: "VISIT",
      v: `${site.address}, ${site.addressLine2}`,
      href: undefined,
      external: false,
    },
  ];

  return (
    <section
      id="contact"
      className="border-b border-foreground py-16 md:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              index="08"
              kicker="GET IN TOUCH"
              heading="Have a question?"
            />
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
                        {...(d.external
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
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
                    aria-label="Focus Zone Library on Facebook"
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
                <p className="font-display text-3xl">
                  Complete your enquiry
                </p>

                <p className="mt-4 max-w-[46ch]">
                  Your email app should open with your enquiry details filled
                  in. Review the message and press Send to contact Focus Zone
                  Library. If your email app did not open, use the email
                  address listed on this page.
                </p>

                <a
                  href={mailHref(site.email)}
                  className="btn-solid mt-8 inline-flex items-center gap-2"
                >
                  EMAIL US DIRECTLY
                  <ArrowRight size={13} strokeWidth={1.25} aria-hidden />
                </a>

                <div>
                  <button
                    type="button"
                    className="btn-outline mt-4"
                    onClick={() => setStatus("idle")}
                  >
                    BACK TO CONTACT FORM
                  </button>
                </div>
              </div>
            ) : (
              <form className="mt-6" onSubmit={onSubmit} noValidate>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field
                    id="name"
                    label="NAME"
                    value={values.name}
                    onChange={set("name")}
                    error={errors.name}
                  />

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
                  <label
                    htmlFor="message"
                    className="label text-muted-foreground"
                  >
                    MESSAGE
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={values.message}
                    onChange={set("message")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className={`field mt-2 ${
                      errors.message ? "border-2" : ""
                    }`}
                  />

                  {errors.message && (
                    <p id="message-error" className="label mt-2">
                      ✕ {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-solid mt-8 w-full sm:w-auto"
                >
                  SEND ENQUIRY{" "}
                  <ArrowRight size={13} strokeWidth={1.25} aria-hidden />
                </button>

                <p className="label mt-4 text-muted-foreground">
                  YOUR EMAIL APP WILL OPEN TO COMPLETE AND SEND YOUR ENQUIRY.
                </p>
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
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
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
