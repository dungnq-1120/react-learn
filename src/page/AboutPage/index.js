import { useEffect, useState } from "react";

export default function AboutPage() {
  // didmount
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  useEffect(() => {
    console.log(" didmount");

    return () => {
      // xu li cac hanh dong will un mount
    };
  }, []);

  useEffect(() => {
    // did update
    console.log("hell");
  }, [value]);

  useEffect(() => {
    // did update
    console.log("hell1");
  }, [value1]);

  return (
    <h1>
      AboutPage
      <input value={value1} onChange={(e) => setValue1(e.target.value)} />
    </h1>
  );
}
