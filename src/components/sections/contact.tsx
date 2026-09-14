"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";
import { TerminalIntro } from "../terminal-intro";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto px-4 pt-24 pb-24">
      <div className="mb-12 w-full max-w-4xl mx-auto">
        <h2 className="text-center text-5xl font-bold leading-[0.95] text-foreground sm:text-6xl md:text-7xl">
          LET&apos;S WORK
          <br />
          TOGETHER
        </h2>
      </div>
      <div className="z-[9999] max-w-xl">
        <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl">
          <CardHeader>
            <CardTitle className="text-4xl">Get in touch</CardTitle>
            <CardDescription>
              Reach out for product work, collaborations, or new opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <a
              href={`mailto:${config.email}`}
              className="inline-flex items-center rounded-lg border border-border bg-background/60 px-4 py-3 text-sm font-medium text-foreground transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {config.email}
            </a>
            <p className="text-sm text-muted-foreground">
              I usually reply within a day or two.
            </p>
          </CardContent>
        </Card>
        <div className="mt-10">
          <TerminalIntro />
        </div>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
