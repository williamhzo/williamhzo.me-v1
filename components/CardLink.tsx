import { FC, MutableRefObject, useEffect, useRef } from "react";

type CardLinkProps = {
  link: string;
  title: string;
  tags: string[];
};

export const CardLink: FC<CardLinkProps> = (props) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  function mouseMoveEvent(e: MouseEvent) {
    const currentRef = linkRef.current;

    if (!currentRef) return;

    const { x: positionToContainerX, y: positionToContainerY } =
      currentRef.getBoundingClientRect();
    const positionToWindowX = e.clientX;
    const positionToWindowY = e.clientY;
    const relativePositionX = positionToWindowX - positionToContainerX;
    const relativePositionY = positionToWindowY - positionToContainerY;
    currentRef.style.setProperty("--x-cursor-position", `${relativePositionX}`);
    currentRef.style.setProperty("--y-cursor-position", `${relativePositionY}`);
  }

  useEffect(() => {
    const currentRef = linkRef.current;

    if (!currentRef) return;

    currentRef.addEventListener("mousemove", mouseMoveEvent);

    return () => currentRef.removeEventListener("mousemove", mouseMoveEvent);
  }, [linkRef]);

  const { link, title, tags } = props;

  return (
    <a
      ref={linkRef}
      href={`https://${link}/`}
      target="_blank"
      rel="noreferrer"
      className="gradient-hover group block rounded-md border border-zinc-700/60 bg-subtle transition-colors duration-300 hover:border-sky-200/20"
    >
      <div className="flex justify-between gap-4  p-4 align-top">
        <div className="flex flex-col align-middle">
          <p className="tracking-wide">{title}</p>
          <p className="text-sm text-zinc-500 transition-colors duration-300 group-hover:text-sky-300">
            {link}
          </p>
        </div>

        <div className="flex flex-wrap justify-end gap-2 align-top ">
          {tags.map((tag) => (
            <span
              className=" grid h-fit place-items-center rounded-full border border-sky-200/10 bg-sky-200/10 px-3 py-1 text-sm text-sky-200/75 transition-colors duration-300 group-hover:border-sky-300/40 group-hover:text-sky-300"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};
