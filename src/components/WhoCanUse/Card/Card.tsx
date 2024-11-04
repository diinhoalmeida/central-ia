type CardProps = {
  icon: React.ElementType;
  id: string;
  title: string;
  description: string;
  linkLabel: string;
  ariaLabel: string;
};

export function Card({
  icon: Icon,
  id,
  title,
  description,
  linkLabel,
  ariaLabel,
}: CardProps) {
  return (
    <article
      className="bg-blue-800 p-6 rounded-lg flex flex-col  "
      aria-labelledby={id}
    >
      <Icon className="text-4xl mb-4" aria-hidden="true" />
      <h3 id={id} className="text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-sm">{description}</p>
      <a
        href="#"
        className="mt-4 inline-block bg-white text-blue-900 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition"
        aria-label={ariaLabel}
      >
        {linkLabel}
      </a>
    </article>
  );
}
