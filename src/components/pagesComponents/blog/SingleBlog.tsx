import Image from "next/image";
import React from "react";
import BannerImage from "@/utilities/javascript_classes_take_some_understanding.webp";
import { Divider } from "antd";
import Link from "next/link";

const SingleBlogPage = ({ params }: { params: string }) => {
  return (
    <div className="w-[90%] mx-auto mt-10">
      <div>
        <Image
          className="w-full h-[200px] md:h-[300px] lg:h-[500px]"
          src={BannerImage}
          alt="Blog image"
          width={500}
          height={500}
        />
      </div>
      <div className="my-10 text-white">
        <h4 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
          JKLASDfklja sdlkflkasd lkjsdakl jaskldjf klasdjlk jasdkl kasdfsd
        </h4>
        <Divider className="bg-[#17e551]" />
        <div className="md:grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 ">
            <p className="text-md md:text-lg lg:text-xl text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus cumque porro doloribus suscipit pariatur deleniti
              voluptas architecto ducimus nemo. Delectus ut reiciendis, hic ad
              commodi quis facilis esse dicta possimus dolore sunt doloremque
              Eaque impedit incidunt sapiente harum beatae, molestiae est
              pariatur sunt veritatis ea repellendus consectetur nesciunt ex.
              Nihil hic veniam est aperiam, magnam quasi perspiciatis! Dolorum
              quibusdam odio soluta perspiciatis asperiores sed esse ipsam rem
              deleniti saepe delectus minus magni incidunt quo ducimus adipisci
              reprehenderit, doloremque a deserunt fugit ratione. Dolores, quae
              in maiores aspernatur ut quidem, ab deleniti ex nisi veritatis
              fuga quia error iste commodi sint sequi optio quisquam similique,
              nulla magnam! Eum sint soluta a dicta nemo ad facilis recusandae
              ipsa ducimus? Quis nostrum possimus ad mollitia explicabo,
              inventore sed voluptatum quam, fugiat recusandae cum odit
              architecto consequuntur incidunt quos magni dolores fuga. Ab
              officia repellendus repudiandae labore. Velit sapiente quia
              repellat odit ab. Quis, id consectetur quam alias repellat nulla
              corporis exercitationem perferendis, illum excepturi sint
              laudantium ab sit ullam, quos aliquid qui molestiae pariatur
              molestias facere doloribus voluptates quaerat velit. Quis
              praesentium nam consectetur facilis perferendis id cum recusandae
              laudantium nulla similique, sapiente eaque soluta culpa ullam,
              atque modi. Sunt quo exercitationem porro illum earum vel eveniet
              recusandae magni a quis minima ipsum accusamus, mollitia debitis
              molestiae quae voluptatem ratione? Quis labore quam explicabo in
              deserunt ipsum repellendus est error totam quasi dolorum laborum
              iste corrupti, debitis nulla architecto aspernatur dignissimos?
            </p>
          </div>
          <div className="md:col-span-1 border-t md:border-none py-3 mt-5 md:mt-0 border-[#17e551] ">
            <div className="flex gap-3">
              <Image
                className="w-20 h-10"
                alt="Blog image"
                src={BannerImage}
                width={500}
                height={500}
              />
              <div>
                <Link className="text-[#17e58d]" href="">
                  Llkfasdlkf dsalkf sad aslkj sdakl asdlk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
