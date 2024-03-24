import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How does Dynamic OG work ?',
      answer: 'We use the values you send in the URL of the theme, generate an image and send you back the image!',
    },
    {
      question: 'Can I customize the colors of the theme ?',
      answer: 'No , the customization options comes with the self hosting version.',
    },

  ],
  [
    {
      question: 'Is Self Hosting version available?',
      answer:
        `At the moment no , we're still working on that , it will be availble soon!`,
    },
    {
      question: 'is Self Hosting be free?',
      answer: 'Each template is 5$ , we will help you set up the hosting environment',
    },

  ],
  [
    {
      question:
        'Where will I self host?',
      answer:
        `Using Vercel or Netlify Free usage! You don't have to pay for the servers unless you generate millions of OG images!`,
    },
    {
      question: 'Will there be more free templates ?',
      answer:
        `Yes , we will be adding more templated every week.`,
    }
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
