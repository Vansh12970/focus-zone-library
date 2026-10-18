import { MapPin, MessageCircle, Phone } from "lucide-react";
import { mapHref, telHref, waHref } from "./primitives";
import { site } from "@/content/site";

export function MobileContactBar() {
  const actions = [
    { label: "CALL", href: telHref(site.phone), Icon: Phone },
    { label: "WHATSAPP", href: waHref(site.whatsapp, site.whatsappMessage), Icon: MessageCircle },
    { label: "DIRECTIONS", href: mapHref(), Icon: MapPin },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-background bg-foreground text-background lg:hidden">
      {actions.map(({ label, href, Icon }) =>
        href ? (
          <a
            key={label}
            href={href}
            {...(label === "CALL" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            className="label flex min-h-[52px] items-center justify-center gap-2 border-l border-background/30 first:border-l-0"
          >
            <Icon size={14} strokeWidth={1.25} aria-hidden />
            {label}
          </a>
        ) : (
          <span
            key={label}
            aria-disabled="true"
            className="label flex min-h-[52px] items-center justify-center gap-2 border-l border-background/30 opacity-50 first:border-l-0"
          >
            <Icon size={14} strokeWidth={1.25} aria-hidden />
            {label}
          </span>
        ),
      )}
    </div>
  );
}
