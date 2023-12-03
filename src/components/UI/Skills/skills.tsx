"use client";
import Image from "next/image";
import styles from "./skills.module.css";
import { useState } from "react";
import { useGetAllSkillsQuery } from "@/redux/api/skillsApi";
import { useDebounced } from "@/redux/hook";

const SkillsSection = () => {
  const query: Record<string, any> = {};
  const [isFlipped, setIsFlipped] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetAllSkillsQuery({ ...query });
  if (isLoading) {
    <p>Loading.....</p>;
  }

  const skills = data?.skills;

  return (
    <div className="mt-20 lg:grid grid-cols-12 items-center justify-items-center">
      <div
        className={`lg:-rotate-90 col-span-2 text-[50px] lg:text-[100px] xl:text-[130px] md:text-[80px] font-bold ${styles.header_title}`}
      >
        <h1>Skills</h1>
      </div>
      <div className="mt-10 md:mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-10 justify-items-center items-center col-span-10 w-full">
        {skills?.map((skill: any) => (
          <div
            key={skill?.id}
            className={`${styles.flipCard} ${isFlipped ? styles.flipped : ""}`}
          >
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <div className={styles.Icon_box}>
                  <Image src={skill.imageUrl} alt="" height={60} width={60} />
                </div>
              </div>
              <div className={styles.flipCardBack}>
                <h4 className="text-xl font-medium">{skill?.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
