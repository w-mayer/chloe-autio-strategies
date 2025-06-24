import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-background" style={{ fontFamily: 'DM Sans, Arial, Helvetica, sans-serif', color: '#434344' }}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="flex items-center mb-2 md:mb-0 md:mr-4">
            <Image
              src="/images/logo/AutioStrategies_Logo_FullColor_JustMark.png"
              alt="Autio Strategies Mark"
              width={32}
              height={32}
              className="opacity-80"
              priority
            />
          </div>
          <p className="text-center text-sm leading-loose md:text-left" style={{ color: '#434344', fontFamily: 'DM Sans, Arial, Helvetica, sans-serif' }}>
            Built by{" "}
            <a
              href="https://chloeautio.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-[#6F9C3B] transition-colors"
              style={{ fontFamily: 'DM Sans, Arial, Helvetica, sans-serif', color: '#434344' }}
            >
              Chloe Autio Strategies
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/chloeautio/chloe-autio-strategies"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-[#6F9C3B] transition-colors"
              style={{ fontFamily: 'DM Sans, Arial, Helvetica, sans-serif', color: '#434344' }}
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
          <div className="flex items-center space-x-4 text-sm" style={{ color: '#434344', fontFamily: 'DM Sans, Arial, Helvetica, sans-serif' }}>
            <a href="/privacy" className="hover:text-[#6F9C3B] transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-[#6F9C3B] transition-colors">Terms</a>
          </div>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <a
              href="mailto:info@chloeautio.com"
              className="text-[#434344] hover:text-[#6F9C3B] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/chloeautio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#434344] hover:text-[#6F9C3B] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/chloeautio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#434344] hover:text-[#6F9C3B] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 