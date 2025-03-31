"use client";

import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const Banner = (
    {
        heading,
        title,
        breadcrumbs,
    }
) => {
    return (
        <>
            <section
                className="relative h-[450px] flex flex-col items-center justify-center text-white text-center"
                style={{
                    backgroundImage: "url('/banner1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    className: "",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="text-7xl font-bold mb-6">{heading}</h1>
                    <Breadcrumb className="text-white">
                        <BreadcrumbList className="flex justify-center items-center space-x-2">
                            <BreadcrumbItem>
                                <Link href="/" className="text-white hover:text-white">
                                    Home
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-white" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-white">{breadcrumbs}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <h1 className="text-5xl font-bold mt-2">{title}</h1>
                </div>
            </section>

        </>
    );
};

export default Banner;
