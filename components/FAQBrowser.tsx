'use client';

import { useMemo, useState } from 'react';
import { FAQS, FAQ_CATEGORIES } from '@/lib/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ALL = 'All';

export default function FAQBrowser() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const filtered = useMemo(() => {
    if (activeCategory === ALL) return FAQS;
    return FAQS.filter((faq) => faq.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {[ALL, ...FAQ_CATEGORIES].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              activeCategory === cat
                ? 'bg-[#0B1F3A] text-white border-[#0B1F3A]'
                : 'bg-white text-gray-600 border-gray-300 hover:border-[#0B1F3A]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {filtered.map((faq, idx) => (
          <AccordionItem
            key={idx}
            value={`faq-${idx}`}
            className="bg-white rounded-xl border border-gray-200 px-6 data-[state=open]:border-[#0B1F3A]/30"
          >
            <AccordionTrigger className="text-left text-base font-semibold text-[#0B1F3A] hover:no-underline py-5">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
