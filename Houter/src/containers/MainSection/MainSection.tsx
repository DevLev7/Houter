"use client";

import SearchInput from "@/component/SearchInput/SearchInput";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Text from "@/component/Text/Text";
import Image from "next/image";
import styles from "./MainSection.module.scss";
import AvatarInfo from "@/component/AvatarInfo/AvatarInfo";

const MainSection = () => {
  return (
    <section className={styles.main_section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Text className={styles.title} tag="h1" style="h1">
              Find The Place To Live&nbsp;Your Dreams Easily Here
            </Text>
            <Text color="light-lilac" className={styles.description}>
              Everything you need about finding your place to live will be here,
              where it will be easier for you
            </Text>
            <SearchInput
              className={styles.search_input}
              placeholder="Search for the location you want!"
            />
            <Text color="gray" tag="span">
              Our Partnership{" "}
            </Text>
            <div className={styles.list}>
              <Image
                width={82.75}
                height={64}
                alt="partner"
                src="/images/partner_1.jpg"
              />
              <Image
                width={82.75}
                height={64}
                alt="partner"
                src="/images/partner_2.jpg"
              />
              <Image
                width={82.75}
                height={64}
                alt="partner"
                src="/images/partner_3.jpg"
              />
              <Image
                width={82.75}
                height={64}
                alt="partner"
                src="/images/partner_4.jpg"
              />
            </div>
          </div>
          <div className={styles.col}></div>
        </div>
      </div>
      <Swiper className={styles.slider} spaceBetween={16} slidesPerView={2.3}>
        <SwiperSlide className={styles.slide}>
          <AvatarInfo
            title={
              <Text tag="span" weight="600" color="blue">
                1K+ People
              </Text>
            }
            text={
              <Text size="xs_mini" color="lilac" tag="span">
                Successfully Getting Home
              </Text>
            }
            avatar={
              <Image
                height={56}
                width={112}
                src="/images/main_avatar_1.jpg"
                alt="avatars"
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <AvatarInfo
            title={
              <Text tag="span" weight="600" color="blue">
                56 Houses
              </Text>
            }
            text={
              <Text size="xs_mini" color="lilac" tag="span">
                Sold Monthly
              </Text>
            }
            avatar={
              <Image
                height={56}
                width={56}
                src="/images/main_avatar_2.jpg"
                alt="avatars"
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <AvatarInfo
            title={
              <Text tag="span" weight="600" color="blue">
                4K+
              </Text>
            }
            text={
              <Text size="xs_mini" color="lilac" tag="span">
                People Looking for New Homes
              </Text>
            }
            avatar={
              <Image
                height={56}
                width={56}
                src="/images/main_avatar_3.jpg"
                alt="avatars"
              />
            }
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainSection;
