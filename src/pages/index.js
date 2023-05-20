import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import io from "socket.io-client";
import moment from "moment/moment";
import IdxImg from "../images/idx 1.png";
import OkImg from "../images/ojk 1.png";
import CompOne from "../images/comp1.png";
import CompTwo from "../images/comp2.png";
import CompThree from "../images/comp3.png";
import CompFour from "../images/comp4.png";
import CompFive from "../images/comp5.png";
import CompSix from "../images/comp6.png";
import CompSeven from "../images/comp7.png";
import Image from "next/image";
import Stock1Img from "../images/stock1.png";
import Stock2Img from "../images/stock2.png";
import Stock3Img from "../images/stock3.png";
import GirlImg from "../images/girl.png";
import stockVdo from "../images/stockVideo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const compImages = [
  CompOne,
  CompTwo,
  CompThree,
  CompFour,
  CompFive,
  CompSix,
  CompSeven,
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      ticks: {
        maxTicksLimit: 10,
      },
    },
  },
};

const index = () => {
  const socket = useRef();
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: values,

        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  useEffect(() => {
    if (!socket.current) {
      socket.current = io("http://localhost:3000", {
        path: "/api/stock",
      });
    }
    if (socket.current) {
      socket.current.on("data", (data) => {
        console.log(data.label);

        setLabels((prev) => [
          ...prev,
          moment.unix(data.label / 1000).format("HH:mm:ss"),
        ]);
        setValues((prev) => [...prev, data.data]);
      });
    }
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2  items-center justify-between px-16 py-8 bg-orange-50 gap-4">
        <div className="flex flex-col gap-3 items-start col-span-1 ">
          <div className=" text-orange-500 text-lg font-medium ">
            Smart Investation{" "}
          </div>
          <div className=" font-bold  text-5xl leading-[52px]">
            Invest Your Money With Us and{" "}
            <span className="text-orange-600 inline">Get Amazing Profit</span>
          </div>
          <div className="text-[#5C7184] my-5 leading-6">
            Maximize your investment in the capital market world with the
            convenience and various features provided by Tradiant.
          </div>
          <div className="flex gap-8 items-center my-4">
            <button className="py-4 px-6 bg-orange-600 text-white font-medium rounded-md">
              Get started
            </button>
            <div className="text-orange-600 font-semibold">
              See How it Works
            </div>
          </div>
          <div className="mt-6">
            <div className="text-gray-600 ">Registered and supervised by:</div>
            <div className="flex items-center gap-4 mt-4">
              <Image
                src={IdxImg}
                height={100}
                width={100}
                className=" h-14 w-auto"
              />
              <Image
                src={OkImg}
                height={100}
                width={100}
                className=" h-14 w-auto"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <Line options={options} data={data} />
        </div>
      </div>

      <div>
        <div className=" justify-center items-center flex-col gap-8 py-8 px-16">
          <div className="text-gray-900 text-2xl font-semibold  text-center my-8 mb-16 ">
            Invest in their stock and be part of the business
          </div>
          <Slider className="slick-slider" {...settings}>
            {compImages.map((comp) => {
              return (
                <div className=" h-6 w-40 slick-slide cursor-pointer">
                  <Image
                    src={comp}
                    height={22}
                    width={60}
                    className="h-6 w-60 object-contain"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="py-16 px-32 flex flex-col gap-4">
        <div className="flex flex-col justify-center items-center py-4">
          <div className="text-orange-600 font-semibold text-xl">
            Why choose Tradiant ?
          </div>
          <div className="text-gray-900 font-bold text-4xl leading-[64px]">
            Specially designed for stock market
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className=" bg-orange-100 p-8">
              <Image
                src={Stock1Img}
                height={200}
                width={300}
                className="h-[200px] w-[300px] object-cover rounded-xl"
              />
            </div>
            <div className="text-gray-900 font-semibold text-lg my-4">
              Quick Faster
            </div>
            <div className="text-gray-600 text-sm">
              Information spreads faster with the help of the Tradiant
              community. With Tradiant, you will be more updated with the latest
              information.
            </div>
          </div>

          <div className="col-span-1">
            <div className=" bg-orange-100 p-8">
              <Image
                src={Stock2Img}
                height={200}
                width={300}
                className="h-[200px] w-[300px] object-cover border rounded-xl "
              />
            </div>
            <div className="text-gray-900 font-semibold text-lg my-4">
              Quick Faster
            </div>
            <div className="text-gray-600 text-sm">
              Information spreads faster with the help of the Tradiant
              community. With Tradiant, you will be more updated with the latest
              information.
            </div>
          </div>

          <div className="col-span-1">
            <div className=" bg-orange-100 p-8">
              <Image
                src={Stock3Img}
                height={200}
                width={300}
                className="h-[200px] w-[300px] object-cover rounded-xl"
              />
            </div>
            <div className="text-gray-900 font-semibold text-lg my-4">
              Quick Faster
            </div>
            <div className="text-gray-600 text-sm">
              Information spreads faster with the help of the Tradiant
              community. With Tradiant, you will be more updated with the latest
              information.
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 mt-32 px-32 grid grid-cols-2 gap-32 justify-center ">
        <div className="col-span-1">
          <div className="relative p-8 bg-orange-100 rounded-3xl h-[320px]">
            <div className=" absolute bottom-0 ">
              <Image
                src={GirlImg}
                className="h-[458px] w-[305px] object-contain"
                height="308px"
                width="305px"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <div className="text-orange-600 text-lg font-semibold">
            Our Feature
          </div>
          <div className="text-gray-900 font-bold text-4xl leading-[50px]">
            Receive update market quickly everytime
          </div>
          <div className="text-gray-600 text-sm">
            Equipped with comprehensive analysis tools and Artificial
            Intelligent, it makes it easier and gives you a profitable
            experience in the form of market updates quickly everytime, so it is
            not too late to make the best investment decisions.
          </div>
          <button className="py-4 px-6 w-fit  bg-orange-600 text-white font-medium rounded-md">
            Get started
          </button>
        </div>
      </div>
      <div className="py-16 px-32 grid grid-cols-2 gap-32 justify-center items-center">
        <div className="col-span-1 flex flex-col gap-4">
          <div className="text-orange-600 text-lg font-semibold">
            Our Feature
          </div>
          <div className="text-gray-900 font-bold text-4xl leading-[50px]">
            Easy Way to Invest and Get Profit
          </div>
          <div className="text-gray-600 text-sm">
            Using the Tradiant Application is an easy way to invest and benefit,
            equipped with comprehensive analysis tools and Artificial
            Intelligent (AI) that helps automation in monitoring and
            transactions.
          </div>
          <button className="py-4 px-6 w-fit  bg-orange-600 text-white font-medium rounded-md">
            Get started
          </button>
        </div>
        <div className="col-span-1">
          <div className=" h-[320px]">
            <div className="">
              <Image
                src={stockVdo}
                className="  object-contain"
                height="308px"
                width="305px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 px-32 ">
        <div className="grid grid-cols-2 gap-32 justify-center items-center bg-orange-100 rounded-xl p-16 shadow-sm">
          <div className="col-span-1 flex flex-col gap-3 ">
            <div className="text-orange-600 text-lg font-medium uppercase">
              Our Newsletter
            </div>
            <div className="text-gray-900 font-bold text-4xl leading-[50px]">
              Stay updated with our weekly newsletter
            </div>
            <div className="text-gray-600 text-sm">
              a collection of the hottest stock market news sent every week to
              your email
            </div>
          </div>
          <form autoComplete="off" className="col-span-1 flex flex-col gap-4">
            <div className="text-xl font-semibold text-orange-600 mb-4">
              SignUp For Newsletter
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="bg-white border-0 outline-0 text-gray-500 text-xs p-4 w-full rounded-lg "
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="bg-white border-0 outline-0 text-gray-500 text-xs  p-4 w-full rounded-lg"
              />
            </div>
            <button className="py-3 mt-4 px-4 bg-orange-600 text-white flex justify-center font-medium rounded-lg">
              Get started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
