const faqs = [
  {
    question: "How do I order?",
    description:
      "Ordering from BeanBrew is easy! Just browse our selection, add your favorite coffee to the cart, and checkout. We'll handle the rest.",
  },
  {
    question: "What's your return policy?",
    description:
      "We stand by our coffee. If you're not satisfied with your purchase, let us know within 30 days for a full refund or exchange.",
  },
  ,
  {
    question: "Do you offer samples?",
    description:
      "Yes! We're excited for you to try our coffee. Check out our sample pack options to discover new favorite flavors.",
  },
  ,
  {
    question: "Can I pause my subscription?",
    description:
      "Absolutely. Manage your subscription preferences online or contact us directly to make any adjustments.",
  },
];

const FAQ = () => {
  return (
    <section className="px-2 py-4">
      <h2 className="text-3xl font-bold">FAQ Corner</h2>
      <ul>
        {faqs.map((faq) => {
          return (
            <li key={faq.question}>
              <label
                className="hover:underline hover:font-bold"
                htmlFor={faq.question}
              >
                {faq.question}
              </label>
              <input
                className="peer/input absolute opacity-0 -z-1"
                type="checkbox"
                name={faq.question}
                id={faq.question}
                // checked
              />

              <p className="max-h-0 overflow-hidden transition-all ease-in delay-350 peer-checked/input:max-h-40">
                {faq.description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FAQ;
