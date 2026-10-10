import Link from "next/link";
import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/container";
import { siteConfig } from "@/config/meta";
import { GitHubButton } from "@/components/ui/github-button";

const footerSocial = [
  { name: "GitHub", href: "https://github.com/srinath9121", icon: GithubLogo },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/srinath-swamy-b41a9b267", icon: LinkedinLogo },
  { name: "X", href: "https://x.com/swamy_srin65891", icon: XLogo },
  { name: "Instagram", href: "https://www.instagram.com/srinathhh_____/", icon: InstagramLogo },
  { name: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=msrinath9700@gmail.com", icon: EnvelopeSimple },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <Container className="flex flex-col items-center gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-center font-mono text-sm text-secondary sm:text-left">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <p className="mt-1">Built with precision, data, and code</p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <GitHubButton />

          <div className="flex items-center gap-2">
            {footerSocial.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.name}
                  className="flex size-9 items-center justify-center rounded-lg border border-border text-secondary transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Icon className="size-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
