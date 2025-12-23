"use client";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { H2, H5 } from "@/components/ui/Text";
import { useArticleList } from "@/hooks/useArticlesList";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {
  HiOutlineChartBar,
  HiOutlineChartSquareBar,
  HiOutlineTrendingUp,
} from "react-icons/hi";
import { RiRadarLine } from "react-icons/ri";

const AllArticles = () => {
  const { articles } = useArticleList();

  // Icon rotation for variety
  const icons = [
    HiOutlineTrendingUp,
    HiOutlineChartBar,
    HiOutlineChartSquareBar,
    RiRadarLine,
  ];

  const getIcon = (index: number) => {
    return icons[index % icons.length];
  };
  return (
    <Container className="space-y-4 py-20 lg:py-48">
      <div>
        <H2 className="text-left">Recent Articles</H2>
      </div>
      <div>
        {articles.length > 0 &&
          articles.map((article, idx) => {
            const IconComponent = getIcon(idx);
            return (
              <Link
                href={`articles/${article._id}`}
                key={idx}
                className="flex items-center gap-4 py-3 px-2 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="shrink-0">
                  <IconComponent className="w-6 h-6 text-gray-500" />
                </div>
                <H5 className="line-clamp-1">{article.title}</H5>
                <FiArrowUpRight className="ml-auto w-5 h-5 text-gray-600" />
              </Link>
            );
          })}
      </div>
      <div>
        <Button label="View All" href="/articles" rightIcon={ChevronRight} />
      </div>
    </Container>
  );
};

export default AllArticles;
