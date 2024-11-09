import React, { useState } from "react";
import Sheet from "../ui/Sheet";
import Separator from "@src/ui/Separator";
import Link from "@docusaurus/Link";

interface ListItem {
  label: string;
  link: string;
}

interface ContentProps {
  title: string;
  description: string;
  list: ListItem[];
}

const MySheet: React.FC<ContentProps> = ({ title, description, list }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  return (
    <div className="mt-8">
      <button
        onClick={toggleSheet}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 border-none"
      >
        {title}
      </button>

      <Sheet isOpen={isSheetOpen} onClose={toggleSheet} Title={title}>
        <p className="text-gray-800 dark:text-gray-200">
          {description}
        </p>
        <Separator orientation="horizontal" className="my-4" />

        <ul>
          {list.map((item, index) => (
            <li key={index} className="text-gray-800 dark:text-gray-200 mb-2">
              <Link
                to={item.link}
                className="hover:underline text-blue-600 dark:text-blue-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Sheet>
    </div>
  );
};

export default MySheet;
