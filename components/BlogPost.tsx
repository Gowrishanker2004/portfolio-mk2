import React, { useRef } from "react";

import Heading from "@/components/Heading";

interface BlogPostProps {
  title: string;
  description: string;
  date: Date;
}

const BlogPost: React.VFC<BlogPostProps> = ({ title, description, date }) => {
  const { current: loadedDate } = useRef<Date>(new Date());

  const getDaysBetweenDates = () => {
    const timeDifference = Math.abs(loadedDate.getTime() - date.getTime());
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="relative transition-transform hover:-translate-y-1">
      <div className="flex items-center p-6 -mx-6 border rounded-md border-neutral-300 dark:border-neutral-700">
        <div className="space-y-2">
          <Heading type="h3">{title}</Heading>
          <p className="text-sm leading-7 opacity-80">{description}</p>
        </div>
      </div>
      <time
        className="absolute bottom-0 right-0 px-4 py-2 text-xs transform translate-y-[1rem] bg-neutral-900"
        dateTime={`P${getDaysBetweenDates()}D`}
      >
        {getDaysBetweenDates()} days ago.
      </time>
    </div>
  );
};

export default BlogPost;
