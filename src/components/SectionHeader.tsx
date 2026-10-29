import { ArrowRightIcon } from './icons';

interface Props {
  title: string;
  href?: string;
}

export function SectionHeader({ title, href = '#' }: Props) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <a href={href} className="see-all">
        Voir tout <ArrowRightIcon />
      </a>
    </div>
  );
}
