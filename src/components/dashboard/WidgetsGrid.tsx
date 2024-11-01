"use client";

import React from "react";

import { SimpleWidget } from "./SimpleWidget";
import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        label="Contador"
        title={`${count}`}
        subTitle="Productos"
        icon={<IoCartOutline size={50} className="text-blue-500" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
