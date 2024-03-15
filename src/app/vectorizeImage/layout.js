"use client";

import { useState } from "react";
import { UserAuth } from "../../contexts/UserContext";

export default function vectorizeBearLayout({
  children,
  upload,
  vectorize,
  download,
}) {
  const { isUploaded, setISUploaded, isVectorize } = UserAuth();
  return (
    <section>
      {/* {children} */}
      {!isUploaded && upload}
      {isUploaded && !isVectorize && vectorize}
      {isVectorize && download}
    </section>
  );
}
