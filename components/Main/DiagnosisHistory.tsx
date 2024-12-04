"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import BloodPressureChart from "../Chart/BloodPresurChart";
import { dataContext } from "@/app/page";

const DiagnosisHistory = () => {
  const { currentUserData } = useContext(dataContext);
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Systolic",
        data: [],
        borderColor: "rgba(230, 111, 210, 0.7)",
        backgroundColor: "rgba(230, 111, 210, 0.7)",
        tension: 0.4,
        pointBackgroundColor: "rgb(230, 111, 210)",
      },
      {
        label: "Diastolic",
        data: [],
        borderColor: "rgba(140, 111, 230, 0.7)",
        backgroundColor: "rgba(140, 111, 230, 0.7)",
        tension: 0.4,
        pointBackgroundColor: "rgb(140, 111, 230)",
      },
    ],
  });

  useEffect(() => {
    let chartData = currentUserData?.diagnosis_history;
    if (chartData) {
      const labels = chartData.map(
        (item: any) => `${item.month}, ${item.year}`
      );
      const systolicData = chartData.map(
        (item: any) => item.blood_pressure.systolic.value
      );
      const diastolicData = chartData.map(
        (item: any) => item.blood_pressure.diastolic.value
      );

      setData({
        labels,
        datasets: [
          {
            ...data.datasets[0],
            data: systolicData,
          },
          {
            ...data.datasets[1],
            data: diastolicData,
          },
        ],
      });
    }
  }, [currentUserData]);

  return (
    <div className="h-full w-full bg-white rounded-xl p-4 flex flex-col gap-3 ">
      <div className="font-bold text-2xl">Diagnosis History</div>
      <span className="bg-[#F4F0FE] w-full p-3 rounded-lg flex md:flex-row flex-col gap-2">
        <div className="w-[80%] sm:w-full">
          <BloodPressureChart data={data} />
        </div>
        <div className="flex md:flex-col sm:flex-row gap-1 md:w-[20%] sm:w-full">
          <div>
            <div className="flex items-center">
              <span className="w-3 h-3 inline-block bg-[#E66FD2] rounded-full mr-2"></span>
              <p>Systolic</p>
            </div>
            <p className="font-bold text-lg">
              {
                currentUserData.diagnosis_history[0].blood_pressure.systolic
                  .value
              }
            </p>
            <div className="flex items-center">
              {currentUserData.diagnosis_history[0].blood_pressure.systolic
                .levels === "Higher than Average" ? (
                <Image
                  src={"/icons/ArrowUp.svg"}
                  alt=""
                  width={10}
                  height={12}
                />
              ) : currentUserData.diagnosis_history[0].blood_pressure.systolic
                  .levels === "Lower than Average" ? (
                <Image
                  src={"/icons/ArrowDown.svg"}
                  alt=""
                  width={10}
                  height={12}
                />
              ) : null}
              <p className="text-sm">
                {
                  currentUserData.diagnosis_history[0].blood_pressure.systolic
                    .levels
                }
              </p>
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center">
                <span className="w-3 h-3 inline-block bg-[#8C6FE6] rounded-full mr-2"></span>
                <p>Diastolic</p>
              </div>
              <p className="font-bold text-lg">78</p>
              <div className="flex items-center">
                {currentUserData.diagnosis_history[0].blood_pressure.diastolic
                  .levels === "Higher than Average" ? (
                  <Image
                    src={"/icons/ArrowUp.svg"}
                    alt=""
                    width={10}
                    height={12}
                  />
                ) : currentUserData.diagnosis_history[0].blood_pressure
                    .diastolic.levels === "Lower than Average" ? (
                  <Image
                    src={"/icons/ArrowDown.svg"}
                    alt=""
                    width={10}
                    height={12}
                  />
                ) : null}
                <p className="text-sm">
                  {
                    currentUserData.diagnosis_history[0].blood_pressure
                      .diastolic.levels
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </span>
      {/* </div> */}

      <div className="flex gap-2">
        <div
          className={`w-full h-auto  rounded-xl p-3 flex gap-2 flex-col bg-[#E0F3FA]`}
        >
          {/* <div className="rounded-full w-24 h-auto bg-white"> */}
          <Image
            src={"/icons/respiratoryRate.svg"}
            alt={"Respiratory Rate"}
            width={80}
            height={80}
            className="w-20 h-auto"
          />
          {/* </div> */}
          <div>
            <p>{"Respiratory Rate"}</p>
            <p className="font-bold text-lg">
              {currentUserData.diagnosis_history[0].heart_rate.value}
            </p>
          </div>
          <div className="flex gap-1">
            {currentUserData.diagnosis_history[0].heart_rate.levels ===
            "Higher than Average" ? (
              <Image src={"/icons/ArrowUp.svg"} alt="" width={10} height={12} />
            ) : currentUserData.diagnosis_history[0].heart_rate.levels ===
              "Lower than Average" ? (
              <Image
                src={"/icons/ArrowDown.svg"}
                alt=""
                width={10}
                height={12}
              />
            ) : null}
            <p>{currentUserData.diagnosis_history[0].heart_rate.levels}</p>
          </div>
        </div>

        <div
          className={`w-full h-auto  rounded-xl p-3 flex gap-2 flex-col bg-[#FFE6E9]`}
        >
          {/* <div className="rounded-full w-24 h-auto bg-white"> */}
          <Image
            src={"/icons/temperature.svg"}
            alt={"Temperature"}
            width={80}
            height={80}
            className="w-20 h-auto"
          />
          {/* </div> */}
          <div>
            <p>{"Temperature"}</p>
            <p className="font-bold text-lg">
              {currentUserData.diagnosis_history[0].respiratory_rate.value}
            </p>
          </div>
          <div className="flex gap-1">
            {currentUserData.diagnosis_history[0].respiratory_rate.levels ===
            "Higher than Average" ? (
              <Image src={"/icons/ArrowUp.svg"} alt="" width={10} height={12} />
            ) : currentUserData.diagnosis_history[0].respiratory_rate.levels ===
              "Lower than Average" ? (
              <Image
                src={"/icons/ArrowDown.svg"}
                alt=""
                width={10}
                height={12}
              />
            ) : null}
            <p>
              {currentUserData.diagnosis_history[0].respiratory_rate.levels}
            </p>
          </div>
        </div>

        <div
          className={`w-full h-auto  rounded-xl p-3 flex gap-2 flex-col bg-[#FFE6F1]`}
        >
          {/* <div className="rounded-full w-24 h-auto bg-white"> */}
          <Image
            src={"/icons/HeartBPM.svg"}
            alt={"Heart Rate"}
            width={80}
            height={80}
            className="w-20 h-auto"
          />
          {/* </div> */}
          <div>
            <p>{"Heart Rate"}</p>
            <p className="font-bold text-lg">
              {currentUserData.diagnosis_history[0].temperature.value}
            </p>
          </div>
          <div className="flex gap-1">
            {currentUserData.diagnosis_history[0].temperature.levels ===
            "Higher than Average" ? (
              <Image src={"/icons/ArrowUp.svg"} alt="" width={10} height={12} />
            ) : currentUserData.diagnosis_history[0].temperature.levels ===
              "Lower than Average" ? (
              <Image
                src={"/icons/ArrowDown.svg"}
                alt=""
                width={10}
                height={12}
              />
            ) : null}
            <p>{currentUserData.diagnosis_history[0].temperature.levels}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
